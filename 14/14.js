
class SecretMessage  {

    constructor()
    { 
        //Abėcėlės ribos
        this.a='a'.charCodeAt(); 
        this.z='z'.charCodeAt();
        this.A='A'.charCodeAt();
        this.Z='Z'.charCodeAt();

    }
    //------------------------------------   
    encrypt(message, key)
    {
               
        key=key%26; 
        let result=""; 

        for (let i=0; i<message.length; i++)
        {
           let chr=message[i].charCodeAt(); 
           if (chr>=this.a && chr<=this.z || chr>=this.A && chr<=this.Z ){
             
                let charcode = (message[i].charCodeAt()) + key;

                //į abėcėlės pradžia
                if (charcode>this.z){
                    charcode=charcode-this.z +this.a-1; 
                }
                if (charcode>this.Z && chr>=this.A && chr<=this.Z){
                    charcode=charcode-this.Z +this.A-1; 
                }           
                result += String.fromCharCode(charcode);
           }
           else{
            result+=message[i];
           }           
        }
       return result;
    }
    //-----------------------------------------
    decrypt(message, key)
    {
        key=key%26; 
        let result=""; 

        for (let i=0; i<message.length; i++)
        {
           let chr=message[i].charCodeAt(); 
           if (chr>=this.a && chr<=this.z || chr>=this.A && chr<=this.Z ){
             
                let charcode = (message[i].charCodeAt())- key;

                //į abėcėlės pradžia
                if (charcode<this.A){
                    charcode=this.Z-(this.A-charcode)+1; 
                }
                if (charcode<this.a && chr>=this.a && chr<=this.z){
                    charcode=this.z-(this.a-charcode)+1; 
                }
                result += String.fromCharCode(charcode);
           }
           else{
                result+=message[i];
           }           
        }
        return result;
    }
  }

const secretMessage = new SecretMessage();
const originalMessage = "Merry Christmas! Happy New Year 2024";
const key = 3; 

const encryptedMessage=secretMessage.encrypt(originalMessage,key);
console.log(encryptedMessage);

const decryptedMessage=secretMessage.decrypt(encryptedMessage,key);
console.log(decryptedMessage);