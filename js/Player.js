class Player extends createjs.Container {
    constructor(playerNum) {
        super();
        this.setup(playerNum);
    }

    setup(playerNum) {
        const tank = "tank" + playerNum;
        const gun = "gun" + playerNum;
        this.maxDamageReached = false;
        this.body = CustomMethods.makeImage(tank);
        this.width = this.body.image.width;
        this.gun = CustomMethods.makeImage(gun);
        this.gun.regX = this.gun.image.width/2;
        this.gun.regY = this.gun.image.height;
        this.gun.x = this.width/2;
        this.gun.y = 6;
        this.addChild(this.gun);
        this.addChild(this.body);

        const healtIcon = CustomMethods.makeImage("health");
        healtIcon.regY = healtIcon.image.height/2;
        healtIcon.y = -950;
        this.addChild(healtIcon);

        this._health = 100;

        this._healthTxt = CustomMethods.makeText("100" , "36px Pixel" , "#c2ff2a" , "left" , "middle");
        this._healthTxt.x = healtIcon.x + 68;
        this._healthTxt.y = healtIcon.y;
        this.addChild(this._healthTxt);

        const damageIcon = CustomMethods.makeImage("damage");
        damageIcon.y = healtIcon.y + healtIcon.image.height + 20;
        damageIcon.regY = damageIcon.image.height/2;
        this.addChild(damageIcon);

        this._damage = 10;
        this._damageIcrement = 10;

        this._damageTxt = CustomMethods.makeText("10", "36px Pixel" , "#e3e6f5" , "left" , "middle");
        this._damageTxt.x = this._healthTxt.x;
        this._damageTxt.y = damageIcon.y;
        this.addChild(this._damageTxt);
    }

    decreaseHealth(dmg){
        this._health -= dmg;
        this._updateHealthTxt();
    }
    
    getHealth(){
        return this._health;
    }

    _updateHealthTxt(){
        this._healthTxt.text = this._health;
    }

    increaseDamage(){
        CustomMethods.playSound("damageUpSound");
        this._damage += this._damageIcrement;
        this._updateDamageTxt();
    }

    checkDamageLimit(opponentHp){
        if(this._damage >= opponentHp){
            this.maxDamageReached = true;
        }
    }
    
    getDamage(){
        return this._damage;
    }

    _updateDamageTxt(){
        this._damageTxt.text = this._damage;
    }

    restart(){
        this._health = 100;
        this._damage = 10;
        this.maxDamageReached = false;
        this._updateHealthTxt();
        this._updateDamageTxt();
        this.visible = true;
    }
}