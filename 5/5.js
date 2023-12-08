


let words=["jingle", "bells", "sleig", "reindeer", "Christmas"]; //Kodėl sąlygoje 32
words=[];
let suma= countLetters(words);

console.log(suma);

function countLetters( words )
{
   // console.log(words.length)
    let sum=0;
    if (!Array.isArray(words) || !words.length) {
       return sum;
    }

    for(let i=0; i<words.length; i++)
    {   
        const letters = new Set();  
        let word=words[i].toLowerCase();   //??? 
        for(let j=0; j<word.length; j++)
        {
          letters.add(word[j]);
          
        }
       // console.log(letters.size);
        sum+=letters.size;       

    }

    return sum;
}