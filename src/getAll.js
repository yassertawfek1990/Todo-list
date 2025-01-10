

import { isToday, parseISO, isTomorrow, isThisWeek, isThisMonth } from 'date-fns';
import { addBut } from "./add";
import { getTask } from "./getTask";
import {tasks} from "./tasks";

const options = ["Coding","Study","Party","Travel","Work","Sport","Shopping"]


export function getAll(type){
    const taskEntries = Object.entries(tasks);

// Sort the entries array by the `date` property
taskEntries.sort(([, taskA], [, taskB]) => {
  const dateA = new Date(taskA.date);
  const dateB = new Date(taskB.date);
  return dateA - dateB; // Ascending order (earliest date first)
});

// Convert the sorted entries back to an object (optional)
const sortedTasks = Object.fromEntries(taskEntries);
    document.querySelector('.subject').textContent = type
    const main = document.querySelector('.main');
    const container = document.createElement('div');
    main.innerHTML = ""
    container.setAttribute("class","container")
    let dt=""
    let cat=""
    for (let i = 0; i < Object.keys(sortedTasks).length; i++) {
        const key = Object.keys(sortedTasks)[i];
        let sign
        let check
        const value = tasks[key];
        if (type == "Done Tasks" ){check = value.done}
        else if (type == "All Tasks"){check = true}
        else {check = !value.done}
        let parsedDate = parseISO(value.date);
        type == "Today"?sign = isToday(parsedDate):type == "Tomorrow"? sign = isTomorrow(parsedDate):type == "This Week"? sign = isThisWeek(parsedDate):type == "This Month"? sign = isThisMonth(parsedDate): type == "All Tasks" ?sign = true :type == "New Tasks" ?sign = true:type == "Done Tasks" ?sign = true:options.includes(type)?sign = (value.category == type):sign=(value.date == type)
        if (sign){
                if (check){
                    dt = value.date
                    cat = value.category
                    getTask(value.title,value.category,value.description,value.date,value.done,type,container,main)
                    
    }}}
    addBut(container,main,dt,cat,type)
}