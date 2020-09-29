//Write your Typescript code here
document.getElementById("addbutton").addEventListener("click", myFunction);
var x2 = document.getElementsByTagName("li");
for(let i = 0; i< x2.length;i++)
{
    x2[i].addEventListener("click", myFunction2);
}
function myFunction()
{
    let x = document.createElement("li");
    (<HTMLInputElement> document.getElementById("ishealthy")).checked ? x.setAttribute("class","healthy") : x.setAttribute("class","unhealthy");

    x.textContent =(<HTMLInputElement> document.getElementById("newItem")).value;
    x.setAttribute("id",document.getElementById("list").childElementCount.toString());
    document.getElementById("list").appendChild(x);
}

function myFunction2() 
{
    
}