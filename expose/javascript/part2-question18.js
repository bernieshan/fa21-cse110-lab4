var counter = 0;
var i = setInterval(function(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
    counter++;

}, 1000);