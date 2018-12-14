class QandAUI extends createjs.Container {
    constructor(game,language) {
        super();
        this.setup(game,language);
    }

    setup(game,language) {
        this._game = game;
        this._questions = new Questions(language);

        this._isAirStrikeQuestion = false;

        const qBack = CustomMethods.makeImage("questionsBack");
        this._question = CustomMethods.makeText("", "24px Pixel" , "#40a5a8" , "center" , "alphabetic");
        this._question.lineWidth = 900;
        this._question.x = 500;
        this._question.y = 50;

        this._airStrikeIcon = CustomMethods.makeImage("airStrikeIcon");
        this._airStrikeIcon.x = 471;
        this._airStrikeIcon.y = 180;
        this._airStrikeIcon.visible = false;

        this.addChild(qBack,this._airStrikeIcon,this._question);

        this._answers = [];

        const answer1 = this.makeAnswerField();
        answer1.x = 50;
        answer1.y = 190;
        this._answers.push(answer1);
        this.addChild(answer1);

        const answer2 = this.makeAnswerField();
        answer2.x = 600;
        answer2.y = 190;
        this._answers.push(answer2);
        this.addChild(answer2);

        const answer3 = this.makeAnswerField();
        answer3.x = 50;
        answer3.y = 320;
        this._answers.push(answer3);
        this.addChild(answer3);

        const answer4 = this.makeAnswerField();
        answer4.x = 600;
        answer4.y = 320;
        this._answers.push(answer4);
        this.addChild(answer4);

        this._correctMark = CustomMethods.makeImage("correctMark");
        this._correctMark.alpha = 0;
        this.addChild(this._correctMark);

        this._incorrectMark = CustomMethods.makeImage("incorrectMark");
        this._incorrectMark.alpha = 0;
        this.addChild(this._incorrectMark);

        this._startingTimer = 15;

        this._timerTxt = CustomMethods.makeText("15", "48px Pixel" , "#40a5a8" , "center" , "alphabetic");
        this._timerTxt.x = 500;
        this._timerTxt.y = 333;
        this.addChild(this._timerTxt);
    }

    startTimer(){
        let timer = this._startingTimer;
        this._timerTxt.text = timer;
        this._timerTxt.color = "#40a5a8";
        this._timerInt = setInterval(()=>{
            timer--;
            this._timerTxt.text = timer;
            if(timer < 6){
                this._timerTxt.color = "#ff4957";
                if(timer <= 0){
                    this.stopTimer();
                    this.enableAnswers(false);
                    this._game.answeredCorrect(false,false);
                }
            }

        },1000);
    }

    stopTimer(){
        clearInterval(this._timerInt);
    }

    setQuestionAndAnswers(level){
        const questionAndAnswers = this._questions.getQuestion(level);
        this._question.text = questionAndAnswers.question;
        this._isAirStrikeQuestion = questionAndAnswers.airStrike;
        this._airStrikeIcon.visible = this._isAirStrikeQuestion;
        questionAndAnswers.answers.sort(function(a, b){return 0.5 - Math.random()}); // shuffle array
        for(let i = 0; i < this._answers.length; i++){
            this._answers[i].txtField.text = `${i+1}. ${questionAndAnswers.answers[i].txt}`;
            this._answers[i].correct = questionAndAnswers.answers[i].correct;
        }
        this._correctMark.alpha = this._incorrectMark.alpha = 0;
        this.enableAnswers(true);
        this.startTimer();
        if(this._isAirStrikeQuestion){
            CustomMethods.playSound("airStrikeReadySound");
        }
    }

    makeAnswerField(){
        const answer = new createjs.Container();
        answer.correct = false;
        const answerBack = CustomMethods.makeImage("answerBack",true);
        answer.addChild(answerBack);
        const answerText = answer.txtField = CustomMethods.makeText("Answer", "20px Pixel" , "#fdf4ff" , "center" , "middle");
        answerText.lineWidth = 300;
        answerText.x = 175;
        answerText.y = 50;
        answer.addChild(answerText);
        answer.on("click",(e)=>{
            if(this._game.activePlayer === "player2"){
                this.selectAnswer(e.target.parent);
            }
        });
        return answer;
    }

    buttonHandler(answerIndex){
        if(this._answers[answerIndex].mouseEnabled === true){
            this.selectAnswer(this._answers[answerIndex]);
        }
    }

    selectAnswer(clicked){
        this.enableAnswers(false);
        this.animateCheckingAnswer(clicked);
        //customFramework.playSound("selectAnswerSound");
        CustomMethods.playSound("selectAnswerSound");
    }

    animateCheckingAnswer(answer){
        this.stopTimer();
        answer.alpha = 1;
        const mark = answer.correct === true ? "_correctMark" : "_incorrectMark";
        this[mark].x = answer.x;
        this[mark].y = answer.y;
        this[mark].visible = true;
        createjs.Tween.get(this[mark]).wait(1500).to({alpha:1},500).wait(1500).call(()=>{
            this._game.answeredCorrect(answer.correct,this._isAirStrikeQuestion);
        });
    }

    enableAnswers(bool){
        for(let i = 0; i < this._answers.length; i++){
            this._answers[i].mouseEnabled = bool;
            this._answers[i].alpha = bool === true ? 1 : 0.5;
        }
    }
}