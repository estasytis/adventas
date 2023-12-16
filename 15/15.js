let A=[];

function replaceChristmas(text, emoji="🎄")
{
   let k=0;  
   A=text.split(" ");   
   
   for (let i=0; i<A.length; i++)
   { 
      if (A[i]==='Christmas' || A[i]==='christmas'){
         A[i]=emoji;
         k++;      
     }     
   } 
 return k;
}

let text="Christmas is coming, Christmas is coming!  New year... christmas";
let emoji="🎅"
let count=replaceChristmas(text, emoji);

console.log(count);
console.log(A);