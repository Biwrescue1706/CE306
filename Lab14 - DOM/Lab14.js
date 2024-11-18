// const h1 = document.createElement('h1');
// document.body.appendChild(h1);
// const text = document.createTextNode('DOM');
// h1.appendChild(text);

// document.addEventListener('DOMContentLoaded', () => {
//     const h1 = document.createElement('h1');
//     const text = document.createTextNode("DOM");
//     h1.appendChild(text);
//     const ul = document.createElement('ul');
//     const liArray = [];

//     for (let i = 0; i < 300 ; i++) {
//         liArray[i] = document.createElement('li');
//         const txt = document.createTextNode("Item #" + i);
//         liArray[i].appendChild(txt);
//     }
//     liArray.forEach(li => ul.appendChild(li));
//     document.body.appendChild(h1);
//     document.body.appendChild(ul);
// });
function buttonClick() {
    //ค้นหา element
    //1)ค้นหา id
    const p1 = document.getElementById("p1");
    p1.innerText = "Another Test";
    p1.style.color = "red";
    p1.style.fontWeight = "bold";
    p1.style.fontSize = "2em"

    //2 ค้นหาผ่านชนิดของ tag 
    const liCollection = document.getElementsByTagName('li');
    for(let li of liCollection){
        if(li.innerText == "Even"){
            li.style.color = "blue";
        }
    }
}