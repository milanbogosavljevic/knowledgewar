/**
 * Created by Milan on 7/1/2018.
 */

class Game extends createjs.Container {
    constructor(language) {
        super();
        this.setup(language);
    }

    setup(language) {
        const back = CustomMethods.makeImage("background",true);
        back.tickEnabled = false;
        this.addChild(back);

        this.missileIsLaunched = false;
        this.airStrikeIsCalled = false;
        this.gamePhase = "question";
        this.activePlayer = "player1";
        this.collisionObjects = [];

        this.addPlayer1();
        this.addPlayer2();
        this.addGrenade();
        this.addAirstrike1();
        this.addAirstrike2();
        this.addPowerBar();
        this.addCollisionObjects();
        this.setCollisionObjetsMinMaxPoiters();
        this.addQuestionsUI(language);

        // todo THIS IS JUST FOR DEV MODE
        //this.path = new createjs.Shape();
        //this.addChild(this.path);

        this.addAnimations();

        document.body.addEventListener('keydown', (e)=> {
            if(e.keyCode === 83){
                createjs.Sound.muted = !createjs.Sound.muted;
            }
            if(this.activePlayer === "player1"){
                switch (e.keyCode){
                    case 32:// space
                        this.clickHandler();
                        break;
                    case 40:// down
                        this.moveGunDown();
                        break;
                    case 38:// up
                        this.moveGunUp();
                        break;
                    case 49:// 1
                        this.questionsUI.buttonHandler(0);
                        break;
                    case 50:// 2
                        this.questionsUI.buttonHandler(1);
                        break;
                    case 51:// 3
                        this.questionsUI.buttonHandler(2);
                        break;
                    case 52:// 4
                        this.questionsUI.buttonHandler(3);
                        break;
                }
            }
        });

        back.on("click", (e)=>{
            if(this.activePlayer === "player2"){
                this.clickHandler();
            }
        });

        stage.on("stagemousemove",(e)=>{
            if(this.activePlayer === "player2"){
                if(this.gamePhase === "battle"){
                    if(this.missileIsLaunched === false){
                        const y = stage.mouseY;
                        if(y < this.player2.y){
                            const x = stage.mouseX;
                            if(x < this.player2.x){
                                this.rotateGun(x,y);
                            }
                        }
                    }
                }
            }
        });
        CustomMethods.playSound("backgroundSound",0.1,-1);
    }

    addAnimations(){
        this._smokeAnimation = CustomMethods.makeAnimation("smoke", 10 , 30 , false);
        this._smokeAnimation.visible = false;
        this._smokeAnimation.on("animationend",(e)=>{
           this._smokeAnimation.visible = false;
        });
        this.addChild(this._smokeAnimation);

        this._groundHitAnimation = CustomMethods.makeAnimation("groundHit", 12 , 20 , false);
        this._groundHitAnimation.visible = false;
        this._groundHitAnimation.on("animationend",(e)=>{
            this._groundHitAnimation.visible = false;
        });
        this.addChild(this._groundHitAnimation);

        this._enemyHitAnimation = CustomMethods.makeAnimation("enemyHit", 12 , 20 , false);
        this._enemyHitAnimation.visible = false;
        this._enemyHitAnimation.on("animationend",(e)=>{
            this._enemyHitAnimation.visible = false;
        });
        this.addChild(this._enemyHitAnimation);

        this._buildingHitAnimation = CustomMethods.makeAnimation("buildingHit", 9 , 20 , false);
        this._buildingHitAnimation.visible = false;
        this._buildingHitAnimation.on("animationend",(e)=>{
            this._buildingHitAnimation.visible = false;
        });
        this.addChild(this._buildingHitAnimation);
    }

    moveGunDown(){
        if(this.player1.gun.rotation < 90){
            this.player1.gun.rotation += 3;
        }
    }

    moveGunUp(){
        if(this.player1.gun.rotation > 0){
            this.player1.gun.rotation -= 3;
        }
    }

    clickHandler(){
        if(this.gamePhase === "battle"){
            if(this.airStrikeIsCalled === true){
                if(this.missileIsLaunched === false){
                    this.dropBomb();
                }
            }else{
                if(this.missileIsLaunched === false){
                    this.powerBar.stopMeterMovement();
                    const coordinates = this.getMissileCoordinates();
                    this.launchMissile(coordinates);
                }
            }
        }
    }

    addQuestionsUI(language){
        this.questionsUI = new QandAUI(this,language);
        this.questionsUI.x = (1920/2) - 500;
        this.questionsUI.y = 30;
        this.addChild(this.questionsUI);
        this.questionsUI.setQuestionAndAnswers(1);
    }

