const generatedNumber = Math.floor((Math.random() * 100) + 1);
//console.log(generatedNumber);
let guessArray = [];

function guessNumber(){
    let guessedNumber = document.querySelector("#guessedNumber").value;
    if(guessedNumber != '' && !isNaN(guessedNumber)){

        let message = document.querySelector("#message");

        if(guessedNumber == generatedNumber){
            message.setAttribute("class", "bg-success")
            message.innerHTML = "Perfect Guess";
        }else if(guessedNumber < generatedNumber){
            guessArray.push(guessedNumber);
            message.setAttribute("class", "bg-danger")
            message.innerHTML = "Too Low";
            document.querySelector("#numberArray").innerHTML = guessArray;
        }else{
            guessArray.push(guessedNumber);
            message.setAttribute("class", "bg-warning")
            message.innerHTML = "Too High";
            document.querySelector("#numberArray").innerHTML = guessArray;
        }
    }else{
        alert("Please enter a number to play the game");
    }
}

function clearText(){
    document.querySelector("#message").innerHTML = "";
}



