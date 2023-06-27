//import { addData, closePopup } from "./modules/addData.js";

let inputdata = document.getElementById("weather-input");

//let inputTable = document.getElementById("table");


fetch('./components/inputdataModule.html').then((response) => response.text())
    .then((html) => {
        inputdata.innerHTML = html
    })
// fetch('./components/tableModule.html').then((response) => response.text())
//     .then((html) => {
//         inputTable.innerHTML = html
//     })
// let form = document.getElementById("weather-input")
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     addData();
// })
// let popup=document.getElementById("closeIcon")
// popup.addEventListener("click",()=>{
//     closePopup();
// })

export const add=(event)=>{
    event.preventDefault();
    //console.log("hi");
    alert("hi");
}
let form=document.getElementById("weather-input");
form.addEventListener("submit",(event)=>{

    event.preventDefault();
    add();

})
