//function add(){
   // let a=5;
    //let b=6;
    //let c=a+b;
   // document.write(c);
//}
function add(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a+b;
    document.getElementById("b1").innerHTML="THE ADDITION IS :"+c;
}
function sub(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a-b;
    document.getElementById("b2").innerHTML="THE SUBTRACTION IS :"+c;
}
function multi(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a*b;
    document.getElementById("b3").innerHTML="THE MULTIPLICATION IS :"+c;  
}
function div(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a/b;
    document.getElementById("b4").innerHTML="THE DIVISION IS :"+c;
}

