// var input=[];


var turn="X";
pressButton=(id)=>{
   
    var input=document.getElementById(id);
    if(input.innerText==""){
 if (turn=="X")
   { input.innerText=turn;
    turn="O"
   }
   else{
    input.innerText=turn;
    turn="X"
   }}
   else(alert("click another"));
     checkWin();
}
reload=()=>{
    location.reload()
}
checkWin=()=>{
    var a=document.getElementById("a").innerText;
    var b=document.getElementById("b").innerText;
var c=document.getElementById("c").innerText;
var d=document.getElementById("d").innerText;
var e=document.getElementById("e").innerText;
var f=document.getElementById("f").innerText;
var g=document.getElementById("g").innerText;
var h=document.getElementById("h").innerText;
var i=document.getElementById("i").innerText;
console.log(a)

    if(a==="" && b==="" && c==="" && d=="" && e==="" && f=="" && g===""&& h==="" && i==="" ){
        console.log("hi")
    }

else{
if(a===b && b===c && a===c && a!=="" || a===e && e===i  && a===i && a!=="" || a===d && d===g && a===g && a!=="" || b===e && e===h && b===h && b!=="" || c===e && e===g && c===g && c!=="" || c===f && f===i && c===i && c!=="" || d===e && e===f && d===f && d!=="" || g===h && h===i && g===i && i!=="" ){
        alert("u won")  }
        console.log("h2i")
}
display();
}