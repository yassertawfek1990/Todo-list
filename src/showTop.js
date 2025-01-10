import { isToday, parseISO, isTomorrow, isThisWeek, isThisMonth } from 'date-fns';

import { displayTask } from './besmellah';
import { createForm } from "./addTask";
import {tasks} from "./tasks";
import sidebars from './sidebars';
import { getAll } from './getAll';



export function showTop(type,unit){
    const taskEntries = Object.entries(tasks);

// Sort the entries array by the `date` property
taskEntries.sort(([, taskA], [, taskB]) => {
  const dateA = new Date(taskA.date);
  const dateB = new Date(taskB.date);
  return dateA - dateB; // Ascending order (earliest date first)
});

// Convert the sorted entries back to an object (optional)
const sortedTasks = Object.fromEntries(taskEntries);
    const main = document.querySelector('.main');

    let count = 0
    for (let i = 0; i < Object.keys(sortedTasks).length; i++) {
        const key = Object.keys(sortedTasks)[i];
        let sign
        let check
        const value = tasks[key];
        if (type == "Done Tasks" ){check = value.done}
        else if (type == "All Tasks"){check = true}
        else {check = !value.done}
        let parsedDate = parseISO(value.date);
        type == "Today"?sign = isToday(parsedDate):type == "Tomorrow"? sign = isTomorrow(parsedDate):type == "This Week"? sign = isThisWeek(parsedDate):type == "This Month"? sign = isThisMonth(parsedDate): type == "All Tasks" ?sign = true :type == "New Tasks" ?sign = true:type == "Done Tasks" ?sign = true:sign = (value.category == type)
        if (count > 3) {break}
        if (sign){
                if (check){
                    const info = document.createElement("div")
                    info.setAttribute("class","info")
                    count++
                    const td = document.createElement("div")
                    td.setAttribute("class","td")
                    const title = document.createElement('button');
                    title.setAttribute("class","title")
                    title.textContent = value.title;
                    title.onclick = ()=>displayTask(value.title,value.category,value.description,value.date,value.done,type)
                    td.appendChild(title);
                    const date = document.createElement('button');
                    date.setAttribute("class","date")
                    date.textContent = value.date;
                    date.onclick = ()=>getAll(value.date)
                    td.appendChild(date);
                    info.appendChild(td);
                    const allButtons = document.createElement("div")
                    allButtons.setAttribute("class","allButtons")
                    const but = document.createElement('button');
            but.innerHTML = '<span class="material-symbols-outlined">done_all</span>';
            allButtons.appendChild(but);

            const del = document.createElement('button');
            del.innerHTML = '<span class="material-symbols-outlined">delete</span>';
            allButtons.appendChild(del);
            const edite = document.createElement('button');
            edite.innerHTML = '<span class="material-symbols-outlined">edit</span>';
            allButtons.appendChild(edite)
            info.appendChild(allButtons)
            unit.appendChild(info)
            edite.onclick = function () {
                main.innerHTML = ""
                createForm(value.title,value.category,value.description,value.date,value.done,type)
            }
                but.onclick = function () {
                    // Toggle the 'done' status
                    value.done = !value.done;
    
                    // Save the updated value back to tasks
                    tasks[key]= value;
                    value.done? title.setAttribute("class","line"):title.removeAttribute("class","line")
                }
                    del.onclick = function () {
                            unit.removeChild(info);
                            console.log(tasks[key])
                            delete tasks[key]
                            console.log(tasks[key])
                            console.log("del")
                            sidebars()


                        }

        }
    }
    }
}