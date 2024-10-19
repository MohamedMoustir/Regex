

function poupup() {
    let input = document.querySelector("#email").value;
    const valid =/\w+@\w+\.\w+/g;
 if(input[0]=== " "){
    alert("input  empty")
 }else if(valid.test(input)) {
        alert(" email valid")
    } else{
        alert("email is not valid")
    }
}

 