const inputs = document.querySelectorAll(".input");
const span = document.querySelectorAll(".aviso");
const form = document.getElementById("form");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit",(e) =>{
    e.preventDefault();

    validateName();
    validateEmail();
    validatePhone();
    validateText();

});

function error(index){
    inputs[index].style.border = '2px solid red'
    span[index].style.display = 'block'
}
function remove(index){
    inputs[index].style.border = '2px solid green'
    span[index].style.display = 'none'
}

function validateName(){
    inputs[0].value.length <= 3 ? error(0) : remove(0);
}
function validateEmail(){
    if(!emailRegex.test(inputs[1].value)){
        error(1);
    } else{
        remove(1);
    }
}
function validatePhone(){
    inputs[2].value.length < 11 ? error(2) : remove(2);
}
function validateText(){
    inputs[3].value.length < 20 ? error(3) : remove(3);
}