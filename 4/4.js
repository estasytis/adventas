 
 let DEERNAMES=0;
 let DEERNUMBERS=5;
 //-----------------------------
 function printList(deersName)
 {
    nameList=document.querySelector("#nameList");
    let text="";
    for(let i=0; i<deersName.length; i++){
      text+=` &#127877; ${deersName[i]}  </br>`;
    }
    nameList.innerHTML=text;

 }
 ///-------------------------------
 function showList()
 {
   let deersName=deerNameGenerator();   
   DEERNAMES=deersName;
   printList(deersName);
 }
//-------------------------------
 function showSortList()
 {
    let deersName;
    if(DEERNAMES==0){
        deersName=deerNameGenerator();  
        DEERNAMES=deersName;
    }
    else {
        deersName=DEERNAMES;    
    }

    deersName.sort();
    printList(deersName);   
 }
 //------------------------------------
 function randomNamef()
 {
    showSortList();
    let index=Math.floor(Math.random()*DEERNUMBERS);   
    return DEERNAMES[index];    
 }
  //------------------------------
  function printRandom()
  {
     let randomName=document.querySelector("#randomName");  
     let name= randomNamef();
     randomName.innerHTML=name;
  }
//-------------------------------------
function deerNameGenerator()
{
    const deerNames=['Rudolph'];
    const vowels=['a','e','i','o','u','y'];
    const consonants=['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z'];
    let i=1;
    while(i<DEERNUMBERS)
    {
        let text="";
        let length=Math.floor(Math.random()*7);
        for(let j=0; j<3+length/2; j++)
        {
          let v =Math.floor (Math.random()*vowels.length);
          let c = Math.floor(Math.random()*consonants.length);
          text += (consonants[c]+vowels[v]);
        }
        text=text.charAt(0).toUpperCase() + text.slice(1);  
        //Ar unikalus
        if(!deerNames.includes(text)){
          
            deerNames[i]=text;
            i++;
        }
        
    }  
   
   return deerNames;
}
