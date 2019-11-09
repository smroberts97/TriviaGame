$(document).ready(function () {
//set variables
    var clock;
    var timeLeft = 30;
    var countdownClock = $("#timer");
    var timerId = setInterval(countdown, 1000);

//create the countdown clock with a reminder when 10 seconds are left
    function countdown() {
        if (timeLeft == 0) {
            if (quizStep === 10) {
                clearInterval(timerId);
                depopulateQuestions();
                end();
            }
            clearTimeout(timerId);
            generateIncorrect();

        } else {
            countdownClock.html(timeLeft + " seconds remaining");
            if(quizStep === 10){
            } else {
                timeLeft--;
            }
        }
    }

//make the game work; set variable to which step we are in the game    
    var quizStep = 0;

//set the tallies to zero
    correctTally = "0";
    incorrectTally = "0";

//set local variable (question) and a string of answers to check
    var question = [  
    {
        question: "What is the name of the newest McLaren?",
        answers: {a: '720S', b: 'Senna', c: 'GT', d: 'MP4 12C', e: '600LT'},
        correctAnswer: 'c'
    },   
    {
        question: "Which two cars from different manufacturers share the same engine and drive train?",
        answers: {a: 'Lamborghini Huracan/Gallardo and Audi R8', b: 'Jeep Gladiator and Dodge Durango', 
            c: 'Porche 911 Carrera 4S and Subaru Impreza', d: 'Audi Sport Quattro and Volvo XC 70', 
            e: 'Chevy Camaro and Ford Mustang'},
        correctAnswer: 'a'
    },
    {
        question: "What kind of engine does the Lamborghini Sian have?",
        answers: {a: 'naturally aspirated v12', b: 'twin-turbo v8', 
            c: 'quad turbo w16', d: 'hybrid v12', 
            e: 'naturally aspirated v10'},
        correctAnswer: 'd'
    },
    {
        question: "Which movie/tv show combo had the same make/model car (but different year)?",
        answers: {a: 'Batman vs Superman/Batman', b: 'The Italian Job/Miami Vice', 
            c: 'Dumb and Dumber/Magnum PI', d: 'Smokey and the Bandit/Knight Rider', 
            e: 'Gone in 60 seconds/Dukes of Hazzard'},
        correctAnswer: 'd'
    },
    {
        question: "Which supercar manufacturers are headquartered in Modena, Italy?",
        answers: {a: 'Ferrari', b: 'Lamborghini', 
            c: 'Pagani', d: 'Maserati', 
            e: 'all of the above'},
        correctAnswer: 'e'
    },
    {
        question: "Which car holds the current 0-400k-0 (zero to 400k to zero) world record?",
        answers: {a: 'Bugatti Chiron', b: 'Koenigsegg Regera', 
            c: 'Bugatti Veyron', d: 'Koenigsegg Agera RS', 
            e: 'Ferrari LaFerrari'},
        correctAnswer: 'b'
    },
    {
        question: "Which supercar founder started his career at Lamborghini?",
        answers: {a: 'Horacio Pagani', b: 'Ettore Bugatti', 
            c: 'Enzo Ferrari', d: 'Christian von Koenigsegg', 
            e: 'Bruce McLaren'},
        correctAnswer: 'a'
    },
    {
        question: "Which car has its engine designed by Lamborghini?",
        answers: {a: 'Ford F350', b: 'Audi Sport Quattro', 
            c: 'McLaren F1', d: 'Dodge Viper', 
            e: 'Jeep Cherokee Trackhawk'},
        correctAnswer: 'd'
    },
    {
        question: "What kind of engine is in the modern Formula One cars?",
        answers: {a: 'v12 twin turbo', b: 'v10 twin turbo', 
            c: 'v8 twin turbo', d: 'hybrid twin turbo v6', 
            e: 'w12'},
        correctAnswer: 'd'
    },
    {
        question: "Which supercar manufacturer makes car bodies entirely of carbon?",
        answers: {a: 'Bugatti', b: 'McLaren', 
            c: 'Pagani', d: 'Ferrari', 
            e: 'Rimac'},
        correctAnswer: 'c'
    }

    ];
//clearing out
    function depopulateQuestions() {
        $("#timer").empty();
        $("#question").empty();
        $("#answer1").empty();
        $("#answer2").empty();
        $("#answer3").empty();
        $("#answer4").empty();
        $("#answer5").empty();
        $("#text").empty();
        $(".one").removeAttr('id', 'correct');
        $(".two").removeAttr('id', 'correct');
        $(".three").removeAttr('id', 'correct');
        $(".four").removeAttr('id', 'correct');
        $(".five").removeAttr('id', 'correct');

    }

    function populateQuestions(i) {
        num = i + 1;
        $("#timer").html(clock);

        $("#title").html("Question " + num);

        $("#question").html(question[i].question);

        $("#answer1").html(question[i].answers.a);
        $("#answer2").html(question[i].answers.b);
        $("#answer3").html(question[i].answers.c);
        $("#answer4").html(question[i].answers.d);
        $("#answer5").html(question[i].answers.e);

        if (question[i].correctAnswer == "a") {
            $(".one").attr('id', 'correct');
        } else {
            $(".one").attr('id', 'incorrect');
        }

        if (question[i].correctAnswer == "b") {
            $(".two").attr('id', 'correct');
        } else {
            $(".two").attr('id', 'incorrect');
        }

        if (question[i].correctAnswer == "c") {
            $(".three").attr('id', 'correct');
        } else {
            $(".three").attr('id', 'incorrect');
        }

        if (question[i].correctAnswer == "d") {
            $(".four").attr('id', 'correct');
        } else {
            $(".four").attr('id', 'incorrect');
        }

        if (question[i].correctAnswer == "e") {
            $(".five").attr('id', 'correct');
        } else {
            $(".five").attr('id', 'incorrect');
        }
    }

    function spawnDivs() {
        $(".styledDiv").toggle();
    //    $("#div1").toggle();
    //    $("#div2").toggle();
    //    $("#div3").toggle();
    //    $("#div4").toggle();
    //    $("#div5").toggle();
    }

    function start() {
        $("#start").hide();
        spawnDivs();
        if (quizStep == 0) {
            populateQuestions(0);
        } else {
            quizStep++;
        }
        populateQuestions(quizStep);
    }

    function end() {
        $("#timer").toggle();
        clearInterval(timerId);
        spawnDivs();
        score = correctTally * 10;
        $("#title").html("Your Score: "+"<p>"+"<h2>"+score+"<h2>");
        $("#text").html("You got " + correctTally + " correct and " + incorrectTally + " wrong."+"<p>"+"Click to rev it up and play again");
    }
    function generateIncorrect() {
        timeLeft = 30;
        console.log("Incorrect Click");
        incorrectTally++;
        console.log(incorrectTally);
        depopulateQuestions();
        quizStep++;
        
        if (quizStep === 10) {
            depopulateQuestions();
            end();
        } else {
            populateQuestions(quizStep);
        }
    }

    function generateCorrect() {
        timeLeft = 30;
        console.log("Correct Click");
        correctTally++;
        console.log(correctTally);
        depopulateQuestions();
        quizStep++;
        
        if (quizStep === 10) {
            depopulateQuestions();
            end();
        } else {
            populateQuestions(quizStep);
        }
    }

    function restart() {
        quizStep = 0;
        timeLeft = 30;
        $("#timer").toggle();
        depopulateQuestions();
        populateQuestions(quizStep);
        start();
        $("text").empty();
    }

    clearInterval(timerId)

    $("#start").on("click", function () {
        depopulateQuestions();
        start();
        setInterval(countdown, 1000);
    });

    $("body").on("click", "#correct", function (event) {
        generateCorrect();
    });

    $("body").on("click", "#incorrect", function (event) {
        generateIncorrect();
    });

    $("body").on("click", "#text", function (event) {
        restart();
    });

    $("#next").on("click", function () {
        console.log("Does this work?");
        depopulateQuestions();
        quizStep++;
        populateQuestions(quizStep);
    });
});
