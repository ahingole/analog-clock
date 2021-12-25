

var open = document.getElementById("btn");
var hr = document.querySelector(".hr");
var min = document.querySelector(".min");
var sec = document.querySelector(".sec");

setInterval(()=> {
    var clock = new Date();
    var hh = clock.getHours();
    var mm = clock.getMinutes();
    var ss = clock.getSeconds();

const hour = 30*hh + 0.5*mm ;
const minuits = 6 * mm;
const second = 6*ss;

hr.style.transform = `rotate(${hour}deg)`
min.style.transform = `rotate(${minuits}deg)`
sec.style.transform = `rotate(${second}deg)`

});

