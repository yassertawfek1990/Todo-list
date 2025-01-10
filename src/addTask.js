import task from './task.js'
import {tasks} from "./tasks";
import sidebars from './sidebars.js';
import { getAll } from './getAll.js';
export function createForm(titleCOntent="",categoryContent="",descriptionContent="",DateContent="",done,id="") {
    // Get the container where the form will be added
    const main = document.querySelector(".main")
    const formContainer = document.createElement('div');
    formContainer.setAttribute('class', 'container');
    formContainer.setAttribute('id', 'forma');

    // Create the form element
    const form = document.createElement('form');
    form.setAttribute('id', 'form');
    form.onsubmit = (e)=>validateForm(e,titleCOntent,done,id);   

    // Create form heading
    const heading = document.createElement('h2');
    heading.textContent = 'New Task';
    form.appendChild(heading);
    
    // Function to create form groups
    function createFormGroup(labelText, inputType, inputId,inputValue) {
    const formGroup = document.createElement('div');
    formGroup.classList.add('form-group');
    
    const label = document.createElement('label');
    label.setAttribute('for', inputId);
    label.textContent = labelText;
    formGroup.appendChild(label);
    
    let input;
    if (inputType === 'textarea') {
    input = document.createElement('textarea');
    input.setAttribute('rows', '5');
    }else if (inputType === 'select') {
        
        input = document.createElement('select');
        const options = {1:"Work",2:"Study",3:"Party",4:"Travel",5:"Coding",6:"Sport",7:"Shopping"}
        for (let i = 1;i <7;i++){
            let option = document.createElement('option');
            option.textContent = options[i];
            option.value = options[i];
            input.appendChild(option);
        }
        } 
    else {
    input = document.createElement('input');
    input.setAttribute('type', inputType);
    }
    input.setAttribute('id', inputId);
    input.setAttribute('name', inputId);
    input.value= inputValue
    formGroup.appendChild(input);
    
    const errorDiv = document.createElement('div');
    errorDiv.setAttribute('id', `${inputId}Error`);
    errorDiv.classList.add('error');
    formGroup.appendChild(errorDiv);
    
    return formGroup;
    }
    
    // Add name input field
    form.appendChild(createFormGroup('Title:', 'text', 'title',titleCOntent));
    
    // Add email input field
    form.appendChild(createFormGroup('Category:', 'select', 'category',categoryContent));
    
    // Add message textarea
    form.appendChild(createFormGroup('Description:', 'textarea', 'description',descriptionContent));

    form.appendChild(createFormGroup('Date:', 'date', 'date',DateContent));

    
    // Add submit button
    const submitButtonGroup = document.createElement('div');
    submitButtonGroup.classList.add('form-group');
    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Add');
    submitButtonGroup.appendChild(submitButton);
    form.appendChild(submitButtonGroup);

    const cancle = document.createElement('div');
    
    cancle.classList.add('form-group');
    const cancleButton = document.createElement('button');
    cancleButton.setAttribute('id', 'cancle');
    cancleButton.textContent = "Cancle"
    cancleButton.onclick = function () {
        main.innerHTML = ""
        getAll(id)
    }
    cancle.appendChild(cancleButton);
    form.appendChild(cancle);
    
    // Append the form to the container
    formContainer.appendChild(form);
    main.appendChild(formContainer)
    }
    
    // Function to validate the form
    function validateForm(event,titleCOntent,done,id) {
        event.preventDefault();
    // Clear previous error messages
    document.getElementById("titleError").textContent = "";
    document.getElementById("categoryError").textContent = "";
    document.getElementById("descriptionError").textContent = "";
    document.getElementById("dateError").textContent = "";
    
    // Get form field values
    let title = document.getElementById("title").value;
    let category = document.getElementById("category").value;
    let description = document.getElementById("description").value;
    let date = document.getElementById("date").value;
    
    let isValid = true;
    
    // Validate name field
    if (title.trim() === "") {
    document.getElementById("titleError").textContent = "title is required.";
    isValid = false;
    }
    
    // Validate message field
    if (category.trim() === "") {
    document.getElementById("categoryError").textContent = "Category is required.";
    isValid = false;
    }
    
    if (description.trim() === "") {
        document.getElementById("descriptionError").textContent = "Description is required.";
        isValid = false;
        }
    
    if (date.trim() === "") {
        document.getElementById("dateError").textContent = "Date is required.";
        isValid = false;
        }
    // If all validations pass, the form can be submitted
    if (isValid){
        if(id){ 
            delete tasks[titleCOntent]
            tasks[title]= new task(title, category, description, date,done);
            document.querySelector(".main").innerHTML = ""
            getAll(id)
            sidebars()

        }
        else{
            tasks[title] = new task(title, category, description, date);
            document.querySelector(".main").innerHTML = ""
            createForm();
        }

    }
    return isValid;
    }