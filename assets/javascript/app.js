$(document).ready(function () {
//set variables
    var clock;
    var timeLeft = 30;
    var countdownClock = $("#timer");
    var timerId = setInterval(countdown, 1000);

//create the countdown clock 
    function countdown() {
        if (timeLeft == 0) {
            if (quizProgress === 10) {
                clearInterval(timerId);
                removeQuestions();
                end();
            }
            clearTimer(timerId);
            generateWrong();

        } else {
            countdownClock.html(timeLeft + " seconds remaining");
            if(quizProgress === 10){
            } else {
                timeLeft--;
            }
        }
    }

//make the game work; set variable so we know what question we are on in the game    
    var quizProgress = 0;

//set the question result counter to zero
    rightCount = "0";
    wrongCount = "0";

//set local variable (question) and a string of answers to check if right, include the right answer to look for
//make sure the score counts the right answers chosen
    var question = [  
    {
        question: "What is the name of the newest McLaren?",
        answers: {a: '720S', b: 'Senna', c: 'GT', d: 'MP4 12C', e: '600LT'},
        rightAnswer: 'c'
    },   
    {
        question: "Which two cars from different manufacturers share the same engine and drive train?",
        answers: {a: 'Lamborghini Huracan/Gallardo and Audi R8', b: 'Jeep Gladiator and Dodge Durango', 
            c: 'Porche 911 Carrera 4S and Subaru Impreza', d: 'Audi Sport Quattro and Volvo XC 70', 
            e: 'Chevy Camaro and Ford Mustang'},
        rightAnswer: 'a'
    },
    {
        question: "What kind of engine does the Lamborghini Sian have?",
        answers: {a: 'naturally aspirated v12', b: 'twin-turbo v8', 
            c: 'quad turbo w16', d: 'hybrid v12', 
            e: 'naturally aspirated v10'},
        rightAnswer: 'd'
    },
    {
        question: "Which movie/tv show combo had the same make/model car (but different year)?",
        answers: {a: 'Batman vs Superman/Batman', b: 'The Italian Job/Miami Vice', 
            c: 'Dumb and Dumber/Magnum PI', d: 'Smokey and the Bandit/Knight Rider', 
            e: 'Gone in 60 seconds/Dukes of Hazzard'},
        rightAnswer: 'd'
    },
    {
        question: "Which supercar manufacturers are headquartered in Modena, Italy?",
        answers: {a: 'Ferrari', b: 'Lamborghini', 
            c: 'Pagani', d: 'Maserati', 
            e: 'all of the above'},
        rightAnswer: 'e'
    },
    {
        question: "Which car holds the current 0-400k-0 (zero to 400k to zero) world record?",
        answers: {a: 'Bugatti Chiron', b: 'Koenigsegg Regera', 
            c: 'Bugatti Veyron', d: 'Koenigsegg Agera RS', 
            e: 'Ferrari LaFerrari'},
        rightAnswer: 'b'
    },
    {
        question: "Which supercar founder started his career at Lamborghini?",
        answers: {a: 'Horacio Pagani', b: 'Ettore Bugatti', 
            c: 'Enzo Ferrari', d: 'Christian von Koenigsegg', 
            e: 'Bruce McLaren'},
        rightAnswer: 'a'
    },
    {
        question: "Which car has its engine designed by Lamborghini?",
        answers: {a: 'Ford F350', b: 'Audi Sport Quattro', 
            c: 'McLaren F1', d: 'Dodge Viper', 
            e: 'Jeep Cherokee Trackhawk'},
        rightAnswer: 'd'
    },
    {
        question: "What kind of engine is in the modern Formula One cars?",
        answers: {a: 'v12 twin turbo', b: 'v10 twin turbo', 
            c: 'v8 twin turbo', d: 'hybrid twin turbo v6', 
            e: 'w12'},
        rightAnswer: 'd'
    },
    {
        question: "Which supercar manufacturer makes car bodies entirely of carbon?",
        answers: {a: 'Bugatti', b: 'McLaren', 
            c: 'Pagani', d: 'Ferrari', 
            e: 'Rimac'},
        rightAnswer: 'c'
    }

    ];
//clearing out the question and answers so that the new question and answer set can be put in for the user to see
    function removeQuestions() {
        $("#timer").empty();
        $("#question").empty();
        $("#answerA").empty();
        $("#answerB").empty();
        $("#answerC").empty();
        $("#answerD").empty();
        $("#answerE").empty();
        $("#text").empty();
        $(".a").removeAttr('id', 'right');
        $(".b").removeAttr('id', 'right');
        $(".c").removeAttr('id', 'right');
        $(".d").removeAttr('id', 'right');
        $(".e").removeAttr('id', 'right');

    }
//putting in the next set of questions and corresponding answers, setting the clock per question
    function insertQuestions(i) {
        num = i + 1;
        $("#timer").html(clock);

        $("#title").html("Question " + num);

        $("#question").html(question[i].question);

        $("#answerA").html(question[i].answers.a);
        $("#answerB").html(question[i].answers.b);
        $("#answerC").html(question[i].answers.c);
        $("#answerD").html(question[i].answers.d);
        $("#answerE").html(question[i].answers.e);

//creating the logic sequence so that each question responds to the right or wrong answer 

        if (question[i].rightAnswer == "a") {
            $(".a").attr('id', 'right');
        } else {
            $(".a").attr('id', 'wrong');
        }

        if (question[i].rightAnswer == "b") {
            $(".b").attr('id', 'right');
        } else {
            $(".b").attr('id', 'wrong');
        }

        if (question[i].rightAnswer == "c") {
            $(".c").attr('id', 'right');
        } else {
            $(".c").attr('id', 'wrong');
        }

        if (question[i].rightAnswer == "d") {
            $(".d").attr('id', 'right');
        } else {
            $(".d").attr('id', 'wrong');
        }

        if (question[i].rightAnswer == "e") {
            $(".e").attr('id', 'right');
        } else {
            $(".e").attr('id', 'wrong');
        }
    }

    //throw all of the styled answer boxes up on the screen (spawnDiv -->entirely new function)

    function spawnDivs() {
        $(".styledDiv").toggle();
    }

    //write the function to start the game and call up all the variables to do so. if/else logic
    function start() {
        $("#start").hide();
        spawnDivs();
        if (quizProgress == 0) {
            insertQuestions(0);
        } else {
            quizProgress++;
        }
        insertQuestions(quizProgress);
    }
//write the function to end the game, toggle the timer, clear the intervals, throw the divs up, and put text results of user's guesses
    function end() {
        $("#timer").toggle();
        clearInterval(timerId);
        spawnDivs();
        score = rightCount;
        $("#title").html("Your Score: "+"<p>"+"<h2>"+score+"<h2>");
        $("#text").html("You got " + rightCount + " right and " + wrongCount + " wrong."+"<p>"+"Click to rev it up and play again");
    }

    //count all the wrong answers given, console log the results as clicked
    function generateWrong() {
        timeLeft = 30;
        console.log("wrong Click");
        wrongCount++;
        console.log(wrongCount);
        removeQuestions();
        quizProgress++;
        
        if (quizProgress === 10) {
            removeQuestions();
            end();
        } else {
            insertQuestions(quizProgress);
        }
    }
//count all the right answers, console log, clear out the question/answer blocks, and insert fresh questions
    function generateRight() {
        timeLeft = 30;
        console.log("right Click");
        rightCount++;
        console.log(rightCount);
        removeQuestions();
        quizProgress++;
        
        if (quizProgress === 10) {
            removeQuestions();
            end();
        } else {
            insertQuestions(quizProgress);
        }
    }
//restart the game on a click, track progress of questions, count down the timer, refresh questions and answers after guessed, start the game over
    function restart() {
        quizProgress = 0;
        timeLeft = 30;
        $("#timer").toggle();
        removeQuestions();
        insertQuestions(quizProgress);
        start();
        $("text").empty();
    }
//clear the timer
    clearInterval(timerId)

    //create how to start the game by clicking; refresh questions, start the game
    $("#start").on("click", function () {
        removeQuestions();
        start();
        setInterval(countdown, 1000);
    });

    //count how many wrong guesses and right guesses, print to html to show user results
    $("body").on("click", "#right", function (event) {
        generateRight();
    });

    $("body").on("click", "#wrong", function (event) {
        generateWrong();
    });

    $("body").on("click", "#text", function (event) {
        restart();
    });

});
