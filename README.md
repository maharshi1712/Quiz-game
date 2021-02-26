<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Front-End Quiz</title>
    <link rel="stylesheet" href="index.css">
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
</head>

<body>
    <div id="ctn">
        <p id="welcome">Welcome to <strong>Quiz Game</strong> for Front-End Developer!</p>
        <div id="container">
            <span id="noQuestion" style="position: relative; top: 30px; font-size:large;">Choose Number of Questions :</span>
            </br>
            <button type="button" id="btn5" style="position: relative; top: 40px;" class="btn btn-outline-light btn-lg">5</button>
            <button type="button" id="btn10" style="position: relative; top: 40px;" class="btn btn-outline-light btn-lg">10</button>
        </div>
    </div>

    <div id="showQs" style="display: none;">
        <p>Front-End <strong>Quiz</strong></p>
        </br>
        <p id="scoreLine" style="position: relative;">Score = <span id="score">0</span></p>
    </div>
    <div class="question-holder" style="display: none;">
        <!-- Questions will be placed here dynamically -->
    </div>
    <div class="results-holder">
        <!-- Results will go here after answer is selected -->
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.js " integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin=" anonymous "></script>
    <script src="index.js "></script>
</body>

</html>
