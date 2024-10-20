

function poupup() {
    let input = document.querySelector("#email").value;
let popup =document.querySelector(".popup");
let h3 =document.querySelector("h3");
let password =document.querySelector("#password").value;

    const valid =/\w+@\w+\.\w+/g;

    
 if(input[0]=== ""||password==""){
    popup.innerHTML="input is empty";
    popup.style.background='red';
    popup.style.top="0";
    
 }else if(valid.test(input)||password=="") {
    popup.innerHTML="email is valid";
    popup.style.background='green';
    popup.style.top="0";
    } else{
    popup.innerHTML="email is not valide";
    popup.style.background='red';
    popup.style.top="0";

    }

   
    setTimeout(() => {
        popup.style.top = "-100px"; 
    }, 3000);
}

  window.onclick=function(){
    popup.style.top = "-100px"; 
  }