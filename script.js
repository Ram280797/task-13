let div=document.createElement("div");
div.style.textAlign="center";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.addEventListener("click",foo);

let active=document.createElement("div");
active.setAttribute("id","active");
div.append(input,button,active);
document.body.append(div);

let recover=document.createElement("div");
active.setAttribute("id","recover");
div.append(input,button,recover);
document.body.append(div);

let deaths=document.createElement("div");
active.setAttribute("id","deaths");
div.append(input,button,deaths);
document.body.append(div);

async function foo(){
    let countryname=document.getElementById("country").value;
    console.log(countryname);
    let url=`https://api.covid19api.com/dayone/country/${countryname}`;
    let res= await fetch(url);
    let res1= await res.json();
    console.log(res1);
    let index=res1.length-1;
    console.log(res1[index].active);
    active.innerHTML=`total active cases:${res1[index].Active}`;
    console.log(res1[index].recovery)
    recover.innerHTML=`total Recover cases:${res1[index].Recover}`;
    console.log(res1[index].death)
    deaths.innerHTML=`total Deaths cases:${res1[index].Deaths}`;
}