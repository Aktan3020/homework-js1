
let textcont = 0;
var par = document.querySelector("p")

function plus() { 
let newf = +par.textContent + 1;
par.textContent = newf;
}

function minus() {

    let newf = +par.textContent - 1;
    par.textContent = newf;  
    if (newf < 0){
         par.textContent = 0;
         alert("Минимальное число 0")
        
    }


}
let btn1 = document.querySelector(".ee");
let btn2 = document.querySelector(".e");
let result = par.textContent = textcont;
btn1.addEventListener('click', plus);
btn2.addEventListener('click', minus);