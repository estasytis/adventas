
const myForm = document.querySelector('#my-form');
const ageInput = document.querySelector('#age');
const goodInput = document.querySelector('#good');
const msg = document.querySelector('.msg');
const ans1 = document.querySelector('#answer1');
const ans2 = document.querySelector('#answer2');
const userList = document.querySelector('#users');

function myFunction()
{
  if(ageInput.value<18){
    document.getElementById('goodD').style.visibility = "visible"; 
  }
  else{
    document.getElementById('goodD').style.visibility = "hidden"; 
  }
} 


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {  

  e.preventDefault();
  if(ageInput.value === '' || ageInput.value<18 && goodInput.value==='') {
    
    msg.classList.add('error');
    msg.innerHTML = 'Please fill the field';    
    setTimeout(() => msg.remove(), 3000);
  } else {
      document.getElementById('my-form').style.visibility = "hidden";  
      document.getElementById('goodD').style.visibility = "hidden";
      ans1.innerHTML=`Your age: ${ageInput.value} </br>`;      
      const li = document.createElement('li');

      if(ageInput.value>=18){
        li.appendChild(document.createTextNode(` Congratulations! You are on Santa’s Nice 👼 list! `));
      }
      else{

        ans2.innerHTML=`Have you been good this year?: ${goodInput.value} </br>`;
        if ((goodInput.value).toLowerCase()=='yes'){
          li.appendChild(document.createTextNode(` Congratulations! You are on Santa’s Nice 👼 list! `));
        } 
        else{
          li.appendChild(document.createTextNode(` Congratulations! You are on Santa’s Naughty 😜 list `));
        }        
      }
          
      userList.appendChild(li);      
      ageInput.value = '';
      goodInput.value = '';
    }
  }