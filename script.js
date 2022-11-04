
var tie=0;
var flag=0;
var t=0;
var X=0;var O=0
var win=0;

var turn="X";
pressButton=(id)=>{
 win=0;
   if (flag==1 || t==9 ){reload()}

    var input=document.getElementById(id);
    if(input.innerText==""){
       
 if (turn=="X")
   {t++;

       input.innerText=turn;
    turn="O"
  input.classList.replace("red","blue");
  document.getElementById("display").innerText="Turn for O";
  checkWin(id); }
//    if(win==0){playAI()}
else{t++; 
  input.innerText=turn;
 
  turn="X"
  document.getElementById("display").innerText="Turn for X"
      input.classList.replace("blue","red");

 }
}
 
else{alert("click another")};


 
  
     
}
reload=()=>{ t=0; turn="X"
flag=0

    document.getElementById("a").innerText="";
    document.getElementById("b").innerText="";
document.getElementById("c").innerText="";
document.getElementById("d").innerText="";
document.getElementById("e").innerText="";
document.getElementById("f").innerText="";
document.getElementById("g").innerText="";
document.getElementById("h").innerText="";
document.getElementById("i").innerText="";
}
checkWin=(id)=>{
    
    var a=document.getElementById("a").innerText;
    var b=document.getElementById("b").innerText;
var c=document.getElementById("c").innerText;
var d=document.getElementById("d").innerText;
var e=document.getElementById("e").innerText;
var f=document.getElementById("f").innerText;
var g=document.getElementById("g").innerText;
var h=document.getElementById("h").innerText;
var i=document.getElementById("i").innerText;

if(t==9){ tie++;
   document.getElementById("display").innerText= "It's Tie"  };

 
if(a===b && b===c && a===c && a!=="" || a===e && e===i  && a===i && a!=="" || a===d && d===g && a===g && a!=="" || b===e && e===h && b===h && b!=="" || c===e && e===g && c===g && c!=="" || c===f && f===i && c===i && c!=="" || d===e && e===f && d===f && d!=="" || g===h && h===i && g===i && i!=="" ){
   var winner=document.getElementById(id).innerText;
   win=1
  document.getElementById("display").innerText= `${winner} won`; flag=1
if(winner=="X"){
  X++;
}
else if (winner=="O"){O++}

  }
  document.getElementById("X").innerText=`X:  ${X} `;
  document.getElementById("O").innerText=`O:  ${O} `;
  document.getElementById("tie").innerText=`T:  ${tie} `;
}


playAI=()=>{
  var rand=Math.floor(Math.random() * 10);
  console.log(rand)
  nodeList=document.querySelectorAll("td");
  if(rand==9){rand=1}
  if(nodeList[rand].innerText==""){
    t++; 
    nodeList[rand].innerText=turn;
    turn="X"
    document.getElementById("display").innerText="Turn for X"
    nodeList[rand].classList.replace("blue","red");
    id=nodeList[rand].id
    console.log(id)
    checkWin(id)
  }
  else{
     
playAI();
  }
// 
}
