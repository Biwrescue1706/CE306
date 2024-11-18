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


// document.addEventListener('DOMContentLoaded', () => {
//     const p = document.createElement('p');
//     const text = document.createTextNode('Hello, my name is "Phuwanat "');
//     p.appendChild(text);
//     const ul = document.createElement('ul');

//     for (let i = 1; i <= 8; i++) {
//         const li = document.createElement('li');
//         const txt = document.createTextNode(i % 2 === 0 ? `Even` : `Odd`);
//         li.appendChild(txt);
//         ul.appendChild(li);
//     }
//     document.body.appendChild(p);
//     document.body.appendChild(ul);

// });
