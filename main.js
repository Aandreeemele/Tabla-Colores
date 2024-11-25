import { coloresCSS } from "./data.js";

let root = document.querySelector("#root")
coloresCSS.forEach((cada_elemeno)=>{
    let div = document.createElement('div')
    div.className = cada_elemeno.color;
    div.textContent = cada_elemeno.color;

    root.appendChild(div)
});