
let msgZone=document.getElementById("showGreeting");
let ansZone=document.getElementById("ansZone");
let ansZone2=document.getElementById("ansZone2");
let count=0;
msgZone.innerHTML=""; 
msgZone.style.display="none";
let all=0;
let questions=[ 
"What is the traditional color of Santa Claus's suit?",
"In the song 'Jingle Bells,' what kind of sleigh is mentioned?",
"What is the main ingredient in gingerbread cookies?",
"Which plant is often used as a Christmas decoration and is associated with good luck?",
"What popular Christmas beverage is also known as 'milk punch'?"
];
let options=[
  [ "Green","Blue","Red","Yellow"],
  ["Open sleigh","Covered sleigh","Golden sleigh","Magical sleigh"],
  ["Chocolate","Vanilla","Ginger","Cinnamon"],
  ["Holly","Rose","Orchid","Sunflower"],
  ["Eggnog","Hot chocolate","Apple cider","Peppermint mocha"]];
let ans=[2,0,2,0,0];

function startQuiz()
{
  all=0;
  msgZone.style.display="block";
  showGreeting();
  
}

function showGreeting()
{
    
    msgZone.innerHTML=`🤔 ${questions[count]}`;
    ansZone.innerHTML="";
    let text="";
    for(let i=0; i<options.length-1; i++)
    {
       text=`<button class='btn' value= '${i}' onclick='calc(${i})' > ${options[count][i]} </button>`;
       ansZone.innerHTML+=text;
    }
    
    
    
    
   
    return;
}


function calc(ansnumber)
{
    if (ans[count]==ansnumber)
    {
      all++;
      ansZone2.style=" font-size: 18px; border:solid black 2px;background-color: green;"
      ansZone2.innerHTML="Correct";
      console.log(all);
    }
    else
    { ansZone2.style=" font-size: 18px; border:solid black 2px;background-color: red;"
      ansZone2.innerHTML="Incorrect";
    }
    
    count++;
    if (count<questions.length)
       showGreeting();
    else
    {
      count=0;
      ansZone2.innerHTML="";
      ansZone2.style.display="none";
      msgZone.innerHTML=`Jūsų rezultatas: ${all}`;
      ansZone.innerHTML="🎄🎄🎄🎄🎄🎄🎄🎄"
      return;
    }  
  
    }
