var quiz = {
    questions: [{
            question: "HTML ID's can only be used once",
            answers: ["True", "False"],
            correct: 0,
            desc: "ID's are unique and each page can only have one element with that ID."
        },
        {
            question: "Which doctype is correct for HTML5?",
            answers: ["!DOCTYPE HTML5", "!DOCTYPE html", "!DOCTYPE"],
            correct: 1,
            desc: "Was released with the fifth edition of HTML. Made simpler and shorter than before."
        },
        {
            question: "Which HTML5 element defines navigation links?",
            answers: ["avigation", "links", "nav", "navigate"],
            correct: 2,
            desc: "Introduced with HTML5, this element is intended to be used with major blocks of navigation links."
        },
        {
            question: "Inside which HTML element do we put the JavaScript?",
            answers: ["script", "javascript", "JS", "link"],
            correct: 0,
            desc: "Used to either point to external JavaScript files or to contain scripting statements."
        },
        {
            question: "How do you call the function 'myFunction'?",
            answers: ["myFunction", "func myFunction()", "myFunction()", "None of those"],
            correct: 2,
            desc: "using parenthesis executes the function. Without them you would hold a reference to the function itself."
        },
        {
            question: "JavaScript is the same as Java.",
            answers: ["True", "False"],
            correct: 1,
            desc: "JavaScript was developed by Netscape and Java by Sun Microsystems. "
        },
        {
            question: "What keyword is used to create a JavaScript variable",
            answers: ["variable", "varies", "string", "var"],
            correct: 3,
            desc: "It is used to hold any JavaScript data type. In other languages different keywords are used for different data types."
        },
        {
            question: "var a = []; What does 'typeof a' return?",
            answers: ['object', 'array', 'string', 'undefined'],
            correct: 0,
            desc: "Arrays are considered a special type of object in JavaScript"
        },
        {
            question: "Are CSS property names case-sensitive?",
            answers: ['True', 'False'],
            correct: 1,
            desc: "Although not case-sensitive, it is recommeneded to always use lower case names!"
        },
        {
            question: "Does setting margin-top and margin-bottom have an affect on an inline element?",
            answers: ['True', 'False'],
            correct: 1,
            desc: "Only block and inline-block elements are affected by these settings"
        },
        {
            question: "What is not an HTML5 element?",
            answers: ['section', 'header', 'blink', 'main'],
            correct: 2,
            desc: "Other elements include footer, video, audio, article and many more!"
        },
        {
            question: "What is jQuery?",
            answers: ["A framework", "A library", "jQuery?", "none of these"],
            correct: 1,
            desc: "Straight from their website: 'jQuery is a fast, small, and feature-rich JavaScript library'."
        },
        {
            question: "How can you print information to the console?",
            answers: ["console(info)", "console.log(info)", "print(info)"],
            correct: 1,
            desc: "Other console methods are console.dir(), console.time() and others."
        },
        {
            question: "Which is not a JavaScript data type?",
            answers: ['boolean', 'undefined', 'string', 'double'],
            correct: 3,
            desc: "Although not a part of JavaScript, double is used in other languages such as C++ and Java!"
        },
        {
            question: "Which of the following function of String object returns the character at the specified index?",
            answers: ['charAt()', 'charCodeAt()', 'concat()', 'indexOf()'],
            correct: 0,
            desc: "While charAt() returns the char of specified index, charCodeAt() returns the unicode"
        },
        {
            question: "Which of the following function of Array object removes the last element from an array and returns that element?",
            answers: ['push()', 'join()', 'pop()', 'map()'],
            correct: 2,
            desc: "Pop removes the last element while push adds an element to the end!"
        },
        {
            question: "what value is given for the left margin: <br/> margin: 5px 10px 3px 8px;",
            answers: ['5px', '8px', '3px', '10px'],
            correct: 1,
            desc: "The CSS shorthand property follows the top, right, bottom, left syntax."
        },
        {
            question: "What property is used to change the text color of an element?",
            answers: ['fontcolor', 'textcolor', 'color'],
            correct: 2,
            desc: "And colors can be defined with keywords such as red, in hex (#000) or rgb (rgb(0,0,0))."
        },
        {
            question: "The # symbol specifies that the selector is?",
            answers: ['class', 'tag', 'id', 'first'],
            correct: 2,
            desc: "And there can only be one unique id per HTML page!"
        },
        {
            question: "Which snippet of CSS is commonly used to center a website horizontally?",
            answers: ['site-align: center;', 'margin: center;', 'margin: auto 0;', 'margin: 0 auto;'],
            correct: 3,
            desc: "Just let the magic do it's work!"
        }
    ]
};

