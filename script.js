var h1 = document.querySelector('h1');
var mole = document.querySelectorAll(".mole");
var dirt = document.querySelectorAll(".dirt");
var startmud = document.querySelector("#mud");
var startmole = document.querySelector("#mole");
var btn = document.querySelector("#start");
var points = document.querySelector(".points");
var moles=document.querySelectorAll(".mole");
var c=0;

function clicked1(){
    c=c+1;
   console.log(c);
    document.getElementById("currentPoint").innerHTML=c;
 }



function start(){
    points.style.visibility="visible";
    h1.style.visibility = "visble";
    
    startmud.style.visibility = "hidden";
    btn.style.visibility="hidden";
    startmole.style.visibility = "hidden";
    for(let i=0;i<6;i++)
    {
        dirt[i].style.visibility="visible";
    }
    // for(let i=0;i<2;i++)
    // {
    //     points[i].style.visibility="visible";
    // }

    setInterval(() => {
        var ran=Math.floor(Math.random()*6);
        moles[ran].style.visibility="visible";
        setTimeout(() => {
            moles[ran].style.visibility="hidden";
        }, 1000);
    }, 1000);
     
}
// function clicked(){
//     c=c+1;
//    // console.log(c);
//     document.getElementById("currentPoint").innerHTML=c;
     

 
//  function clicked(){
//     c=c+1;
//    console.log(c);
//     document.getElementById("currentPoint").innerHTML=c;
//  }
 console.log(c);
