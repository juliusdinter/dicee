var n1 = Math.floor( (Math.random() * 6) + 1);
var n2 = Math.floor( (Math.random() * 6) + 1);
document.getElementById('img1').innerHTML = '<img src="images/dice'+n1+'.png">'; 
document.getElementById('img2').innerHTML = '<img src="images/dice'+n2+'.png">';
if(n1>n2){
    document.querySelector("h1").textContent = "Prvi je pobjednik! 🚩";
}else if(n2>n1){
    document.querySelector("h1").textContent = "Drugi je pobjednik! 🚩";
}else{
    document.querySelector("h1").textContent = "Neriješeno!";
}
