var myFunction = function() {
    var name = prompt("What's your name?");
    var question = confirm("Hello " + name + " Do you what to play a game?");
    if (question === true){
    alert("Good, I'm thinking of a number from 1-10");
    var answer = Math.floor(Math.random()*10)+1;
    var guessNumber = prompt("What am I thinking....");
    if (guessNumber == answer) {
    alert("URGH, as if you got it...");
    }
    else {
    alert("Not today Satan buwahahaha!");
    }
    }
    else{
    alert ("What an absolute shame... maybe next time babes ;)");
    }
    };
    