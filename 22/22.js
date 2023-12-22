
let msgZone=document.getElementById("showGreeting");
let count=0;
msgZone.innerHTML="                        "; 

let messages=[ " We wishing you a delightful, merry, and bright-ful Christmas!",
" May your Cristmas holidays be filled with love, peace, and joy.",
" Merry Christmas and a happy New Year!"];

let yourName="";

function startShow()
{
  yourName=window.prompt("What is Your name?");
  setInterval(showGreeting,1000);
}

function showGreeting()
{
    
    msgZone.innerHTML=`${yourName} ... ${messages[count]}`;
    console.log(count);
    console.log(messages[count]);
    count++;
    if(count>2) count=0;
    return;
}