var currentQs = 0,
    score = 0,
    curr, que, opts, des, html, html2, html3, correct, userAnswer;

function showQuestion5() {
    currentQs++;
    var curr = Math.floor(Math.random() * 20);
    var que = quiz.questions[curr].question;
    var opts = quiz.questions[curr].answers;
    var ans = quiz.questions[curr].correct;
    var des = quiz.questions[curr].desc;
    var html = "<h3 class='curr-question'>" + que + "</h2>";
    html = html + "<ul class='all-answers'>";
    for (var i = 0; i < opts.length; i++) {
        html = html + "<li class='answer'>" + opts[i] + "</li>";
    }
    html = html + "</ul>";
    $('.question-holder').html(html);
    var correct = "Wrong!";
    $('body').on('click', '.answer', function() {
        var userAnswer = $(this).text();
        if (userAnswer === opts[ans]) {
            score++;
            document.getElementById("score").innerHTML = score;
            correct = "Correct!";
        } else {
            document.getElementById("score").innerHTML = score;
        }
        var html2 = "<h3> " + correct + "</h3>",
            html3 = "";
        html2 = html2 + "<h4> Tips : " + des + "</h4>";
        html2 = html2 + "</br>";
        html2 = html2 + "<button type='button' class='btn btn-dark'>Next</button>"
        $('.results-holder').html(html2);
        $('.results-holder').fadeIn(100);
        $('.btn').click(function() {
            if (currentQs <= 4) {
                $('.results-holder').fadeOut(100);
                showQuestion5();
            } else {
                html3 = html3 + "<h2> YOUR SCORE = " + score + "</h2>";
                html3 = html3 + "</br>";
                html3 = html3 + "<button type='button' id='startAgain' class='btn btn-outline-dark btn-lg'>Start Again</button>"
                $(".question-holder,.results-holder,#showQs").fadeOut(500)
                $('.results-holder').html(html3);
                $('.results-holder').fadeIn(300, function() {
                    $('#startAgain').click(function() {
                        refreshPage();
                    });
                });

            }
        });
    });
}

function showQuestion10() {

    var curr = Math.floor(Math.random() * 20);
    var que = quiz.questions[curr].question;
    var opts = quiz.questions[curr].answers;
    var ans = quiz.questions[curr].correct;
    var des = quiz.questions[curr].desc;
    var html = "<h3 class='curr-question'>" + que + "</h2>";
    html = html + "<ul class='all-answers'>";
    for (var i = 0; i < opts.length; i++) {
        html = html + "<li class='answer'>" + opts[i] + "</li>";
    }
    html = html + "</ul>";
    $('.question-holder').html(html);
    var correct = "Wrong!";
    $('body').on('click', '.answer', function() {
        var userAnswer = $(this).text();
        if (userAnswer === opts[ans]) {
            score++;
            document.getElementById("score").innerHTML = score;
            correct = "Correct!";
        } else {
            document.getElementById("score").innerHTML = score;
        }
        var html2 = "<h3> " + correct + "</h3>",
            html3 = "";
        html2 = html2 + "<h4> Tips : " + des + "</h4>";
        html2 = html2 + "</br>";
        html2 = html2 + "<button type='button' class='btn btn-dark'>Next</button>"
        $('.results-holder').html(html2);
        $('.results-holder').fadeIn(100);
        $('.btn').click(function() {
            if (currentQs <= 10) {
                $('.results-holder').fadeOut(100);
                currentQs++;
                showQuestion10();
            } else {
                html3 = html3 + "<h2> YOUR SCORE = " + score + "</h2>";
                html3 = html3 + "</br>";
                html3 = html3 + "<button type='button' id='startAgain' class='btn btn-outline-dark btn-lg'>Start Again</button>"
                $(".question-holder,.results-holder,#showQs").fadeOut(500)
                $('.results-holder').html(html3);
                $('.results-holder').fadeIn(300, function() {
                    $('#startAgain').click(function() {
                        refreshPage();
                    });
                });

            }
        });
    });
}

function refreshPage() {
    if (confirm("Do you want to play again?")) {
        location.reload();
    }
}

$('#btn5').click(function() {
    $("#ctn").fadeOut(500, function() {
        $("#showQs,.question-holder").fadeIn(500);
        showQuestion5();
    });
});


$('#btn10').click(function() {
    $("#ctn").fadeOut(500, function() {
        $("#showQs,.question-holder").fadeIn(500);
        showQuestion10();
    });
});
