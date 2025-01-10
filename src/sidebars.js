const { showTop } = require('./showTop');
import { getAll } from './getAll.js';

const cats = document.querySelector(".cats")
const dates = document.querySelector(".dates")
const options = ["Coding","Study","Party","Travel","Work","Sport","Shopping"]
const right = ["Today",'Tomorrow','This Week','This Month','New Tasks','Done Tasks','All Tasks']
const main = document.querySelector('.main');


export default function (){
    cats.innerHTML=""
    dates.innerHTML=""
options.forEach(o=>{
    const cat = document.createElement('div');
    cat.setAttribute("class","cat")
    const but = document.createElement('button');
    but.setAttribute("class","final")
    but.textContent = o;
    cat.appendChild(but);
    showTop(o,cat)
    cats.appendChild(cat)
})

right.forEach(o=>{
    const cat = document.createElement('div');
    cat.setAttribute("class","cat")
    const but = document.createElement('button');
    but.setAttribute("class","final")
    but.textContent = o;
    cat.appendChild(but);
    showTop(o,cat)
    dates.appendChild(cat)
})
const buts = document.querySelectorAll(".final")
buts.forEach(b=>{
    b.addEventListener("click",()=>{
        console.log(b.textContent)
        getAll(b.textContent)
    })
})

}