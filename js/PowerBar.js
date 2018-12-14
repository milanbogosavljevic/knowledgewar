class PowerBar extends createjs.Container {
    constructor() {
        super();
        this.setup();
    }

    setup() {
        const body = CustomMethods.makeImage("meterBody");
        this.addChild(body);
        this._meter = CustomMethods.makeImage("meter");
        this._meter.regY = 140;
        this._meter.y = 144; // height(140) + spacing(4)
        this._meter.x = 4;
        this.addChild(this._meter);
    }

    startMeterMovement(){
        this._animateMeter();
    }

    resetMeter(){
        this._meter.scaleY = 1;
    }

    stopMeterMovement(){
        createjs.Tween.removeTweens(this._meter);
    }

    _animateMeter(){
        const borderScale = this._meter.scaleY === 0 ? 1 : 0;
        createjs.Tween.get(this._meter).to({scaleY:borderScale},1500).call(()=>{
            this._animateMeter();
        });
    }

    getPower(){
        return this._meter.scaleY.toFixed(2);
    }
}