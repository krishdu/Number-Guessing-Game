let totalPlay = 0; 
let totalWin = 0;
//let guessArray = [];
let resume = {
    generatedNumber: -1,
    attemptLeft : 15,
    guessArray : []
};
 
 function startGame(){
    const button = document.querySelector("#btnGuess");
    button.disabled  = false;
    if(!localStorage.getItem("resume")){
        totalPlay =  getTotalPlayCount() + 1;
        localStorage.setItem("totalPlay", totalPlay);
        document.querySelector("#numberArray").innerHTML = '';
        resume.generatedNumber = Math.floor((Math.random() * 100) + 1);  
    }
    restorePreviousState();
    clearNotification();
    console.log(resume.generatedNumber);
 }

 function guessNumber(){
    let guessedNumber = document.querySelector("#guessedNumber").value;
    if(guessedNumber != '' && !isNaN(guessedNumber)){
        if(resume.attemptLeft > 0){
            generatedNumber = resume.generatedNumber;

            if(guessedNumber == generatedNumber){ 
                displaySuccessMessage("Perfect Guess"); 
                perfectGuess();         
            }else if(guessedNumber < generatedNumber){
                resume.guessArray.push(guessedNumber);
                displayAlertDangerMessage("Too Low");         
                document.querySelector("#numberArray").innerHTML = resume.guessArray;
                storeCurrentGameState();
            }else{
                resume.guessArray.push(guessedNumber);
                displayAlertDangerMessage("Too High"); 
                document.querySelector("#numberArray").innerHTML = resume.guessArray;
                storeCurrentGameState();
            }
            document.querySelector("#guessedNumber").value = '';
       }else{
           displayAlertDangerMessage("You reached maximum attempt!");
           restartGame();
       }
    }else{
        alert("Please enter a number to play the game");
    }
 }

 function displaySuccessMessage(msg){
    const message = document.querySelector("#message");
    message.setAttribute("class", "alert alert-success");
    message.innerHTML = msg;
    message.style = "display:block"
 }

 function displayAlertDangerMessage(msg){
    const message = document.querySelector("#message");
    message.setAttribute("class", "alert alert-danger");
    message.innerHTML = msg;
    message.style = "display:block";//d-block
 }

 function perfectGuess(){
    resume = {
        generatedNumber: -1,
        attemptLeft : 15,
        guessArray : []
     };
    const button = document.querySelector("#btnGuess");
    button.disabled  = true;
    totalWin = getTotalWinCount() + 1;
    localStorage.setItem("totalWin", totalWin);
    localStorage.removeItem("resume");
    restorePreviousState();
 }
 function restartGame(){
    resume = {
        generatedNumber: -1,
        attemptLeft : 15,
        guessArray : []
     };
    const button = document.querySelector("#btnGuess");
    button.disabled  = true;
    localStorage.removeItem("resume");
    restorePreviousState();
     document.querySelector("#btnStart").innerHTML = "Try Again!";
 }

 function getTotalWinCount(){
    return Number(localStorage.getItem("totalWin")) || 0;
 }   

 function getTotalPlayCount(){
    return Number(localStorage.getItem("totalPlay")) || 0;
 } 
 
 function getGeneratedGuessNumber(){
     return Number(localStorage.getItem("generatedGuessNumber")) || '';
 }

 function storeCurrentGameState(){
    //totalPlay++;
    resume.attemptLeft--;
    localStorage.setItem("resume", JSON.stringify(resume));
    restorePreviousState();
 }

 function getResumeGameData(){
    return JSON.parse(localStorage.getItem("resume")) || resume;
 }

 function restorePreviousState(){
     resume  = getResumeGameData();
     totalPlay = getTotalPlayCount();
     resume.guessArray.length != 0 ?  (document.querySelector("#numberArray").innerHTML = resume.guessArray , document.querySelector("#btnStart").innerHTML = "Resume") : document.querySelector("#btnStart").innerHTML = "Start";
     document.querySelector("#totalWin").innerHTML = getTotalWinCount();;
     document.querySelector("#totalPlay").innerHTML = getTotalPlayCount();
     document.querySelector("#attemptLeft").innerHTML = resume.attemptLeft;
 }


 function clearNotification(){
    document.querySelector("#message").style = "display:none";
 }



