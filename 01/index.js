(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,1098,165,41],[0,1141,132,35],[0,770,853,326],[855,1034,143,143],[0,0,1366,768],[855,770,385,130],[855,902,385,130]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_8 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Asset2car = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Asset4car = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.city = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.pngimgcombuttons_PNG141 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.pngimgcombuttons_PNG142 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Asset4car();
	this.instance.setTransform(0,0,0.4991,0.5007);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,71.4,71.6), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Asset4car();
	this.instance.setTransform(0,0,0.4991,0.5007);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,71.4,71.6), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.city();
	this.instance.setTransform(0,0,0.5856,0.7709);

	this.instance_1 = new lib.city();
	this.instance_1.setTransform(800,0,0.5856,0.7709);

	this.instance_2 = new lib.city();
	this.instance_2.setTransform(1600,0,0.5856,0.7709);

	this.instance_3 = new lib.city();
	this.instance_3.setTransform(2400,0,0.5856,0.7709);

	this.instance_4 = new lib.city();
	this.instance_4.setTransform(3200,0,0.5856,0.7709);

	this.instance_5 = new lib.city();
	this.instance_5.setTransform(4000,0,0.5856,0.7709);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,4799.9,592.1), null);


(lib.stop_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(5.75,4.95,0.5,0.5);

	this.instance_1 = new lib.pngimgcombuttons_PNG142();
	this.instance_1.setTransform(-0.05,-0.05,0.2498,0.2333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.1,30.3);


(lib.play = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(17.8,6.45,0.5,0.5);

	this.instance_1 = new lib.pngimgcombuttons_PNG141();
	this.instance_1.setTransform(0,0,0.2675,0.2363);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103,30.7);


(lib.play_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.play();
	this.instance.setTransform(51.5,15.3,1,1,0,0,0,51.5,15.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103,30.7);


(lib.pay_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.play_btn = new lib.play_btn();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(51.5,15.3,1,1,0,0,0,51.5,15.3);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103,30.7);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.stop_btn.on('click', function(){
		/*
		Stop the complete animation.
		*/
		createjs.Ticker.removeEventListener('tick', stage);
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.play_btn.on('click', function(){
		/*
		Start the complete animation.
		*/
		createjs.Ticker.removeEventListener('tick', stage);
		createjs.Ticker.addEventListener('tick', stage);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(126));

	// stop_btn
	this.stop_btn = new lib.stop_btn();
	this.stop_btn.name = "stop_btn";
	this.stop_btn.setTransform(155.65,37,1,1,0,0,0,48,15.1);
	new cjs.ButtonHelper(this.stop_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stop_btn).to({_off:true},125).wait(1));

	// play_btn
	this.play_btn = new lib.pay_btn();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(54.5,36.85,1,1,0,0,0,51.5,15.3);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 1);

	this.play_btn_1 = new lib.play();
	this.play_btn_1.name = "play_btn_1";
	this.play_btn_1.setTransform(54.5,36.85,1,1,0,0,0,51.5,15.3);
	new cjs.ButtonHelper(this.play_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.play_btn}]}).to({state:[{t:this.play_btn}]},112).to({state:[{t:this.play_btn_1}]},13).wait(1));

	// car
	this.instance = new lib.Asset2car();
	this.instance.setTransform(197,415,0.489,0.4668);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},125).wait(1));

	// tyre_back
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(268.6,553.8,1,1,0,0,0,35.6,35.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:35.7,rotation:-174.1935,x:268.55},0).wait(1).to({rotation:-348.3871,x:268.65},0).wait(1).to({rotation:-522.5806,x:268.55,y:553.75},0).wait(1).to({rotation:-696.7742,x:268.7,y:553.8},0).wait(1).to({rotation:-870.9677,x:268.55},0).wait(1).to({rotation:-1045.1613,x:268.65,y:553.85},0).wait(1).to({rotation:-1219.3548,x:268.55,y:553.75},0).wait(1).to({rotation:-1393.5484,x:268.65,y:553.8},0).wait(1).to({rotation:-1567.7419,x:268.6,y:553.75},0).wait(1).to({rotation:-1741.9355,x:268.65,y:553.85},0).wait(1).to({rotation:-1916.129,y:553.75},0).wait(1).to({rotation:-2090.3226,y:553.85},0).wait(1).to({rotation:-2264.5161,x:268.6,y:553.75},0).wait(1).to({rotation:-2438.7097,y:553.8},0).wait(1).to({rotation:-2612.9032,x:268.65,y:553.75},0).wait(1).to({rotation:-2787.0968,y:553.85},0).wait(1).to({rotation:-2961.2903,y:553.7},0).wait(1).to({rotation:-3135.4839,x:268.6,y:553.85},0).wait(1).to({rotation:-3309.6774,y:553.7},0).wait(1).to({rotation:-3483.871,y:553.85},0).wait(1).to({rotation:-3658.0645,x:268.7,y:553.75},0).wait(1).to({rotation:-3832.2581,x:268.6,y:553.85},0).wait(1).to({rotation:-4006.4516,x:268.65,y:553.7},0).wait(1).to({rotation:-4180.6452,x:268.6,y:553.8},0).wait(1).to({rotation:-4354.8387,x:268.65,y:553.75},0).wait(1).to({rotation:-4529.0323,x:268.6,y:553.8},0).wait(1).to({rotation:-4703.2258,x:268.65,y:553.75},0).wait(1).to({rotation:-4877.4194,x:268.6,y:553.8},0).wait(1).to({rotation:-5051.6129,x:268.65,y:553.75},0).wait(1).to({rotation:-5225.8065,x:268.6,y:553.8},0).wait(1).to({rotation:-5400,x:268.7},0).wait(1).to({rotation:-5574.1935,x:268.55},0).wait(1).to({rotation:-5748.3871,x:268.65},0).wait(1).to({rotation:-5922.5806,x:268.55,y:553.75},0).wait(1).to({rotation:-6096.7742,x:268.7,y:553.8},0).wait(1).to({rotation:-6270.9677,x:268.55},0).wait(1).to({rotation:-6445.1613,x:268.65,y:553.85},0).wait(1).to({rotation:-6619.3548,x:268.55,y:553.75},0).wait(1).to({rotation:-6793.5484,x:268.65,y:553.8},0).wait(1).to({rotation:-6967.7419,x:268.6,y:553.75},0).wait(1).to({rotation:-7141.9355,x:268.65,y:553.85},0).wait(1).to({rotation:-7316.129,y:553.75},0).wait(1).to({rotation:-7490.3226,y:553.85},0).wait(1).to({rotation:-7664.5161,x:268.6,y:553.75},0).wait(1).to({rotation:-7838.7097,y:553.8},0).wait(1).to({rotation:-8012.9032,x:268.65,y:553.75},0).wait(1).to({rotation:-8187.0968,y:553.85},0).wait(1).to({rotation:-8361.2903,y:553.7},0).wait(1).to({rotation:-8535.4839,x:268.6,y:553.85},0).wait(1).to({rotation:-8709.6774,y:553.7},0).wait(1).to({rotation:-8883.871,y:553.85},0).wait(1).to({rotation:-9058.0645,x:268.7,y:553.75},0).wait(1).to({rotation:-9232.2581,x:268.6,y:553.85},0).wait(1).to({rotation:-9406.4516,x:268.65,y:553.7},0).wait(1).to({rotation:-9580.6452,x:268.6,y:553.8},0).wait(1).to({rotation:-9754.8387,x:268.65,y:553.75},0).wait(1).to({rotation:-9929.0323,x:268.6,y:553.8},0).wait(1).to({rotation:-10103.2258,x:268.65,y:553.75},0).wait(1).to({rotation:-10277.4194,x:268.6,y:553.8},0).wait(1).to({rotation:-10451.6129,x:268.65,y:553.75},0).wait(1).to({rotation:-10625.8065,x:268.6,y:553.8},0).wait(1).to({rotation:-10800,x:268.7},0).wait(1).to({rotation:-10974.1935,x:268.55},0).wait(1).to({rotation:-11148.3871,x:268.65},0).wait(1).to({rotation:-11322.5806,x:268.55,y:553.75},0).wait(1).to({rotation:-11496.7742,x:268.7,y:553.8},0).wait(1).to({rotation:-11670.9677,x:268.55},0).wait(1).to({rotation:-11845.1613,x:268.65,y:553.85},0).wait(1).to({rotation:-12019.3548,x:268.55,y:553.75},0).wait(1).to({rotation:-12193.5484,x:268.65,y:553.8},0).wait(1).to({rotation:-12367.7419,x:268.6,y:553.75},0).wait(1).to({rotation:-12541.9355,x:268.65,y:553.85},0).wait(1).to({rotation:-12716.129,y:553.75},0).wait(1).to({rotation:-12890.3226,y:553.85},0).wait(1).to({rotation:-13064.5161,x:268.6,y:553.75},0).wait(1).to({rotation:-13238.7097,y:553.8},0).wait(1).to({rotation:-13412.9032,x:268.65,y:553.75},0).wait(1).to({rotation:-13587.0968,y:553.85},0).wait(1).to({rotation:-13761.2903,y:553.7},0).wait(1).to({rotation:-13935.4839,x:268.6,y:553.85},0).wait(1).to({rotation:-14109.6774,y:553.7},0).wait(1).to({rotation:-14283.871,y:553.85},0).wait(1).to({rotation:-14458.0645,x:268.7,y:553.75},0).wait(1).to({rotation:-14632.2581,x:268.6,y:553.85},0).wait(1).to({rotation:-14806.4516,x:268.65,y:553.7},0).wait(1).to({rotation:-14980.6452,x:268.6,y:553.8},0).wait(1).to({rotation:-15154.8387,x:268.65,y:553.75},0).wait(1).to({rotation:-15329.0323,x:268.6,y:553.8},0).wait(1).to({rotation:-15503.2258,x:268.65,y:553.75},0).wait(1).to({rotation:-15677.4194,x:268.6,y:553.8},0).wait(1).to({rotation:-15851.6129,x:268.65,y:553.75},0).wait(1).to({rotation:-16025.8065,x:268.6,y:553.8},0).wait(1).to({rotation:-16200,x:268.7},0).wait(1).to({rotation:-16374.1935,x:268.55},0).wait(1).to({rotation:-16548.3871,x:268.65},0).wait(1).to({rotation:-16722.5806,x:268.55,y:553.75},0).wait(1).to({rotation:-16896.7742,x:268.7,y:553.8},0).wait(1).to({rotation:-17070.9677,x:268.55},0).wait(1).to({rotation:-17245.1613,x:268.65,y:553.85},0).wait(1).to({rotation:-17419.3548,x:268.55,y:553.75},0).wait(1).to({rotation:-17593.5484,x:268.65,y:553.8},0).wait(1).to({rotation:-17767.7419,x:268.6,y:553.75},0).wait(1).to({rotation:-17941.9355,x:268.65,y:553.85},0).wait(1).to({rotation:-18116.129,y:553.75},0).wait(1).to({rotation:-18290.3226,y:553.85},0).wait(1).to({rotation:-18464.5161,x:268.6,y:553.75},0).wait(1).to({rotation:-18638.7097,y:553.8},0).wait(1).to({rotation:-18812.9032,x:268.65,y:553.75},0).wait(1).to({rotation:-18987.0968,y:553.85},0).wait(1).to({rotation:-19161.2903,y:553.7},0).wait(1).to({rotation:-19335.4839,x:268.6,y:553.85},0).wait(1).to({rotation:-19509.6774,y:553.7},0).wait(1).to({rotation:-19683.871,y:553.85},0).wait(1).to({rotation:-19858.0645,x:268.7,y:553.75},0).wait(1).to({rotation:-20032.2581,x:268.6,y:553.85},0).wait(1).to({rotation:-20206.4516,x:268.65,y:553.7},0).wait(1).to({rotation:-20380.6452,x:268.6,y:553.8},0).wait(1).to({rotation:-20554.8387,x:268.65,y:553.75},0).wait(1).to({rotation:-20729.0323,x:268.6,y:553.8},0).wait(1).to({rotation:-20903.2258,x:268.65,y:553.75},0).wait(1).to({rotation:-21077.4194,x:268.6,y:553.8},0).wait(1).to({rotation:-21251.6129,x:268.65,y:553.75},0).wait(1).to({rotation:-21425.8065,x:268.6,y:553.8},0).wait(1).to({rotation:-21600,x:268.7},0).to({_off:true},1).wait(1));

	// tyre_front
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(537.6,552.8,1,1,0,0,0,35.6,35.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:35.7,rotation:-174.1935,x:537.55},0).wait(1).to({rotation:-348.3871,x:537.65},0).wait(1).to({rotation:-522.5806,x:537.55,y:552.75},0).wait(1).to({rotation:-696.7742,x:537.7,y:552.8},0).wait(1).to({rotation:-870.9677,x:537.55},0).wait(1).to({rotation:-1045.1613,x:537.65,y:552.85},0).wait(1).to({rotation:-1219.3548,x:537.55,y:552.75},0).wait(1).to({rotation:-1393.5484,x:537.65,y:552.8},0).wait(1).to({rotation:-1567.7419,x:537.6,y:552.75},0).wait(1).to({rotation:-1741.9355,x:537.65,y:552.85},0).wait(1).to({rotation:-1916.129,y:552.75},0).wait(1).to({rotation:-2090.3226,y:552.85},0).wait(1).to({rotation:-2264.5161,x:537.6,y:552.75},0).wait(1).to({rotation:-2438.7097,y:552.8},0).wait(1).to({rotation:-2612.9032,x:537.65,y:552.75},0).wait(1).to({rotation:-2787.0968,y:552.85},0).wait(1).to({rotation:-2961.2903,y:552.7},0).wait(1).to({rotation:-3135.4839,x:537.6,y:552.85},0).wait(1).to({rotation:-3309.6774,y:552.7},0).wait(1).to({rotation:-3483.871,y:552.85},0).wait(1).to({rotation:-3658.0645,x:537.7,y:552.75},0).wait(1).to({rotation:-3832.2581,x:537.6,y:552.85},0).wait(1).to({rotation:-4006.4516,x:537.65,y:552.7},0).wait(1).to({rotation:-4180.6452,x:537.6,y:552.8},0).wait(1).to({rotation:-4354.8387,x:537.65,y:552.75},0).wait(1).to({rotation:-4529.0323,x:537.6,y:552.8},0).wait(1).to({rotation:-4703.2258,x:537.65,y:552.75},0).wait(1).to({rotation:-4877.4194,x:537.6,y:552.8},0).wait(1).to({rotation:-5051.6129,x:537.65,y:552.75},0).wait(1).to({rotation:-5225.8065,x:537.6,y:552.8},0).wait(1).to({rotation:-5400,x:537.7},0).wait(1).to({rotation:-5574.1935,x:537.55},0).wait(1).to({rotation:-5748.3871,x:537.65},0).wait(1).to({rotation:-5922.5806,x:537.55,y:552.75},0).wait(1).to({rotation:-6096.7742,x:537.7,y:552.8},0).wait(1).to({rotation:-6270.9677,x:537.55},0).wait(1).to({rotation:-6445.1613,x:537.65,y:552.85},0).wait(1).to({rotation:-6619.3548,x:537.55,y:552.75},0).wait(1).to({rotation:-6793.5484,x:537.65,y:552.8},0).wait(1).to({rotation:-6967.7419,x:537.6,y:552.75},0).wait(1).to({rotation:-7141.9355,x:537.65,y:552.85},0).wait(1).to({rotation:-7316.129,y:552.75},0).wait(1).to({rotation:-7490.3226,y:552.85},0).wait(1).to({rotation:-7664.5161,x:537.6,y:552.75},0).wait(1).to({rotation:-7838.7097,y:552.8},0).wait(1).to({rotation:-8012.9032,x:537.65,y:552.75},0).wait(1).to({rotation:-8187.0968,y:552.85},0).wait(1).to({rotation:-8361.2903,y:552.7},0).wait(1).to({rotation:-8535.4839,x:537.6,y:552.85},0).wait(1).to({rotation:-8709.6774,y:552.7},0).wait(1).to({rotation:-8883.871,y:552.85},0).wait(1).to({rotation:-9058.0645,x:537.7,y:552.75},0).wait(1).to({rotation:-9232.2581,x:537.6,y:552.85},0).wait(1).to({rotation:-9406.4516,x:537.65,y:552.7},0).wait(1).to({rotation:-9580.6452,x:537.6,y:552.8},0).wait(1).to({rotation:-9754.8387,x:537.65,y:552.75},0).wait(1).to({rotation:-9929.0323,x:537.6,y:552.8},0).wait(1).to({rotation:-10103.2258,x:537.65,y:552.75},0).wait(1).to({rotation:-10277.4194,x:537.6,y:552.8},0).wait(1).to({rotation:-10451.6129,x:537.65,y:552.75},0).wait(1).to({rotation:-10625.8065,x:537.6,y:552.8},0).wait(1).to({rotation:-10800,x:537.7},0).wait(1).to({rotation:-10974.1935,x:537.55},0).wait(1).to({rotation:-11148.3871,x:537.65},0).wait(1).to({rotation:-11322.5806,x:537.55,y:552.75},0).wait(1).to({rotation:-11496.7742,x:537.7,y:552.8},0).wait(1).to({rotation:-11670.9677,x:537.55},0).wait(1).to({rotation:-11845.1613,x:537.65,y:552.85},0).wait(1).to({rotation:-12019.3548,x:537.55,y:552.75},0).wait(1).to({rotation:-12193.5484,x:537.65,y:552.8},0).wait(1).to({rotation:-12367.7419,x:537.6,y:552.75},0).wait(1).to({rotation:-12541.9355,x:537.65,y:552.85},0).wait(1).to({rotation:-12716.129,y:552.75},0).wait(1).to({rotation:-12890.3226,y:552.85},0).wait(1).to({rotation:-13064.5161,x:537.6,y:552.75},0).wait(1).to({rotation:-13238.7097,y:552.8},0).wait(1).to({rotation:-13412.9032,x:537.65,y:552.75},0).wait(1).to({rotation:-13587.0968,y:552.85},0).wait(1).to({rotation:-13761.2903,y:552.7},0).wait(1).to({rotation:-13935.4839,x:537.6,y:552.85},0).wait(1).to({rotation:-14109.6774,y:552.7},0).wait(1).to({rotation:-14283.871,y:552.85},0).wait(1).to({rotation:-14458.0645,x:537.7,y:552.75},0).wait(1).to({rotation:-14632.2581,x:537.6,y:552.85},0).wait(1).to({rotation:-14806.4516,x:537.65,y:552.7},0).wait(1).to({rotation:-14980.6452,x:537.6,y:552.8},0).wait(1).to({rotation:-15154.8387,x:537.65,y:552.75},0).wait(1).to({rotation:-15329.0323,x:537.6,y:552.8},0).wait(1).to({rotation:-15503.2258,x:537.65,y:552.75},0).wait(1).to({rotation:-15677.4194,x:537.6,y:552.8},0).wait(1).to({rotation:-15851.6129,x:537.65,y:552.75},0).wait(1).to({rotation:-16025.8065,x:537.6,y:552.8},0).wait(1).to({rotation:-16200,x:537.7},0).wait(1).to({rotation:-16374.1935,x:537.55},0).wait(1).to({rotation:-16548.3871,x:537.65},0).wait(1).to({rotation:-16722.5806,x:537.55,y:552.75},0).wait(1).to({rotation:-16896.7742,x:537.7,y:552.8},0).wait(1).to({rotation:-17070.9677,x:537.55},0).wait(1).to({rotation:-17245.1613,x:537.65,y:552.85},0).wait(1).to({rotation:-17419.3548,x:537.55,y:552.75},0).wait(1).to({rotation:-17593.5484,x:537.65,y:552.8},0).wait(1).to({rotation:-17767.7419,x:537.6,y:552.75},0).wait(1).to({rotation:-17941.9355,x:537.65,y:552.85},0).wait(1).to({rotation:-18116.129,y:552.75},0).wait(1).to({rotation:-18290.3226,y:552.85},0).wait(1).to({rotation:-18464.5161,x:537.6,y:552.75},0).wait(1).to({rotation:-18638.7097,y:552.8},0).wait(1).to({rotation:-18812.9032,x:537.65,y:552.75},0).wait(1).to({rotation:-18987.0968,y:552.85},0).wait(1).to({rotation:-19161.2903,y:552.7},0).wait(1).to({rotation:-19335.4839,x:537.6,y:552.85},0).wait(1).to({rotation:-19509.6774,y:552.7},0).wait(1).to({rotation:-19683.871,y:552.85},0).wait(1).to({rotation:-19858.0645,x:537.7,y:552.75},0).wait(1).to({rotation:-20032.2581,x:537.6,y:552.85},0).wait(1).to({rotation:-20206.4516,x:537.65,y:552.7},0).wait(1).to({rotation:-20380.6452,x:537.6,y:552.8},0).wait(1).to({rotation:-20554.8387,x:537.65,y:552.75},0).wait(1).to({rotation:-20729.0323,x:537.6,y:552.8},0).wait(1).to({rotation:-20903.2258,x:537.65,y:552.75},0).wait(1).to({rotation:-21077.4194,x:537.6,y:552.8},0).wait(1).to({rotation:-21251.6129,x:537.65,y:552.75},0).wait(1).to({rotation:-21425.8065,x:537.6,y:552.8},0).wait(1).to({rotation:-21600,x:537.7},0).to({_off:true},1).wait(1));

	// bg
	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(2400,304,1,1,0,0,0,2400,296);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:2399.9,x:2367.65,y:303.95},0).wait(1).to({x:2335.4},0).wait(1).to({x:2303.15},0).wait(1).to({x:2270.9},0).wait(1).to({x:2238.65},0).wait(1).to({x:2206.4},0).wait(1).to({x:2174.1},0).wait(1).to({x:2141.85},0).wait(1).to({x:2109.6},0).wait(1).to({x:2077.35},0).wait(1).to({x:2045.1},0).wait(1).to({x:2012.85},0).wait(1).to({x:1980.6},0).wait(1).to({x:1948.3},0).wait(1).to({x:1916.05},0).wait(1).to({x:1883.8},0).wait(1).to({x:1851.55},0).wait(1).to({x:1819.3},0).wait(1).to({x:1787.05},0).wait(1).to({x:1754.8},0).wait(1).to({x:1722.5},0).wait(1).to({x:1690.25},0).wait(1).to({x:1658},0).wait(1).to({x:1625.75},0).wait(1).to({x:1593.5},0).wait(1).to({x:1561.25},0).wait(1).to({x:1529},0).wait(1).to({x:1496.7},0).wait(1).to({x:1464.45},0).wait(1).to({x:1432.2},0).wait(1).to({x:1399.95},0).wait(1).to({x:1367.7},0).wait(1).to({x:1335.45},0).wait(1).to({x:1303.2},0).wait(1).to({x:1270.9},0).wait(1).to({x:1238.65},0).wait(1).to({x:1206.4},0).wait(1).to({x:1174.15},0).wait(1).to({x:1141.9},0).wait(1).to({x:1109.65},0).wait(1).to({x:1077.4},0).wait(1).to({x:1045.1},0).wait(1).to({x:1012.85},0).wait(1).to({x:980.6},0).wait(1).to({x:948.35},0).wait(1).to({x:916.1},0).wait(1).to({x:883.85},0).wait(1).to({x:851.6},0).wait(1).to({x:819.3},0).wait(1).to({x:787.05},0).wait(1).to({x:754.8},0).wait(1).to({x:722.55},0).wait(1).to({x:690.3},0).wait(1).to({x:658.05},0).wait(1).to({x:625.8},0).wait(1).to({x:593.5},0).wait(1).to({x:561.25},0).wait(1).to({x:529},0).wait(1).to({x:496.75},0).wait(1).to({x:464.5},0).wait(1).to({x:432.25},0).wait(1).to({x:399.95},0).wait(1).to({x:367.7},0).wait(1).to({x:335.45},0).wait(1).to({x:303.2},0).wait(1).to({x:270.95},0).wait(1).to({x:238.7},0).wait(1).to({x:206.45},0).wait(1).to({x:174.15},0).wait(1).to({x:141.9},0).wait(1).to({x:109.65},0).wait(1).to({x:77.4},0).wait(1).to({x:45.15},0).wait(1).to({x:12.9},0).wait(1).to({x:-19.35},0).wait(1).to({x:-51.65},0).wait(1).to({x:-83.9},0).wait(1).to({x:-116.15},0).wait(1).to({x:-148.4},0).wait(1).to({x:-180.65},0).wait(1).to({x:-212.9},0).wait(1).to({x:-245.15},0).wait(1).to({x:-277.45},0).wait(1).to({x:-309.7},0).wait(1).to({x:-341.95},0).wait(1).to({x:-374.2},0).wait(1).to({x:-406.45},0).wait(1).to({x:-438.7},0).wait(1).to({x:-470.95},0).wait(1).to({x:-503.25},0).wait(1).to({x:-535.5},0).wait(1).to({x:-567.75},0).wait(1).to({x:-600},0).wait(1).to({x:-632.25},0).wait(1).to({x:-664.5},0).wait(1).to({x:-696.75},0).wait(1).to({x:-729.05},0).wait(1).to({x:-761.3},0).wait(1).to({x:-793.55},0).wait(1).to({x:-825.8},0).wait(1).to({x:-858.05},0).wait(1).to({x:-890.3},0).wait(1).to({x:-922.55},0).wait(1).to({x:-954.85},0).wait(1).to({x:-987.1},0).wait(1).to({x:-1019.35},0).wait(1).to({x:-1051.6},0).wait(1).to({x:-1083.85},0).wait(1).to({x:-1116.1},0).wait(1).to({x:-1148.35},0).wait(1).to({x:-1180.65},0).wait(1).to({x:-1212.9},0).wait(1).to({x:-1245.15},0).wait(1).to({x:-1277.4},0).wait(1).to({x:-1309.65},0).wait(1).to({x:-1341.9},0).wait(1).to({x:-1374.15},0).wait(1).to({x:-1406.45},0).wait(1).to({x:-1438.7},0).wait(1).to({x:-1470.95},0).wait(1).to({x:-1503.2},0).wait(1).to({x:-1535.45},0).wait(1).to({x:-1567.7},0).wait(1).to({x:-1600},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-3599.9,308,8399.8,296.4);
// library properties:
lib.properties = {
	id: '1227D074F0ED994AA161348D4C15DDBD',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png", id:"index_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1227D074F0ED994AA161348D4C15DDBD'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;