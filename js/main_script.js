const generatedNumber = Math.floor((Math.random() * 100) + 1);
//console.log(generatedNumber);
let guessArray = [];

function guessNumber(){
    let guessedNumber = document.querySelector("#guessedNumber").value;
    if(guessedNumber != '' && !isNaN(guessedNumber)){

        let message = document.querySelector("#message");
        message.style = "display:block"
        if(guessedNumber == generatedNumber){
            message.setAttribute("class", "alert alert-success");
            message.innerHTML = "Perfect Guess";
        }else if(guessedNumber < generatedNumber){
            guessArray.push(guessedNumber);
            message.setAttribute("class", "alert alert-danger");
            message.innerHTML = "Too Low";
            document.querySelector("#numberArray").innerHTML = guessArray;
        }else{
            guessArray.push(guessedNumber);
            message.setAttribute("class", "alert alert-danger");
            message.innerHTML = "Too High";
            document.querySelector("#numberArray").innerHTML = guessArray;
        }
    }else{
        alert("Please enter a number to play the game");
    }
}

function clearText(){
    document.querySelector("#message").style = "display:none";
}



