console.log("je suis premier");


const test = document.getElementById("demo");
const date = document.getElementById("date");

test.innerHTML = "Ceci est un test";

function klaxon_name(){
    date.innerHTML= new Date();
}



let mess = document.getElementById("message");
let btn = document.getElementById("btn")

mess.addEventListener("input", function() {
    btn.innerHTML = mess.value;
});