    showQuestion(){
        const questionLevel = this[this.activePlayer].getDamage()/10; // q levels can be 1 - 9
        this.gamePhase = "question";
        this.questionsUI.setQuestionAndAnswers(questionLevel);
        this.questionsUI.visible = true;
    }

    answeredCorrect(bool,airStrike){
        this.questionsUI.visible = false;
        this.powerBar.startMeterMovement();
        if(bool === true){
            this.increaseDamage();
            if(airStrike === true){
                this.callAirStrike();
            }
        }
        this.gamePhase = "battle";
    }

    rotateGun(x,y){
        let angleDeg = Math.atan2(this.player2.y - y, this.player2.x - x) * 180 / Math.PI;
        angleDeg -= 90;
        this.player2.gun.rotation = Math.round(angleDeg);
    }

    addPlayer1(){
        this.player1 = new Player("1");
        this.player1.x = 100;
        this.player1.y = 1000;
        this.addChild(this.player1);
    }

    addPlayer2(){
        this.player2 = new Player("2");
        this.player2.x = 1690;
        this.player2.y = 1000;
        this.addChild(this.player2);
    }

    addGrenade(){
        this.grenade = CustomMethods.makeImage("missile");
        this.grenade.regX = this.grenade.image.width/2;
        this.grenade.visible = false;
        this.addChild(this.grenade);
        this.missile = this.grenade;
    }

    addAirstrike1(){
        this.plane1 = CustomMethods.makeImage("plane1");
        this.plane1.x = -200;
        this.plane1.y = 200;
        this.plane1.visible = false;
        this.addChild(this.plane1);
        this.bomb1 = CustomMethods.makeImage("bomb1");
        this.bomb1.visible = false;
        this.bomb1.rotation = 90;
        this.bomb1.regX = this.bomb1.image.width/2;
        this.addChild(this.bomb1);
    }

    addAirstrike2(){
        this.plane2 = CustomMethods.makeImage("plane2");
        this.plane2.x = 2100;
        this.plane2.y = 200;
        this.plane2.visible = false;
        this.addChild(this.plane2);
        this.bomb2 = CustomMethods.makeImage("bomb2");
        this.bomb2.visible = false;
        this.bomb2.rotation = -90;
        this.bomb2.regX = this.bomb2.image.width/2;
        this.addChild(this.bomb2);
    }

    callAirStrike(){
        this.powerBar.stopMeterMovement();
        this.setMissileToBomb(true);
        this.airStrikeIsCalled = true;

        const current = this.activePlayer.charAt(this.activePlayer.length - 1);
        const plane = "plane" + current;
        const planeStartX = current === "1" ? -200 : 2100;
        const planeFinalX = current === "1" ? 2150 : -200;
        const missileStartX = current === "1" ? -100 : 2150;
        const missileFinalX = current === "1" ? 2250 : -150;

        this[plane].visible = true;
        this.missile.visible = true;

        this[plane].x = planeStartX;
        this.missile.x = missileStartX;
        this.missile.y = 250;

        this.missile.rotation = current === "1" ? 90 : -90;

        createjs.Tween.get(this[plane]).to({x:planeFinalX},1000).call(()=>{
            this[plane].visible = false;
        });
        createjs.Tween.get(this.missile).to({x:missileFinalX},1000).call(()=>{
            this.missile.visible = false;
            this.switchActivePlayer();
        });
        CustomMethods.playSound("planeSound");
    }

    setMissileToBomb(bool){
        if(bool === true){
            //const current = customFramework.getLastChar(this.activePlayer);
            const current = CustomMethods.getLastChar(this.activePlayer);
            const bomb = "bomb" + current;
            this.missile = this[bomb];
        }else{
            this.missile = this.grenade;
        }
    }

    dropBomb(){
        this.missileIsLaunched = true;
        createjs.Tween.removeTweens(this.missile);
        const rotate = this.activePlayer === "player1" ? 180 : -180;
        createjs.Tween.get(this.missile).to({rotation:rotate},800);
        createjs.Tween.get(this.missile).to({y:1080},2000).call(()=>{
            this.missileHitSomething("ground");
        });
    }

    switchActivePlayer(){
        let currentPlayer = this.activePlayer;
        this.activePlayer = currentPlayer === "player1" ? "player2" : "player1";

        this[currentPlayer].checkDamageLimit(this[this.activePlayer].getHealth());

        this.relocatePowerBar();
        this.missileIsLaunched = false;
        if(this.airStrikeIsCalled === true){
            this.airStrikeIsCalled = false;
            this.setMissileToBomb(false);
        }

        this.missile.x = this[this.activePlayer].x; // mora da se setuje posto ne stigne da promeni x i y u launchMissile
        this.missile.y = this[this.activePlayer].y; // i onda upadne u check building collision i pre nego sto je lansira uopste

        if(this.gamePhase !== "gameOver"){
            if(!this[this.activePlayer].maxDamageReached){
                this.showQuestion();
            }else{
                this.powerBar.startMeterMovement();
            }
        }
    }

