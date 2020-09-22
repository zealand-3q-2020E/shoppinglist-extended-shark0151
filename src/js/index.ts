//Write your Typescript code here

let myElement:HTMLLIElement = <HTMLLIElement>document.getElementById("1");

console.log(myElement);

let myList:HTMLCollectionOf<HTMLLIElement> = <HTMLCollectionOf<HTMLLIElement>> document.getElementsByTagName("li");

console.log("mylist consist of");
console.log(myList);

for (let index = 0; index < myList.length; index++) {
        const element = myList[index];
        console.log(element);
        if(element.hasAttribute("class"))
          {
              if(element.getAttribute("class")=="unhealthy")
              {
                  element.setAttribute("class","healthy");
              }
              else
              {
                element.setAttribute("class","unhealthy");
              }
          }
}

let listunhelathy:HTMLUListElement = <HTMLUListElement>document.getElementById('listUnhealthy');

let myTest:string = "Chips";

let newLi:HTMLLIElement = <HTMLLIElement>document.createElement('li');
newLi.setAttribute('class','unhealthy');
newLi.setAttribute('id','16');
let newText = document.createTextNode(myTest);
newLi.appendChild(newText);

listunhelathy.appendChild(newLi);

    