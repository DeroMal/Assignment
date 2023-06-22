    // Get references to the HTML elements
    const operationSelect = document.getElementById('operation');
    const matrix1RowsInput = document.getElementById('matrix1Rows');
    const matrix1ColumnsInput = document.getElementById('matrix1Columns');
    const matrix2RowsInput = document.getElementById('matrix2Rows');
    const matrix2ColumnsInput = document.getElementById('matrix2Columns');
    const displayalert1 = document.getElementById('alert1');
    const displayalert2 = document.getElementById('alert2');
    // const displayalertContainer = document.getElementsByClassName('error');
    const scalarValueInput = document.getElementById('scalarValue');
    const submitBtn = document.getElementById('submitBtn');
    const resetBtn = document.getElementById('resetBtn');
    const operationBtn = document.getElementById('operationBtn');
    const backBtn = document.getElementById('backBtn');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const matrix2Container = document.getElementById('matrix2Container');
    const matrix2Op = document.getElementById('matrix2Op');
    const scalarOp = document.getElementById('scalarOp');
    const resultContainer = document.getElementById('resultContainer');
    const resultTable = document.getElementById('result');

    // matrix2ColumnsInput.disabled = true;
    // matrix2RowsInput.disabled = true;
    updateForm();

    // // Event listener for the operation drop-down menu
    function updateForm() {
        if (operationSelect.value === 'scalar') {
            matrix2ColumnsInput.disabled = true;
            matrix2RowsInput.disabled = true;
            scalarValueInput.disabled = false;
            operationBtn.textContent = 'Calculate';
        } else if (operationSelect.value === 'matrix') {
            matrix2ColumnsInput.disabled = false;
            matrix2RowsInput.disabled = false;
            scalarValueInput.disabled = true;
            operationBtn.textContent = 'Calculate';
        }
    }
    operationSelect.addEventListener('change', function() {
        updateForm();
    });

    // Submit button event listener
    submitBtn.addEventListener('click', function() {
        const matrix1Rows = parseInt(matrix1RowsInput.value);
        const matrix1Columns = parseInt(matrix1ColumnsInput.value);
        const matrix2Rows = parseInt(matrix2RowsInput.value);
        const matrix2Columns = parseInt(matrix2ColumnsInput.value);
        const scalarValue = parseInt(scalarValueInput.value);

        // Validate input values
        if (operationSelect.value === 'matrix' && matrix1Columns !== matrix2Rows) {
            // alert("Number of columns in Matrix 1 must be equal to the number of rows in Matrix 2!");
            matrix1ColumnsInput.disabled = true;
            matrix1RowsInput.disabled = true;
            matrix2ColumnsInput.disabled = true;
            matrix2RowsInput.disabled = true;
            scalarValueInput.disabled = true;
            operationSelect.disabled = true;
            displayalert1.innerHTML = 'Number of columns in matrix 1 are not equal to the number of rows of matrix 2.<br>Click Reset button and try again.<br><br>';
            return;
        }

        if (operationSelect.value === 'scalar' && (scalarValue < -5 || scalarValue > 5)) {
            // alert("Scalar value must be between -5 and 5 inclusive!");
            matrix1ColumnsInput.disabled = true;
            matrix1RowsInput.disabled = true;
            matrix2ColumnsInput.disabled = true;
            matrix2RowsInput.disabled = true;
            scalarValueInput.disabled = true;
            operationSelect.disabled = true;
            displayalert1.innerHTML = 'Scalar value must be between -5 and 5 inclusive!<br>Click Reset button and try again.<br><br>';
            return;
        }

        // Activate Matrix 2 or Scalar in operation
        if (operationSelect.value === 'matrix') {
            scalarOp.classList.add('hidden');
            matrix2Op.classList.remove('hidden');
        }
        if (operationSelect.value === 'scalar') {
            // Update the table with the scalar value
            const scalarTable = document.getElementById('scalarV');
            scalarTable.innerHTML = 'X ' + "  " + scalarValue;

            scalarOp.classList.remove('hidden');
            matrix2Op.classList.add('hidden');
        }

        // Display page 2 for entering matrix values
        displayPage2(matrix1Rows, matrix1Columns, matrix2Rows, matrix2Columns);
    });

    // Reset button event listener
    resetBtn.addEventListener('click', function() {
        location.reload(); // Refresh the page
    });

    // Operation button event listener
    operationBtn.addEventListener('click', function() {
        const matrix1Values = getMatrixValues('matrix1');
        const matrix2Values = getMatrixValues('matrix2');

        let result;
        if (operationSelect.value === 'scalar') {
            const scalarValue = parseInt(scalarValueInput.value);
            result = scalarMultiplication(matrix1Values, scalarValue);
        } else if (operationSelect.value === 'matrix') {
            result = matrixMultiplication(matrix1Values, matrix2Values);
        }

        // Display the result
        displayResult(result);
    });


    // Back button event listener
    backBtn.addEventListener('click', function() {
        displayPage1();
    });

    // Display the first page and hide the others
    function displayPage1() {
        page1.classList.remove('hidden');
        page2.classList.add('hidden');
        resultContainer.classList.add('hidden');
    }

    // Display the second page for entering matrix values
    function displayPage2(matrix1Rows, matrix1Columns, matrix2Rows, matrix2Columns) {
        createMatrixInput('matrix1', matrix1Rows, matrix1Columns);
        if (operationSelect.value === 'matrix') {
            createMatrixInput('matrix2', matrix2Rows, matrix2Columns);
        }

        page1.classList.add('hidden');
        page2.classList.remove('hidden');
        resultContainer.classList.add('hidden');
    }


    // Create the input fields for matrix values
    function createMatrixInput(tableId, rows, columns) {
        const table = document.getElementById(tableId);
        table.innerHTML = '';

        for (let i = 0; i < rows; i++) {
            const row = table.insertRow();
            for (let j = 0; j < columns; j++) {
                const cell = row.insertCell();
                const input = document.createElement('input');
                input.type = 'number';
                input.min = -9;
                input.max = 9;
                input.addEventListener('input', function() {
                    const value = parseInt(this.value);
                    if (value < -9 || value > 9 || value == 'NaN') {
                        this.value = '';
                        // alert('Matrix value must be between -9 and 9 inclusive!');
                        displayalert2.innerHTML = 'Number must be between -9 and 9 inclusive!';
                    } else {
                        displayalert2.innerHTML = "";
                    }
                });
                cell.appendChild(input);
            }
        }
    }


    // Get the matrix values from the input fields
    function getMatrixValues(tableId) {
        const table = document.getElementById(tableId);
        const rows = table.getElementsByTagName('tr');
        const values = [];
        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName('td');
            const rowValues = [];
            for (let j = 0; j < cells.length; j++) {
                rowValues.push(parseInt(cells[j].querySelector('input').value));
            }
            values.push(rowValues);
        }
        return values;
    }

    // Perform scalar multiplication
    function scalarMultiplication(matrix, scalar) {
        const result = [];
        for (let i = 0; i < matrix.length; i++) {
            const row = [];
            for (let j = 0; j < matrix[i].length; j++) {
                row.push(matrix[i][j] * scalar);
            }
            result.push(row);
        }
        return result;
    }

    // Perform matrix multiplication
    function matrixMultiplication(matrix1, matrix2) {
        const result = [];
        const rows1 = matrix1.length;
        const cols1 = matrix1[0].length;
        const rows2 = matrix2.length;
        const cols2 = matrix2[0].length;

        for (let i = 0; i < rows1; i++) {
            const row = [];
            for (let j = 0; j < cols2; j++) {
                let sum = 0;
                for (let k = 0; k < cols1; k++) {
                    sum += matrix1[i][k] * matrix2[k][j];
                }
                row.push(sum);
            }
            result.push(row);
        }
        return result;
    }

    // Display the result in the result container
    function displayResult(matrix) {
        resultTable.innerHTML = '';

        for (let i = 0; i < matrix.length; i++) {
            const row = resultTable.insertRow();
            for (let j = 0; j < matrix[i].length; j++) {
                const cell = row.insertCell();
                cell.textContent = matrix[i][j];
            }
        }

        resultContainer.classList.remove('hidden');
    }

    // Reset the form to its initial state
    function resetForm() {
        page1.classList.remove('hidden');
        page2.classList.add('hidden');
        resultContainer.classList.add('hidden');
        // matrix2Container.classList.add('hidden');
        // matrix2ColumnsInput.disabled = true;
        // matrix2RowsInput.disabled = true;

        scalarValueInput.disabled = false;
        matrix1RowsInput.value = '';
        matrix1ColumnsInput.value = '';
        matrix2RowsInput.value = '';
        matrix2ColumnsInput.value = '';
        scalarValueInput.value = '';
        resultTable.innerHTML = '';
        updateForm();
    }