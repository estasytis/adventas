 
const candles=document.getElementsByClassName("img") ;

function lightsOn()
{      
    setTimeout(function() {       
        candles[1].src="on.png";      
    }, 300);

    setTimeout(function() {       
        candles[2].src="on.png";      
    }, 500);

    setTimeout(function() {       
        candles[0].src="on.png";      
    }, 200);
          
}

function lightsOff()
{
    setTimeout(function() {       
        candles[1].src="off.png";      
    }, 300);

    setTimeout(function() {       
        candles[2].src="off.png";      
    }, 500);

    setTimeout(function() {       
        candles[0].src="off.png";      
    }, 200);
      
}