

function poupup() {
    let input = document.querySelector("#email").value;
let popup =document.querySelector(".popup");
let h3 =document.querySelector("h3");
    const valid =/\w+@\w+\.\w+/g;
 if(input[0]=== ""){
    popup.innerHTML="input is not valide";
    popup.style.background='red';
    popup.style.top="0";
    window.reload()

 }else if(valid.test(input)) {
    popup.innerHTML="input is valid";
    popup.style.background='green';
    popup.style.top="0";
    } else{
    popup.innerHTML="input is not valide";
    popup.style.background='red';
    popup.style.top="0";

    }
    
setTimeout(() => {
    popup.style.top = "-100px"; // إخفاء الـ popup بعد 3 ثوانٍ
}, 3000);

}

 