(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Moving Car Animation_atlas_1", frames: [[0,770,853,326],[855,770,143,143],[0,0,1366,768]]}
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



(lib.Asset2carpngcopy = function() {
	this.initialize(ss["Moving Car Animation_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Asset4car = function() {
	this.initialize(ss["Moving Car Animation_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.city = function() {
	this.initialize(ss["Moving Car Animation_atlas_1"]);
	this.gotoAndStop(2);
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
	this.instance.setTransform(0,0,0.4904,0.4789);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,70.2,68.5), null);


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
	this.instance.setTransform(0,0,0.4904,0.4789);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,70.2,68.5), null);


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
	this.instance.setTransform(0,0,0.6967,0.8487);

	this.instance_1 = new lib.city();
	this.instance_1.setTransform(952,0,0.6967,0.8487);

	this.instance_2 = new lib.city();
	this.instance_2.setTransform(1904,0,0.6967,0.8487);

	this.instance_3 = new lib.city();
	this.instance_3.setTransform(2856,0,0.6967,0.8487);

	this.instance_4 = new lib.city();
	this.instance_4.setTransform(3808,0,0.6967,0.8487);

	this.instance_5 = new lib.city();
	this.instance_5.setTransform(4760,0,0.6967,0.8487);

	this.instance_6 = new lib.city();
	this.instance_6.setTransform(5712,0,0.6967,0.8487);

	this.instance_7 = new lib.city();
	this.instance_7.setTransform(6664,0,0.6967,0.8487);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,7615.7,651.8), null);


// stage content:
(lib.MovingCarAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// car
	this.instance = new lib.Asset2carpngcopy();
	this.instance.setTransform(303,443,0.5006,0.5644);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(126));

	// tyre_back
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(376.1,604.2,1,1,0,0,0,35.1,34.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-172.8,x:376},0).wait(1).to({rotation:-345.6,x:376.1},0).wait(1).to({rotation:-518.4,x:375.95},0).wait(1).to({rotation:-691.2,x:376.05,y:604.1},0).wait(1).to({rotation:-864,x:375.95},0).wait(1).to({rotation:-1036.8,x:376.1},0).wait(1).to({rotation:-1209.6,x:376,y:604.05},0).wait(1).to({rotation:-1382.4,x:376.05},0).wait(1).to({rotation:-1555.2,x:375.95,y:604},0).wait(1).to({rotation:-1728,x:376.05},0).wait(1).to({rotation:-1900.8,x:375.95,y:603.9},0).wait(1).to({rotation:-2073.6,x:376.05,y:604},0).wait(1).to({rotation:-2246.4,x:376,y:603.85},0).wait(1).to({rotation:-2419.2,x:376.05,y:604},0).wait(1).to({rotation:-2592,x:376,y:603.75},0).wait(1).to({rotation:-2764.8,x:376.05,y:603.9},0).wait(1).to({rotation:-2937.6,y:603.7},0).wait(1).to({rotation:-3110.4,y:603.85},0).wait(1).to({rotation:-3283.2,y:603.7},0).wait(1).to({rotation:-3456,x:376,y:603.85},0).wait(1).to({rotation:-3628.8,x:376.05,y:603.65},0).wait(1).to({rotation:-3801.6,x:375.95,y:603.75},0).wait(1).to({rotation:-3974.4,x:376.05,y:603.6},0).wait(1).to({rotation:-4147.2,x:376,y:603.7},0).wait(1).to({rotation:-4320,x:376.1,y:603.6},0).wait(1).to({rotation:-4492.8,x:376},0).wait(1).to({rotation:-4665.6,x:376.1},0).wait(1).to({rotation:-4838.4,x:375.95},0).wait(1).to({rotation:-5011.2,x:376.05,y:603.5},0).wait(1).to({rotation:-5184,x:375.95},0).wait(1).to({rotation:-5356.8,x:376.1},0).wait(1).to({rotation:-5529.6,x:376,y:603.45},0).wait(1).to({rotation:-5702.4,x:376.05},0).wait(1).to({rotation:-5875.2,x:375.95,y:603.4},0).wait(1).to({rotation:-6048,x:376.05},0).wait(1).to({rotation:-6220.8,x:375.95,y:603.3},0).wait(1).to({rotation:-6393.6,x:376.05,y:603.4},0).wait(1).to({rotation:-6566.4,x:376,y:603.25},0).wait(1).to({rotation:-6739.2,x:376.05,y:603.4},0).wait(1).to({rotation:-6912,x:376,y:603.15},0).wait(1).to({rotation:-7084.8,x:376.05,y:603.3},0).wait(1).to({rotation:-7257.6,y:603.1},0).wait(1).to({rotation:-7430.4,y:603.25},0).wait(1).to({rotation:-7603.2,y:603.1},0).wait(1).to({rotation:-7776,x:376,y:603.25},0).wait(1).to({rotation:-7948.8,x:376.05,y:603.05},0).wait(1).to({rotation:-8121.6,x:375.95,y:603.15},0).wait(1).to({rotation:-8294.4,x:376.05,y:603},0).wait(1).to({rotation:-8467.2,x:376,y:603.1},0).wait(1).to({rotation:-8640,x:376.1,y:603},0).wait(1).to({rotation:-8812.8,x:376},0).wait(1).to({rotation:-8985.6,x:376.1},0).wait(1).to({rotation:-9158.4,x:375.95},0).wait(1).to({rotation:-9331.2,x:376.05,y:602.9},0).wait(1).to({rotation:-9504,x:375.95},0).wait(1).to({rotation:-9676.8,x:376.1},0).wait(1).to({rotation:-9849.6,x:376,y:602.85},0).wait(1).to({rotation:-10022.4,x:376.05},0).wait(1).to({rotation:-10195.2,x:375.95,y:602.8},0).wait(1).to({rotation:-10368,x:376.05},0).wait(1).to({rotation:-10540.8,x:375.95,y:602.7},0).wait(1).to({rotation:-10713.6,x:376.05,y:602.8},0).wait(1).to({rotation:-10886.4,x:376,y:602.65},0).wait(1).to({rotation:-11059.2,x:376.05,y:602.8},0).wait(1).to({rotation:-11232,x:376,y:602.55},0).wait(1).to({rotation:-11404.8,x:376.05,y:602.7},0).wait(1).to({rotation:-11577.6,y:602.5},0).wait(1).to({rotation:-11750.4,y:602.65},0).wait(1).to({rotation:-11923.2,y:602.5},0).wait(1).to({rotation:-12096,x:376,y:602.65},0).wait(1).to({rotation:-12268.8,x:376.05,y:602.45},0).wait(1).to({rotation:-12441.6,x:375.95,y:602.55},0).wait(1).to({rotation:-12614.4,x:376.05,y:602.4},0).wait(1).to({rotation:-12787.2,x:376,y:602.5},0).wait(1).to({rotation:-12960,x:376.1,y:602.4},0).wait(1).to({rotation:-13132.8,x:376},0).wait(1).to({rotation:-13305.6,x:376.1},0).wait(1).to({rotation:-13478.4,x:375.95},0).wait(1).to({rotation:-13651.2,x:376.05,y:602.3},0).wait(1).to({rotation:-13824,x:375.95},0).wait(1).to({rotation:-13996.8,x:376.1},0).wait(1).to({rotation:-14169.6,x:376,y:602.25},0).wait(1).to({rotation:-14342.4,x:376.05},0).wait(1).to({rotation:-14515.2,x:375.95,y:602.2},0).wait(1).to({rotation:-14688,x:376.05},0).wait(1).to({rotation:-14860.8,x:375.95,y:602.1},0).wait(1).to({rotation:-15033.6,x:376.05,y:602.2},0).wait(1).to({rotation:-15206.4,x:376,y:602.05},0).wait(1).to({rotation:-15379.2,x:376.05,y:602.2},0).wait(1).to({rotation:-15552,x:376,y:601.95},0).wait(1).to({rotation:-15724.8,x:376.05,y:602.1},0).wait(1).to({rotation:-15897.6,y:601.9},0).wait(1).to({rotation:-16070.4,y:602.05},0).wait(1).to({rotation:-16243.2,y:601.9},0).wait(1).to({rotation:-16416,x:376,y:602.05},0).wait(1).to({rotation:-16588.8,x:376.05,y:601.85},0).wait(1).to({rotation:-16761.6,x:375.95,y:601.95},0).wait(1).to({rotation:-16934.4,x:376.05,y:601.8},0).wait(1).to({rotation:-17107.2,x:376,y:601.9},0).wait(1).to({rotation:-17280,x:376.1,y:601.8},0).wait(1).to({rotation:-17452.8,x:376},0).wait(1).to({rotation:-17625.6,x:376.1},0).wait(1).to({rotation:-17798.4,x:375.95},0).wait(1).to({rotation:-17971.2,x:376.05,y:601.7},0).wait(1).to({rotation:-18144,x:375.95},0).wait(1).to({rotation:-18316.8,x:376.1},0).wait(1).to({rotation:-18489.6,x:376,y:601.65},0).wait(1).to({rotation:-18662.4,x:376.05},0).wait(1).to({rotation:-18835.2,x:375.95,y:601.6},0).wait(1).to({rotation:-19008,x:376.05},0).wait(1).to({rotation:-19180.8,x:375.95,y:601.5},0).wait(1).to({rotation:-19353.6,x:376.05,y:601.6},0).wait(1).to({rotation:-19526.4,x:376,y:601.45},0).wait(1).to({rotation:-19699.2,x:376.05,y:601.6},0).wait(1).to({rotation:-19872,x:376,y:601.35},0).wait(1).to({rotation:-20044.8,x:376.05,y:601.5},0).wait(1).to({rotation:-20217.6,y:601.3},0).wait(1).to({rotation:-20390.4,y:601.45},0).wait(1).to({rotation:-20563.2,y:601.3},0).wait(1).to({rotation:-20736,x:376,y:601.45},0).wait(1).to({rotation:-20908.8,x:376.05,y:601.25},0).wait(1).to({rotation:-21081.6,x:375.95,y:601.35},0).wait(1).to({rotation:-21254.4,x:376.05,y:601.2},0).wait(1).to({rotation:-21427.2,x:376,y:601.3},0).wait(1).to({rotation:-21600,x:376.1,y:601.2},0).wait(1));

	// tyre_front
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(652.1,606.2,1,1,0,0,0,35.1,34.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:-172.8,x:652,y:606.25},0).wait(1).to({rotation:-345.6,x:652.1},0).wait(1).to({rotation:-518.4,x:651.95},0).wait(1).to({rotation:-691.2,x:652.05,y:606.2},0).wait(1).to({rotation:-864,x:651.95,y:606.25},0).wait(1).to({rotation:-1036.8,x:652.1},0).wait(1).to({rotation:-1209.6,x:652,y:606.2},0).wait(1).to({rotation:-1382.4,x:652.05,y:606.25},0).wait(1).to({rotation:-1555.2,x:651.95,y:606.2},0).wait(1).to({rotation:-1728,x:652.05,y:606.25},0).wait(1).to({rotation:-1900.8,x:651.95,y:606.15},0).wait(1).to({rotation:-2073.6,x:652.05,y:606.3},0).wait(1).to({rotation:-2246.4,x:652,y:606.15},0).wait(1).to({rotation:-2419.2,x:652.05,y:606.3},0).wait(1).to({rotation:-2592,x:652,y:606.15},0).wait(1).to({rotation:-2764.8,x:652.05,y:606.3},0).wait(1).to({rotation:-2937.6,y:606.1},0).wait(1).to({rotation:-3110.4,y:606.3},0).wait(1).to({rotation:-3283.2,y:606.15},0).wait(1).to({rotation:-3456,x:652,y:606.35},0).wait(1).to({rotation:-3628.8,x:652.05,y:606.15},0).wait(1).to({rotation:-3801.6,x:651.95,y:606.25},0).wait(1).to({rotation:-3974.4,x:652.05,y:606.15},0).wait(1).to({rotation:-4147.2,x:652,y:606.25},0).wait(1).to({rotation:-4320,x:652.1,y:606.2},0).wait(1).to({rotation:-4492.8,x:652,y:606.25},0).wait(1).to({rotation:-4665.6,x:652.1},0).wait(1).to({rotation:-4838.4,x:651.95},0).wait(1).to({rotation:-5011.2,x:652.05,y:606.2},0).wait(1).to({rotation:-5184,x:651.95,y:606.25},0).wait(1).to({rotation:-5356.8,x:652.1},0).wait(1).to({rotation:-5529.6,x:652,y:606.2},0).wait(1).to({rotation:-5702.4,x:652.05,y:606.25},0).wait(1).to({rotation:-5875.2,x:651.95,y:606.2},0).wait(1).to({rotation:-6048,x:652.05,y:606.25},0).wait(1).to({rotation:-6220.8,x:651.95,y:606.15},0).wait(1).to({rotation:-6393.6,x:652.05,y:606.3},0).wait(1).to({rotation:-6566.4,x:652,y:606.15},0).wait(1).to({rotation:-6739.2,x:652.05,y:606.3},0).wait(1).to({rotation:-6912,x:652,y:606.15},0).wait(1).to({rotation:-7084.8,x:652.05,y:606.3},0).wait(1).to({rotation:-7257.6,y:606.1},0).wait(1).to({rotation:-7430.4,y:606.3},0).wait(1).to({rotation:-7603.2,y:606.15},0).wait(1).to({rotation:-7776,x:652,y:606.35},0).wait(1).to({rotation:-7948.8,x:652.05,y:606.15},0).wait(1).to({rotation:-8121.6,x:651.95,y:606.25},0).wait(1).to({rotation:-8294.4,x:652.05,y:606.15},0).wait(1).to({rotation:-8467.2,x:652,y:606.25},0).wait(1).to({rotation:-8640,x:652.1,y:606.2},0).wait(1).to({rotation:-8812.8,x:652,y:606.25},0).wait(1).to({rotation:-8985.6,x:652.1},0).wait(1).to({rotation:-9158.4,x:651.95},0).wait(1).to({rotation:-9331.2,x:652.05,y:606.2},0).wait(1).to({rotation:-9504,x:651.95,y:606.25},0).wait(1).to({rotation:-9676.8,x:652.1},0).wait(1).to({rotation:-9849.6,x:652,y:606.2},0).wait(1).to({rotation:-10022.4,x:652.05,y:606.25},0).wait(1).to({rotation:-10195.2,x:651.95,y:606.2},0).wait(1).to({rotation:-10368,x:652.05,y:606.25},0).wait(1).to({rotation:-10540.8,x:651.95,y:606.15},0).wait(1).to({rotation:-10713.6,x:652.05,y:606.3},0).wait(1).to({rotation:-10886.4,x:652,y:606.15},0).wait(1).to({rotation:-11059.2,x:652.05,y:606.3},0).wait(1).to({rotation:-11232,x:652,y:606.15},0).wait(1).to({rotation:-11404.8,x:652.05,y:606.3},0).wait(1).to({rotation:-11577.6,y:606.1},0).wait(1).to({rotation:-11750.4,y:606.3},0).wait(1).to({rotation:-11923.2,y:606.15},0).wait(1).to({rotation:-12096,x:652,y:606.35},0).wait(1).to({rotation:-12268.8,x:652.05,y:606.15},0).wait(1).to({rotation:-12441.6,x:651.95,y:606.25},0).wait(1).to({rotation:-12614.4,x:652.05,y:606.15},0).wait(1).to({rotation:-12787.2,x:652,y:606.25},0).wait(1).to({rotation:-12960,x:652.1,y:606.2},0).wait(1).to({rotation:-13132.8,x:652,y:606.25},0).wait(1).to({rotation:-13305.6,x:652.1},0).wait(1).to({rotation:-13478.4,x:651.95},0).wait(1).to({rotation:-13651.2,x:652.05,y:606.2},0).wait(1).to({rotation:-13824,x:651.95,y:606.25},0).wait(1).to({rotation:-13996.8,x:652.1},0).wait(1).to({rotation:-14169.6,x:652,y:606.2},0).wait(1).to({rotation:-14342.4,x:652.05,y:606.25},0).wait(1).to({rotation:-14515.2,x:651.95,y:606.2},0).wait(1).to({rotation:-14688,x:652.05,y:606.25},0).wait(1).to({rotation:-14860.8,x:651.95,y:606.15},0).wait(1).to({rotation:-15033.6,x:652.05,y:606.3},0).wait(1).to({rotation:-15206.4,x:652,y:606.15},0).wait(1).to({rotation:-15379.2,x:652.05,y:606.3},0).wait(1).to({rotation:-15552,x:652,y:606.15},0).wait(1).to({rotation:-15724.8,x:652.05,y:606.3},0).wait(1).to({rotation:-15897.6,y:606.1},0).wait(1).to({rotation:-16070.4,y:606.3},0).wait(1).to({rotation:-16243.2,y:606.15},0).wait(1).to({rotation:-16416,x:652,y:606.35},0).wait(1).to({rotation:-16588.8,x:652.05,y:606.15},0).wait(1).to({rotation:-16761.6,x:651.95,y:606.25},0).wait(1).to({rotation:-16934.4,x:652.05,y:606.15},0).wait(1).to({rotation:-17107.2,x:652,y:606.25},0).wait(1).to({rotation:-17280,x:652.1,y:606.2},0).wait(1).to({rotation:-17452.8,x:652,y:606.25},0).wait(1).to({rotation:-17625.6,x:652.1},0).wait(1).to({rotation:-17798.4,x:651.95},0).wait(1).to({rotation:-17971.2,x:652.05,y:606.2},0).wait(1).to({rotation:-18144,x:651.95,y:606.25},0).wait(1).to({rotation:-18316.8,x:652.1},0).wait(1).to({rotation:-18489.6,x:652,y:606.2},0).wait(1).to({rotation:-18662.4,x:652.05,y:606.25},0).wait(1).to({rotation:-18835.2,x:651.95,y:606.2},0).wait(1).to({rotation:-19008,x:652.05,y:606.25},0).wait(1).to({rotation:-19180.8,x:651.95,y:606.15},0).wait(1).to({rotation:-19353.6,x:652.05,y:606.3},0).wait(1).to({rotation:-19526.4,x:652,y:606.15},0).wait(1).to({rotation:-19699.2,x:652.05,y:606.3},0).wait(1).to({rotation:-19872,x:652,y:606.15},0).wait(1).to({rotation:-20044.8,x:652.05,y:606.3},0).wait(1).to({rotation:-20217.6,y:606.1},0).wait(1).to({rotation:-20390.4,y:606.3},0).wait(1).to({rotation:-20563.2,y:606.15},0).wait(1).to({rotation:-20736,x:652,y:606.35},0).wait(1).to({rotation:-20908.8,x:652.05,y:606.15},0).wait(1).to({rotation:-21081.6,x:651.95,y:606.25},0).wait(1).to({rotation:-21254.4,x:652.05,y:606.15},0).wait(1).to({rotation:-21427.2,x:652,y:606.25},0).wait(1).to({rotation:-21600,x:652.1,y:606.2},0).wait(1));

	// bg
	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(3807.8,325.9,1,1,0,0,0,3807.8,325.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:3807.9,x:3761.45},0).wait(1).to({x:3715},0).wait(1).to({x:3668.55},0).wait(1).to({x:3622.1},0).wait(1).to({x:3575.65},0).wait(1).to({x:3529.2},0).wait(1).to({x:3482.75},0).wait(1).to({x:3436.3},0).wait(1).to({x:3389.85},0).wait(1).to({x:3343.4},0).wait(1).to({x:3296.95},0).wait(1).to({x:3250.5},0).wait(1).to({x:3204.05},0).wait(1).to({x:3157.6},0).wait(1).to({x:3111.15},0).wait(1).to({x:3064.7},0).wait(1).to({x:3018.25},0).wait(1).to({x:2971.8},0).wait(1).to({x:2925.35},0).wait(1).to({x:2878.9},0).wait(1).to({x:2832.45},0).wait(1).to({x:2786},0).wait(1).to({x:2739.55},0).wait(1).to({x:2693.1},0).wait(1).to({x:2646.65},0).wait(1).to({x:2600.2},0).wait(1).to({x:2553.75},0).wait(1).to({x:2507.3},0).wait(1).to({x:2460.85},0).wait(1).to({x:2414.4},0).wait(1).to({x:2367.9},0).wait(1).to({x:2321.45},0).wait(1).to({x:2275},0).wait(1).to({x:2228.55},0).wait(1).to({x:2182.1},0).wait(1).to({x:2135.65},0).wait(1).to({x:2089.2},0).wait(1).to({x:2042.75},0).wait(1).to({x:1996.3},0).wait(1).to({x:1949.85},0).wait(1).to({x:1903.4},0).wait(1).to({x:1856.95},0).wait(1).to({x:1810.5},0).wait(1).to({x:1764.05},0).wait(1).to({x:1717.6},0).wait(1).to({x:1671.15},0).wait(1).to({x:1624.7},0).wait(1).to({x:1578.25},0).wait(1).to({x:1531.8},0).wait(1).to({x:1485.35},0).wait(1).to({x:1438.9},0).wait(1).to({x:1392.45},0).wait(1).to({x:1346},0).wait(1).to({x:1299.55},0).wait(1).to({x:1253.1},0).wait(1).to({x:1206.65},0).wait(1).to({x:1160.2},0).wait(1).to({x:1113.75},0).wait(1).to({x:1067.3},0).wait(1).to({x:1020.85},0).wait(1).to({x:974.4},0).wait(1).to({x:927.9},0).wait(1).to({x:881.45},0).wait(1).to({x:835},0).wait(1).to({x:788.55},0).wait(1).to({x:742.1},0).wait(1).to({x:695.65},0).wait(1).to({x:649.2},0).wait(1).to({x:602.75},0).wait(1).to({x:556.3},0).wait(1).to({x:509.85},0).wait(1).to({x:463.4},0).wait(1).to({x:416.95},0).wait(1).to({x:370.5},0).wait(1).to({x:324.05},0).wait(1).to({x:277.6},0).wait(1).to({x:231.15},0).wait(1).to({x:184.7},0).wait(1).to({x:138.25},0).wait(1).to({x:91.8},0).wait(1).to({x:45.35},0).wait(1).to({x:-1.1},0).wait(1).to({x:-47.55},0).wait(1).to({x:-94},0).wait(1).to({x:-140.45},0).wait(1).to({x:-186.9},0).wait(1).to({x:-233.35},0).wait(1).to({x:-279.8},0).wait(1).to({x:-326.25},0).wait(1).to({x:-372.7},0).wait(1).to({x:-419.15},0).wait(1).to({x:-465.6},0).wait(1).to({x:-512.1},0).wait(1).to({x:-558.55},0).wait(1).to({x:-605},0).wait(1).to({x:-651.45},0).wait(1).to({x:-697.9},0).wait(1).to({x:-744.35},0).wait(1).to({x:-790.8},0).wait(1).to({x:-837.25},0).wait(1).to({x:-883.7},0).wait(1).to({x:-930.15},0).wait(1).to({x:-976.6},0).wait(1).to({x:-1023.05},0).wait(1).to({x:-1069.5},0).wait(1).to({x:-1115.95},0).wait(1).to({x:-1162.4},0).wait(1).to({x:-1208.85},0).wait(1).to({x:-1255.3},0).wait(1).to({x:-1301.75},0).wait(1).to({x:-1348.2},0).wait(1).to({x:-1394.65},0).wait(1).to({x:-1441.1},0).wait(1).to({x:-1487.55},0).wait(1).to({x:-1534},0).wait(1).to({x:-1580.45},0).wait(1).to({x:-1626.9},0).wait(1).to({x:-1673.35},0).wait(1).to({x:-1719.8},0).wait(1).to({x:-1766.25},0).wait(1).to({x:-1812.7},0).wait(1).to({x:-1859.15},0).wait(1).to({x:-1905.6},0).wait(1).to({x:-1952.1},0).wait(1).to({x:3807.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-5280,320,12895.7,335.20000000000005);
// library properties:
lib.properties = {
	id: '32372301A15AB2498021114BA71741B5',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Moving Car Animation_atlas_1.png", id:"Moving Car Animation_atlas_1"}
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
an.compositions['32372301A15AB2498021114BA71741B5'] = {
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