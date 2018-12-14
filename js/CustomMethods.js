
class CustomMethods {

    static getLastChar (str) {
        return str.charAt(str.length - 1);
    }

    static playSound (id,vol = 1,loop = 0) {
        createjs.Sound.play(id, {loop:loop, volume:vol});
    }

    static makeImage (id , clickable = false) {
        let img = new createjs.Bitmap(queue.getResult(id));
        img.mouseEnabled = clickable;
        img.tickEnabled = false;
        return img;
    }

    static makeText (txt,font,color,align,baseline) {
        let textField = new createjs.Text(txt, font, color);
        textField.textAlign = align;
        textField.textBaseline = baseline;
        textField.mouseEnabled = false;
        textField.tickEnabled = false;
        return textField;
    }

    static makeAnimation (img,framesNum,fps,loop) {
        const sheet = queue.getResult(img);
        const singleWidth = sheet.width/framesNum;
        const singleHeight = sheet.height;
        const frames = framesNum - 1;
        const data = {
            images: [sheet],
            frames: {regX:singleWidth/2 , regY:singleHeight/2 ,width: singleWidth, height: singleHeight, count:framesNum},
            animations: {
                animate: [0, frames , loop]
            },
            framerate:fps
        };
        const bmpAnimation = new createjs.SpriteSheet(data);
        const animation = new createjs.Sprite(bmpAnimation);
        animation.mouseEnabled = false;
        return animation;
    }

    static getRandomNumberFromTo (from , to) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    static getRandomBool () {
        return Math.random() > 0.5;
    }

    static getMaxFromArr (arr) {
        return Math.max(...arr);
    }

    static getMinFromArr (arr) {
        return Math.min(...arr);
    }

}