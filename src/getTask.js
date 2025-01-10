import { createForm } from "./addTask";
import Task from "./task";
import {tasks} from "./tasks";
import sidebars from './sidebars.js';

export function getTask(title,category,description,date,finish,type,container,main){
    const task = document.createElement('div');
    task.setAttribute("class","task")

    const head = document.createElement('h2');
    head.textContent = title;
    task.appendChild(head);

    const sec = document.createElement('h5');
    sec.textContent = category;
    task.appendChild(sec);

    const desc = document.createElement('p');
    desc.textContent = description;
    task.appendChild(desc);

    const dt = document.createElement('p');
    dt.textContent = date;
    task.appendChild(dt);

    const done = document.createElement('p');
    finish ? done.textContent = "Done" : done.textContent = "Not Done" 
    task.appendChild(done);

    const collection = document.createElement('div');
    collection.setAttribute("class","collection")
    let but = document.createElement('button');
    !finish ? but.innerHTML ='<span class="material-symbols-outlined">done_all</span>' : but.innerHTML ='<span class="material-symbols-outlined">close</span>';
    collection.appendChild(but);

    const del = document.createElement('button');
    del.innerHTML = '<span class="material-symbols-outlined">delete</span>';
    collection.appendChild(del);
    const edite = document.createElement('button');
    edite.innerHTML = '<span class="material-symbols-outlined">edit</span>';
    collection.appendChild(edite);
    task.appendChild(collection);

    

    
    container.appendChild(task);
    main.appendChild(container);

    edite.onclick = function () {
        main.innerHTML = ""
        createForm(title,category,description,date,finish,type)
    }

        but.onclick = function () {
            // Toggle the 'done' status
            finish = !finish;

            // Save the updated value back to localStorage
            tasks[title]= new Task(title, category, description, date,finish);

            // Update the UI for this task only
            finish ? done.textContent = "Done" : '"Not Done"';
            !finish ? but.innerHTML = '<span class="material-symbols-outlined">done_all</span>' :but.innerHTML =  '<span class="material-symbols-outlined">close</span>';
            // Remove the task from the DOM if it's no longer "done"
          
                    container.removeChild(task);
                        
                sidebars()

                }
            del.onclick = function () {
                    tasks[title]
                    container.removeChild(task);
                    sidebars()



                }
}