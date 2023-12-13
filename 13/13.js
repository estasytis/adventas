 ///ChatGpt
 let quotes=[
    "Wishing you a season filled with warmth, comfort, and joy. Merry Christmas!",
    "May your heart be light, your stockings be full, and your holidays be merry and bright!",
    "Sending love and good cheer your way this Christmas. May it be a season of blessings for you and your loved ones.",
    "May the magic of Christmas fill every corner of your home and heart with love.",
    "Wishing you a holly jolly Christmas and a new year filled with peace and prosperity.",
    "May the spirit of Christmas bring you peace, the gladness of Christmas give you hope, and the warmth of Christmas grant you love.",
    "Here's to a season of love and harmony. Merry Christmas and a Happy New Year!",
    "May your days be merry and bright, and may all your Christmases be white.",
    "Wishing you laughter, love, and lots of joy this holiday season. Merry Christmas!",
    "May the beauty of the season fill your heart with warmth and happiness. Merry Christmas!",
    "Sending you warm wishes and the hope that your Christmas is as special as you are.",
    "May your home be filled with the joy of the Christmas season. Merry Christmas to you and your family!",
    "Wishing you a Christmas filled with moments of love, laughter, and goodwill.",
    "May the spirit of Christmas be with you throughout the coming year. Merry Christmas and Happy New Year!",
    "May your heart be light, your spirit be bright, and your Christmas be merry and white.",
    "Warmest thoughts and best wishes for a wonderful Christmas and a Happy New Year.",
    "May the magic and wonder of the holiday season stay with you throughout the year. Merry Christmas!",
    "Wishing you the peace, joy, and love of the season. Merry Christmas and Happy Holidays!",
    "May the festive season bring you moments of love, laughter, and endless joy. Merry Christmas!",
    "Sending you my warmest wishes for a Christmas filled with love and happiness. Cheers to a wonderful holiday season!"
  ];
  
  let emo=["☃︎","🎅","🎄","❄️","☃️","🎁","🦌"];
  
  const results = document.querySelector('#result');
  const results2 = document.querySelector('#result2');
  //--------------------------------
  function showQuote()
  {
        let wordNumber=Math.floor(Math.random()*20);
        let ind=Math.floor(Math.random()*7);
        let text= quotes[wordNumber];
        let text2="";
        for (let i=0; i<15; i++)
        {
            text2=text2+" "+emo[ind]+" ";
        }
        results.innerHTML=`<h1>        ${text} </h1>`;    
        results2.innerHTML=`<h2>        ${text2} </h2>`;   

        
        

        return;
    }

    
   
 