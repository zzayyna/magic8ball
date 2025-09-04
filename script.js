var question = $(`.question`);

var textBox = $(`input`);

var askBtn = $(`.askBtn`);
askBtn.on("click", displayAnswer);

var answerBox = $(`.answer`);

function displayAnswer() {
    answerBox.text("");
    question.text("")
    question.append(`Your Question: ${textBox.val()}`);
    textBox.val("");

    var randomNum = Math.random() * 9;
    var roundedNum = Math.floor(randomNum);

    if (roundedNum == 0) {
        answerBox.append(`Yes,<br> definitely`);
    }
    else if (roundedNum == 1) {
        answerBox.append(`Without<br> a doubt`);
    }
    else if (roundedNum == 2) {
        answerBox.append(`<br>Probably`);
    }
    else if (roundedNum == 3) {
        answerBox.append(`Reply hazy. <br>Try again later`);
    }
    else if (roundedNum == 4) {
        answerBox.append(`Better not<br> tell you now`);
    }
    else if (roundedNum == 5) {
        answerBox.append(`Definitely<br> not`);
    }
    else if (roundedNum == 6) {
        answerBox.append(`Outlook not<br>so good`);
    }
    else if (roundedNum == 7) {
        answerBox.append(`Very <br> doubtful`);
    }
    else if (roundedNum == 8) {
        answerBox.append(`idk ask <br> ur mom`);
    }
    else {
        answerBox.append(`Error`)
    }

}


