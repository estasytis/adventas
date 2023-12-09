 ///ChatGpt
 let words=[
    {"word": "Jingle Bells", "hint": "Classic holiday song."},
    {"word": "Candy Canes", "hint": "Sweet peppermint treats."},
    {"word": "Snowman", "hint": "Frosty the..."},
    {"word": "Sleigh", "hint": "Santa's mode of transport."},
    {"word": "Mistletoe", "hint": "Tradition for holiday kisses."},
    {"word": "Gingerbread", "hint": "Spiced holiday cookies."},
    {"word": "Stockings", "hint": "Hung with care."},
    {"word": "Nutcracker", "hint": "Classic Christmas ballet."},
    {"word": "Eggnog", "hint": "Rich holiday drink."},
    {"word": "Wreath", "hint": "Decorative door adornment."},
    {"word": "Ornaments", "hint": "Deck the tree with these."},
    {"word": "Chimney", "hint": "Santa's entrance."},
    {"word": "Snowflakes", "hint": "Unique ice crystals."},
    {"word": "Poinsettia", "hint": "Red holiday plant."},
    {"word": "Manger", "hint": "Nativity scene setting."},
    {"word": "Sled", "hint": "Winter fun in the snow."},
    {"word": "Frosty", "hint": "Snowman's name."},
    {"word": "North Pole", "hint": "Santa's workshop location."},
    {"word": "Cranberries", "hint": "Tart holiday fruit."},
    {"word": "Tinsel", "hint": "Shiny tree decoration."},
    {"word": "Gift Wrap", "hint": "Festive paper for presents."},
    {"word": "Reindeer", "hint": "Santa's flying helpers."},
    {"word": "Icicles", "hint": "Hanging from rooftops."},
    {"word": "Chestnuts", "hint": "Roasting on an open fire."},
    {"word": "Carolers", "hint": "Singing festive tunes."},
    {"word": "Presents", "hint": "Gift-giving tradition."},
    {"word": "Star", "hint": "Tree topper."},
    {"word": "Sleigh Bells", "hint": "Santa's jingling sound."},
    {"word": "Wassail", "hint": "Warm holiday drink."},
    {"word": "Candlelight", "hint": "Soft, cozy ambiance."},
    {"word": "Yule Log", "hint": "Traditional holiday dessert."},
    {"word": "Fruitcake", "hint": "Love it or hate it dessert."},
    {"word": "Elves", "hint": "Santa's little helpers."},
    {"word": "Snowball Fight", "hint": "Winter fun activity."},
    {"word": "Hot Chocolate", "hint": "Warm holiday beverage."},
    {"word": "Festive", "hint": "Cheerful and merry."},
    {"word": "Snow Globe", "hint": "Shake for a winter scene."},
    {"word": "Penguin", "hint": "Arctic holiday creature."},
    {"word": "Candleholders", "hint": "Decorative table pieces."},
    {"word": "Garland", "hint": "String of festive decor."},
    {"word": "Sleigh Ride", "hint": "Winter adventure."},
    {"word": "Mittens", "hint": "Warm hand coverings."},
    {"word": "Cinnamon", "hint": "Spicy holiday scent."},
    {"word": "Starlight", "hint": "Twinkling night sky."},
    {"word": "Angel", "hint": "Tree topper option."},
    {"word": "Snowdrift", "hint": "Piles of accumulated snow."},
    {"word": "Polar Bear", "hint": "Arctic holiday creature."},
    {"word": "Silver Bells", "hint": "Song title."},
    {"word": "Holly", "hint": "With red berries."},
    {"word": "Sugar Plum Fairy", "hint": "Nutcracker character."},
    {"word": "Toboggan", "hint": "Winter sledding device."},
    {"word": "Fir Tree", "hint": "Classic Christmas tree."},
    {"word": "Snow Angel", "hint": "Winter recreation."},
    {"word": "Fleece", "hint": "Warm fabric for winter."},
    {"word": "Sweater Weather", "hint": "Cold-weather attire."},
    {"word": "Snow Fort", "hint": "Winter construction."},
    {"word": "Yuletide", "hint": "Old-fashioned term for Christmas."},
    {"word": "Nativity", "hint": "Depiction of Jesus' birth."},
    {"word": "Wise Men", "hint": "Nativity figures."},
    {"word": "Snowshoes", "hint": "Winter footwear."},
    {"word": "Pinecone", "hint": "Natural decoration."},
    {"word": "Tidings", "hint": "Good news and wishes."},
    {"word": "Presents Under the Tree", "hint": "Exciting sight for kids."},
    {"word": "Holiday Feast", "hint": "Grand Christmas meal."},
    {"word": "Festival of Lights", "hint": "Hanukkah celebration."},
    {"word": "Sleigh Tracks", "hint": "Path left in the snow."},
    {"word": "Snowy Landscape", "hint": "Winter scenery."},
    {"word": "Christmas Eve", "hint": "Night before the big day."},
    {"word": "Minty Fresh", "hint": "Flavor of candy canes."},
    {"word": "Star of Bethlehem", "hint": "Biblical symbol."},
    {"word": "Festive Attire", "hint": "Dressing up for the season."},
    {"word": "Yule Cat", "hint": "Icelandic folklore creature."},
    {"word": "Snow Shovel", "hint": "Winter tool."},
    {"word": "Twinkle Lights", "hint": "Decorative holiday lighting."},
    {"word": "Earmuffs", "hint": "Winter ear protection."},
    {"word": "Snowfall", "hint": "Gentle descent of snow."},
    {"word": "Fleece Blanket", "hint": "Cozy winter wrap."},
    {"word": "Snowplow", "hint": "Clears the roads after a snowfall."},
    {"word": "Frostbite", "hint": "Cold weather concern."},
    {"word": "Cozy Fireside", "hint": "Warm and inviting."},
    {"word": "Holiday Hugs", "hint": "Warm embraces."},
    {"word": "Fruit Punch", "hint": "Festive drink."},
    {"word": "Winter Wonderland", "hint": "Song and theme."},
    {"word": "Snowy Owl", "hint": "Arctic bird."},
    {"word": "Iced Cookies", "hint": "Holiday baking delight."},
    {"word": "Snow Cone", "hint": "Frozen treat."},
    {"word": "Merry and Bright", "hint": "Festive and cheerful."},
    {"word": "Snowglobe Collection", "hint": "Display of mini winter scenes."},
    {"word": "Sparkling Cider", "hint": "Non-alcoholic holiday drink."},
    {"word": "Peppermint Bark", "hint": "Delicious holiday treat."},
    {"word": "Festive Spirit", "hint": "The joyous feeling of the season."}
  ];
  
  let thisword;
  let guessed=[]; 
  let taip;
  const word = document.querySelector('#word');
  const hint = document.querySelector('#hint');
  const results = document.querySelector('#result');

  //--------------------------------
  function showWord()
  {
    wordNumber=Math.floor(Math.random()*50);

     let text= words[wordNumber].word;
     let hyphens="";     

     for(let i=0; i<text.length; i++){
        if (text[i]!=" "){
            hyphens+=" _ ";
        }
        else{          
            hyphens+="&nbsp;&nbsp;&nbsp;";
        }
     }
          
     let hint_text= words[wordNumber].hint;    
     word.innerHTML='Word: '+ hyphens;
     hint.innerHTML=`Hint:  ${hint_text}`;     
     thisword=text;

     for(let i=0; i<text.length; i++){
        guessed[i]=0;
        if(thisword[i]==" "){
            guessed[i]=1;
        }
     }

     return;
  }
 
  function guessLetter()
  {
    let letter=window.prompt("Guess Letter. Your choice?");
    if (letter.length>1){
        letter=letter[0];
    }
    letter=letter.toLowerCase();
    let ans=checkLetter(letter);
    if (taip==1){
       results.innerHTML=` right "${letter}"`;
    }
    else{
        results.innerHTML=` wrong "${letter}"`;
    }

    showLetter();
    
    if (ans==thisword.length){
        results.innerHTML="GAME OVER. 💥";
    }
    
    return;
  }
 //--------------------------------------
  function checkLetter(letter)
  {
    let ans=0;
    taip=0;
     for (let i=0; i<thisword.length; i++)
     {
        
        if (thisword[i].toLowerCase()==letter && guessed[i]==0){
           guessed[i]=1; 
           taip=1;       
           
        }
        else if(guessed[i]==1){
            taip=1;
        }
        
        ans=ans+guessed[i];
     }
     return ans;
  }
  //-------------------------
  function showLetter()
  {
    let text="";   
    for(let i=0; i<thisword.length; i++)
    {
       if (guessed[i]==1)
        {
            if (thisword[i]==" "){
                text=text+"&nbsp;&nbsp;&nbsp;" 
            }
           else text=text+" "+thisword[i]+" ";
        }
        else{
            text=text+" _ ";
        }
    }
    word.innerHTML=`Word:  ${text} `;
    return text;
  }