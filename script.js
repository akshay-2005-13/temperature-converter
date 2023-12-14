let celsius=document.getElementById('celsius');
let fahrenheit=document.getElementById('fahrenheit');

celsius.oninput=() =>{
let a=(parseFloat(celsius.value)*9)/5+32;
fahrenheit.value=parseFloat(a.toFixed(2));};

fahrenheit.oninput=() =>{
    let a=((parseFloat(fahrenheit.value)-32)*5)/9;
    celsius.value=parseFloat(a.toFixed(2));};