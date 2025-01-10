import { createForm } from "./addTask";

export function addBut(container,main,date,category,type){
    const div = document.createElement('div');
    div.setAttribute("class","addDiv")
    const add = document.createElement('button');
    add.setAttribute("class","add")
    add.textContent = "New Task";
    div.appendChild(add)
    container.appendChild(div)
    add.onclick = function () {
        main.innerHTML = ""
        const options = ["Work","Study","Party","Travel","Coding","Sport","Shopping"]
        const right = ['New Tasks','Done Tasks','All Tasks']
        let dt;
        let cat;
        if (right.includes(type)){dt = ""}else{dt = date}
        if (options.includes(type)){cat = category}else{cat = ""}
        createForm("",cat,"",dt,false,type)
}
}