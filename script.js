
var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var randombtn = document.getElementById('btnrandom');

function generateRandomColor(){
    var symbols, color;
    symbols = '0123456789ABCDEF';

    color= '#';
    for( var i= 0; i < 6; i++){
        color = color + symbols[Math.floor(Math.random()*16)];
    }
    return color
}

function pickaColor(){
    color1.value = generateRandomColor(); 
    color2.value = generateRandomColor();
}

function setBackground(){
    body.style.background = "linear-gradient(to right, "+ color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ';';
}

function setColors(){
    pickaColor();
    setGradient();
}

function setGradient(){
    setBackground();
}

document.addEventListener('DOMContentLoaded',setColors);
color1.addEventListener("input", setGradient);
color2.addEventListener('input', setGradient);
randombtn.addEventListener('click', setColors);

// function generateRandomColor(){
//     var maxVal = 0xffffff
//     var randomNumber = Math.random()* maxVal;  
//     // var randomNumber = Math.random() * 10000000 ;  
//     randomNumber = Math.floor(randomNumber);
//     randomNumber = randomNumber.toString(16);
//     var randomColor = randomNumber.padStart(6,0);
//     return `#${randomColor.toUpperCase()}`
// }