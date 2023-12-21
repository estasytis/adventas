 url="jingle-bells.mp3";
 audio=new Audio(url);
 audio.pause();

function playAudio(url) {
    let btn=document.getElementById('btn');
    let text = btn.innerHTML;
    
    if (text=='🎄🎄 PLAY 🎄🎄')
    {
      audio.play(); 
      btn.innerHTML = "Pause";  
      console.log(text+url);
    }
    else
    {
        audio.pause();
        btn.innerHTML="🎄🎄 PLAY 🎄🎄";
        console.log(text+url);
    }
   
   
  }