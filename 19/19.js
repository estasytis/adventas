

var progressBar = document.getElementById('progress'),
percent = document.getElementsByClassName('progress-bar__percent')[0],
percentCloned = percent.cloneNode(false),
count = 1;

const startDate= new Date();
var convertedStartDate = new Date(startDate);
var month = convertedStartDate.getMonth() + 1;
var day = convertedStartDate.getDate();

let liko=25-day;
let msgZone=document.getElementById("showDate");
  
const d1 = new Date("2023-12-25");

var appendPercent2 = function() {
    if (count > day) {
        if(month==12 && day==25){
            message="Linksmų Šventų Kalėdų";
            msgZone.innerHTML=message;            
        }
        else if(startDate>d1){
            message="Šventės jau baigėsi";
            msgZone.innerHTML=message;              
        }        
        return;
    } else {
      liko=25-count;
      progressBar.appendChild(percentCloned);      
      let value = "🧑‍🎄";
      message=`Iki Kalėdų liko ${liko}`;
      msgZone.innerHTML=message;       
      percentCloned.innerHTML+=value;       
      count++;
    }
  };


setInterval(appendPercent2, 250);