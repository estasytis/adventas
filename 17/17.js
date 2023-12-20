
function giftListManager() {
    
    let giftList = [];  
    
    function addGift(giftName) { 

        giftList.push(giftName);      
    }  
    
    function removeGift(giftName) {
      let index = giftList.indexOf(giftName);
      if (index !== -1) {
        giftList.splice(index, 1);
        console.log(`${giftName} removed from Santa's gift list.`);
      } else {
        console.log(`${giftName} is not in Santa's gift list.`);
      }
    }
  
   
    function displayGiftList() {
      if (giftList.length === 0) {
        console.log("Santa's gift list is empty.");
      } else {
        console.log("Santa's Gift List:");
        giftList.forEach((gift, index) => {
          console.log(`${index + 1}. ${gift}`);
        });
      }
    }
  
    return { addGift, removeGift,displayGiftList,};
  }
  
  // ---------------------------------
  const Manager = giftListManager();
   
  Manager.displayGiftList();  
  Manager.addGift("pirma");
  Manager.addGift("antra");
  Manager.addGift("trečia");  
  Manager.displayGiftList(); 
  
  Manager.removeGift("antra");  
  Manager.displayGiftList(); 
