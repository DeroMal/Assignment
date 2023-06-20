var animationButton = document.getElementById("animationButton");
var carElement = document.querySelector(".car");
var buildingsElement = document.querySelector(".buildings");
var isAnimationPaused = true;

function toggleAnimation() {
    if (isAnimationPaused) {
        carElement.style.animationPlayState = "running";
        buildingsElement.style.animationPlayState = "running";
        animationButton.textContent = "Pause Animation";
    } else {
        carElement.style.animationPlayState = "paused";
        buildingsElement.style.animationPlayState = "paused";
        animationButton.textContent = "Start Animation";
    }

    isAnimationPaused = !isAnimationPaused;
}