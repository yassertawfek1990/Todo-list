// import { createForm } from "./addTask";
import { getTask } from "./getTask";
import { addBut } from "./add";

export function displayTask(title,category,description,date,finish,type){
    document.querySelector('.subject').textContent = type

    console.log("display")
 

    const main = document.querySelector('.main');
    main.innerHTML = ""
    const container = document.createElement('div');
    container.setAttribute("class","container")
    getTask(title,category,description,date,finish,type,container,main)
    addBut(container,main,date,category,type)
}