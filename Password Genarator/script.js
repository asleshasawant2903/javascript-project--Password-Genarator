const passwordBox = document.getElementById("Password");
const lenght = 12;

  
const upperClass = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerClass = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbole =  "! @ # $ % ^ & * ( ) _";

const allChars = upperClass+lowerClass+number+symbole;

function createpassword(){
    let password = "";
    password +=  upperClass [Math.floor(Math.random() * upperClass.length)];
    password +=  lowerClass[Math.floor(Math.random() * lowerClass.length)];
    password +=  number [Math.floor(Math.random() * number.length)];
    password +=  symbole[Math.floor(Math.random() * symbole.length)];

while(lenght > password.length){
    password += allChars [Math.floor(Math.random()* allChars.length)];

}
passwordBox.value = password;

}

