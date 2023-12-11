const divs = document.querySelector('#childs');
function generate()
{
 
  const stripes = document.querySelector('#quantity');
  const color1 = document.querySelector('#color1');
  const color2 = document.querySelector('#color2');
 
  generateCandyCane(parseInt(stripes.value), color1.value, color2.value);
 
}

function generateCandyCane(value, color1, color2)
{
   let stripes="";
   
   for(let i=1; i<=parseInt(value); i++)
   {
      
       if (i%2==0)
           stripes+='<div class="child2"> </div>';
        else
           stripes+="<div class='child1'> </div>";

   }
  
   divs.innerHTML=stripes;

   const cs1=document.getElementsByClassName("child1") ;
   const cs2=document.getElementsByClassName("child2") ;
   
  for (let i = 0; i < cs1.length; i++) {
    cs1[i].style.backgroundColor = color1;
  }
  for (let i = 0; i < cs2.length; i++) {
    cs2[i].style.backgroundColor = color2;
  }
 

}