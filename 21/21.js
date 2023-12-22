
let msgZone=document.getElementById("showNumber");
let count=0;
msgZone.innerHTML=count;            

function eatCookie()
{
    count++;
    msgZone.innerHTML=count;
    return;
}
function resetNumber()
{
  count=0;
  msgZone.innerHTML=count;
  return;
}