    addPowerBar(){
        this.powerBar = new PowerBar();
        this.powerBar.x = 10;
        this.powerBar.y = 920;
        this.powerBar.mouseChildren = false;
        this.addChild(this.powerBar);
    }

    relocatePowerBar(){
        this.powerBar.resetMeter();
        this.powerBar.x = this.activePlayer === "player1" ? 10 : 1870;
    }

    addCollisionObjects(){
        let imgName = CustomMethods.getRandomBool() ? "building1" : "building4";
        const building = CustomMethods.makeImage(imgName);
        building.x = 500;
        building.y = 1080 - building.image.height;
        this.collisionObjects.push(building);
        this.addChild(building);

        imgName = CustomMethods.getRandomBool() ? "building2" : "building5";
        const building2 = CustomMethods.makeImage(imgName);
        building2.x = 900;
        building2.y = 1080 - building2.image.height;
        this.collisionObjects.push(building2);
        this.addChild(building2);

        imgName = CustomMethods.getRandomBool() ? "building3" : "building6";
        const building3 = CustomMethods.makeImage(imgName);
        building3.x = 1230;
        building3.y = 1080 - building3.image.height;
        this.collisionObjects.push(building3);
        this.addChild(building3);
    }
    
    setCollisionObjetsMinMaxPoiters(){
        this.minXCollisionCheck = 1920;
        this.maxXCollisionCheck = 0;
        this.minYCollisionCheck = 1080;
        for(let i = 0; i < this.collisionObjects.length; i++){
            let collObj = this.collisionObjects[i];
            this.minXCollisionCheck = collObj.x < this.minXCollisionCheck ? collObj.x : this.minXCollisionCheck;
            this.maxXCollisionCheck = (collObj.x + collObj.image.width) > this.maxXCollisionCheck ? (collObj.x + collObj.image.width) : this.maxXCollisionCheck;
            this.minYCollisionCheck = collObj.y < this.minYCollisionCheck ? collObj.y : this.minYCollisionCheck;
        }
    }

    getMissileCoordinates(){
        const power = this.powerBar.getPower();
        const point = this[this.activePlayer].gun.localToGlobal(this.x, this.y);
        const gunAngle = this.activePlayer === "player1" ? this[this.activePlayer].gun.rotation : -(this[this.activePlayer].gun.rotation);
        const startX = Math.round(point.x + 8 - (gunAngle/6));
        const startY = Math.round(point.y);
        const halfWayX = this.activePlayer === "player1" ? (startX + Math.round(gunAngle * (40 * power))) : (startX - (Math.round(gunAngle * (40 * power))));
        const halfWayY = startY + Math.round((gunAngle * (30 * power)) - (3000 * power));
        const finalX = this.activePlayer === "player1" ? (halfWayX * 2) : (halfWayX - (startX - halfWayX));
        const finalY = 1080;
        const duration = 2000 +  Math.round(power * 3000);
        const startRotation = this[this.activePlayer].gun.rotation;

        //console.log(`start x = ${startX} half x = ${halfWayX} , final x = ${finalX} , angle ${gunAngle}`);
        // todo THIS IS JUST FOR DEV MODE
        //this.path.graphics.clear();
        //this.path.graphics.beginStroke("#ff00ff").moveTo(startX,startY).curveTo(halfWayX,halfWayY,finalX,finalY);

        return {
            startX:startX,
            startY:startY,
            halfWayX:halfWayX,
            halfWayY:halfWayY,
            finalX:finalX,
            finalY:finalY,
            startRotation:startRotation,
            duration:duration
        }
}

    launchMissile(missileCoordinates){
        this.missile.rotation = missileCoordinates.startRotation;
        this.missile.visible = true;
        this.missileIsLaunched = true;
        this._smokeAnimation.x = missileCoordinates.startX;
        this._smokeAnimation.y = missileCoordinates.startY;
        this._smokeAnimation.visible = true;
        this._smokeAnimation.gotoAndPlay ("animate");
        createjs.Tween.get(this.missile).to({guide:{ path:[missileCoordinates.startX,missileCoordinates.startY, missileCoordinates.halfWayX,missileCoordinates.halfWayY,missileCoordinates.finalX,missileCoordinates.finalY],orient:"fixed" }},missileCoordinates.duration).call(()=>{
            this.missileHitSomething("ground");
        });
        CustomMethods.playSound("launchMissileSound");
    }

