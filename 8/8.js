const participants = ["Jingle", "Merry", "Twinkle", "Frosty"];
const festiveSocks = ["Red and Green Striped Socks", 
"Snowflake and Holly Print Socks", "Candy Cane Inspired Socks", 
"Christmas Tree Patterned Socks"];

let gifts= Sock_Gift_Exchange(participants,festiveSocks);
console.log(gifts);



function Sock_Gift_Exchange(participants, festiveSocks)
{
if (participants.length!=festiveSocks.length)
   {
      text="Ooops turime problemą";
      return text;
   }
   
   
    
participants.sort(function(){return 0.5 - Math.random()} );
festiveSocks.sort(function(){return 0.5 - Math.random()});
let giftsArray=[];
for(let i=0; i<participants.length; i++){
       giftsArray.push({ "name":participants[i] , "gift":festiveSocks[i] });
}

return giftsArray;
} 