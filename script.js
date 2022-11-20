var roundCount = 0;
var userWinCount = 0;
var compWinCount = 0;
const usercount = document.getElementsByClassName('userCount');
const compcount = document.getElementsByClassName('compCount');
const winners = document.getElementsByClassName('winner');
const restart = document.getElementsByClassName('restart');
const but = document.querySelectorAll(".myBtn");
const compbut = document.querySelectorAll(".compBtn");
isGameOver();
function isGameOver()
{
    if (roundCount ==0)
    {
        playGame();
    }
    if(roundCount==5)
    {   
        disablebuttons();
        restart[0].addEventListener('click',gameRestart);
    }
}
 function playGame()
{
    but.forEach(key => key.addEventListener('click', game));
}
function game() {
    var userChoice = this.textContent;
    var computerChoice = getComputerInput();
    userSelection(userChoice);
    setTimeout(() => {
        userChoiceRemoval(userChoice);
        computerChoiceRemoval(computerChoice);
    }, 500);
    roundCount++;
    if(roundCount <=5)
    {
        var values = play(computerChoice,userChoice);
        userWinCount += values[0];
        compWinCount += values[1];
        usercount[0].textContent = `USER : ${userWinCount}/5`;
        compcount[0].textContent = `COMP : ${compWinCount}/5`;
    }
    if (roundCount ===5)
    {  
        pickWinner(userWinCount,compWinCount); 
    }
    isGameOver();
}  
  function play(computerChoice,userChoice)
  {
    var userSide=0;
    var compSide=0;
    var roundWinner = rounds(computerChoice,userChoice);
    if(roundWinner=="user")
    {
        userSide += 1;
    }
    if(roundWinner=="comp")
    {
        compSide+=1;
    }
    return [userSide,compSide];
  }

  function pickWinner(userSide,compSide)
  {
    if(userSide>compSide)
    {
        winners[0].textContent= 'WINNER : USER';
    }
    else if(compSide>userSide)
    {
        winners[0].textContent ="WINNER : COMPUTER";
    }
    else
    {
        winners[0].textContent = "WINNER : TIE";
    }
}
function getComputerInput()
{ 
    const currentTime= new Date();
    let num = currentTime.getMilliseconds()%10;
    if(num>=0 && num<=3)
    {   
        compbut[1].classList.add('Selection');
        return "Paper";
    }
    if(num>=4 && num<=6)
    {   
       compbut[0].classList.add('Selection');
        return "Rock";
    }
    if(num>=7 && num<=9)
    {   
        compbut[2].classList.add('Selection');
        return "Scissor";
    }
}

function rounds(computerChoice,userChoice)
{
    switch (userChoice)
    { 
        case "Paper":
            if(computerChoice=="Rock")
                return "user";
            if(computerChoice=="Scissor")
                return "comp";
            if(computerChoice=="Paper")
                return "tie";
        case "Rock":
            if(computerChoice=="Rock")
                return "tie";
            if(computerChoice=="Scissor")
                return "user";
            if(computerChoice=="Paper")
                return "comp";
        case "Scissor":
            if(computerChoice=="Rock")
                return "comp";
            if(computerChoice=="Scissor")
                return "tie";
            if(computerChoice=="Paper")
                return "user";
        
    }
}
function gameRestart ()
{
    roundCount=0;
    userWinCount=0;
    compWinCount=0;
    winners[0].textContent= 'WINNER :   ';
    usercount[0].textContent = `USER : 0/5`;
    compcount[0].textContent = `COMP : 0/5`;
    isGameOver();
}
function userSelection(choice)
{
 if(choice=='Rock')
 {
    but[0].classList.add('Selection');
 }
 if(choice=='Paper')
 {
    but[1].classList.add('Selection');
 }
 if(choice=='Scissor')
 {
    but[2].classList.add('Selection');
 }

}
function userChoiceRemoval(choice)
{
    if(choice=='Rock')
    {
       but[0].classList.remove('Selection');
    }
    if(choice=='Paper')
    {
       but[1].classList.remove('Selection');
    }
    if(choice=='Scissor')
    {
       but[2].classList.remove('Selection');
    }
   }
function computerChoiceRemoval(choice)
   {
    if(choice=='Rock')
    {
       compbut[0].classList.remove('Selection');
    }
    if(choice=='Paper')
    {
       compbut[1].classList.remove('Selection');
    }
    if(choice=='Scissor')
    {
       compbut[2].classList.remove('Selection');
    }
 }
 function disablebuttons()
 {
    but[0].removeEventListener('click' ,game);
    but[1].removeEventListener('click' ,game);
    but[2].removeEventListener('click' ,game);
 }