    missileHitSomething(something){
        console.log(`MISSILE HIT  ${something}`);
        createjs.Tween.removeTweens(this.missile);
        this.missile.visible = false;
        const soundToPlay = something + "HitSound";
        CustomMethods.playSound(soundToPlay);
        switch (something){
            case "ground":
                this._groundHitAnimation.x = this.missile.x;
                this._groundHitAnimation.y = this.missile.y - 64;
                this._groundHitAnimation.visible = true;
                this._groundHitAnimation.gotoAndPlay ("animate");
                break;
            case "enemy":
                this._enemyHitAnimation.x = this.missile.x;
                this._enemyHitAnimation.y = this.missile.y;
                this._enemyHitAnimation.visible = true;
                this._enemyHitAnimation.gotoAndPlay ("animate");
                break;
            case "building":
                this._buildingHitAnimation.x = this.missile.x;
                this._buildingHitAnimation.y = this.missile.y;
                this._buildingHitAnimation.visible = true;
                this._buildingHitAnimation.gotoAndPlay ("animate");
                break;
        }
        this.switchActivePlayer();
    }

    checkCollisions(){
        if(this.missile.x > this.minXCollisionCheck && this.missile.x < this.maxXCollisionCheck){ // CHECKING FOR BUILDINGS GROUP OF OBJECTS
            if(this.missile.y > this.minYCollisionCheck){ // CHECKING FOR BUILDINGS GROUP OF OBJECTS
                console.log("CHECKING building COLLISION...");
                for(let i = 0; i < this.collisionObjects.length; i++){ // AND ONLY THEN LOOP AND CHECK PARTICULAR OBJECT
                    if(this.missile.x > this.collisionObjects[i].x && this.missile.x < (this.collisionObjects[i].x + this.collisionObjects[i].image.width)){
                        if(this.missile.y > this.collisionObjects[i].y){
                            this.missileHitSomething("building");
                        }
                    }
                }
            }
        }
    }

    checkPlayerHit(){
        if(this.missile.y > this.minYCollisionCheck){
            if(this.activePlayer === "player1"){
                if(this.missile.x > this.maxXCollisionCheck){
                    if(this.missile.y > this.player2.y){
                        if(this.missile.x > this.player2.x && this.missile.x < (this.player2.x + this.player2.width)){
                            this.decreaseEnemyHp();
                            this.missileHitSomething("enemy");
                        }
                    }
                }
            }else{
                if(this.missile.x < this.minXCollisionCheck){
                    if(this.missile.y > this.player1.y){
                        if(this.missile.x > this.player1.x && this.missile.x < (this.player1.x + this.player1.width)){
                            this.decreaseEnemyHp();
                            this.missileHitSomething("enemy");
                        }
                    }
                }
            }
        }
    }

    decreaseEnemyHp(){
        createjs.Tween.get(this).to({x:5,y:-5},50).to({x:-5,y:5},50).to({x:5,y:-5},50).to({x:-5,y:5},50).to({x:0,y:0},50);// shaking animation
        const dmg = this[this.activePlayer].getDamage();
        const enemy = this.activePlayer === "player1" ? "player2" : "player1";
        this[enemy].decreaseHealth(dmg);
        if(this[enemy].getHealth() <= 0){
            this.gamePhase = "gameOver";
            this.explodeEnemy(enemy);
        }
    }

    explodeEnemy(enemy){
        this[enemy].visible = false;
        const sheet = enemy + "explosion";
        const explodeAnimation = CustomMethods.makeAnimation(sheet , 10 , 15 , false);
        explodeAnimation.x = this[enemy].x + 65;
        explodeAnimation.y = this[enemy].y -  15;
        explodeAnimation.on("animationend",(e)=>{
            e.remove();
            this.showGameOver(explodeAnimation);
        });
        this.addChild(explodeAnimation);
        explodeAnimation.gotoAndPlay ("animate");
    }

    showGameOver(animation){
        let gameOverImg = CustomMethods.makeImage("gameOver",true);
        gameOverImg.on("click" , (e)=>{
            e.remove();
            this.removeChild(gameOverImg);
            this.removeChild(animation);
            gameOverImg = null;
            this.restartGame();
        });
        gameOverImg.x = 460;
        gameOverImg.y = 0;
        this.addChild(gameOverImg);
        CustomMethods.playSound("gameOverSound");
    }

    restartGame(){
        console.log("restart game");
        this.player1.restart();
        this.player2.restart();
        this.showQuestion();
    }

    increaseDamage(){
        this[this.activePlayer].increaseDamage();
    }

    render (e){
        stage.update(e);
        //console.log("CN " + this.numChildren);
        if(this.missileIsLaunched === true){
            this.checkCollisions();
            this.checkPlayerHit();
        }
    }
}


