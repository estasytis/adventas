let weapons=["1","2","3"]; //Sleigh, Gift wrap, Snow Globe
let wnames=["", "Sleigh", "Gift Wrap", "Snow Globe"];
let your_weapon;
let comp_weapon;
let winner;   // 0-> lygiosios, 1 -> you , 2-> computer
const results = document.querySelector('#results');
//------------------------------------------------
function printWinner()
{
   const li = document.createElement('li');
   let w=wnames[your_weapon];
   let c=wnames[comp_weapon];
   let text=` ${w} : ${c}`;
   let text2="";   
   
   if(winner==0){
     text2="DRAW: ";
   }
   else if(winner==1){
     text2="YOU: "
   }
   else{
     text2="COMPUTER: ";
   }

   let text3 =`${text2} ${text}`;
   
   li.appendChild(document.createTextNode(text3));
   results.appendChild(li); 
}   
//-----------------------------------------
function chooseWeapon()
{
    let weapon=window.prompt("Your weapon (1/2/3): ");    
    
    while(!weapons.includes(weapon)){
        if(weapon==null) break;
        weapon=window.prompt("Your weapon (1/2/3): ");
    }

    your_weapon=weapon;
    return weapon;
}
///---------------------------------------
function computerChoose()
{
    let c_weapon;    
    c_weapon=Math.floor(1+Math.random()*3);  
    
    comp_weapon=c_weapon;
    return c_weapon;
}

function determineWinner()
{
   let you=chooseWeapon();
   let computer=computerChoose();   
   if(you==computer){
      winner= 0;
   }
   else if(you==1 && computer==2 || you==2 && computer==3 || you==3 && computer==1){
      winner= 1;
   }
   else{
     winner= 2;
   }
   if(you!=undefined)
       printWinner();
   return 0;
}
