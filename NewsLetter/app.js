let container1=document.getElementById("container1")
let container2=document.getElementById("container2")


fetch("./components/container-1.html").then((response)=>response.text()).then((html)=>{
    container1.innerHTML=html;
})
fetch("./components/container-2.html").then((response)=>response.text()).then((html)=>{
    container2.innerHTML=html;
})


function ValidateEmail(Mail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(Mail.value.match(mailformat))
{
showDetails(Mail)
}
else
{
let valid=document.getElementById("valid")

valid.style.display="block";
valid.style.color="red";
document.getElementById("Email").style.border="1px solid Red"
document.getElementsById("submit").style.border="1px solid red";
}
document.getElementById("Email").value="";
}








function showDetails(mail){

    let content=document.getElementById("content");
    let data=mail.value;
    
    content.innerHTML=`A confirmation email has been sent to <span>${data}</span>. 
    Please open it and click the button inside to confirm your subscription.`
    openPopup();
}




window.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target == submit) {
        ValidateEmail(document.getElementById("Email"))
    }
})

window.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target == Email) {
        let valid=document.getElementById("valid")
        valid.style.display="none";
        document.getElementById("Email").style.border="none"
    }
})



let popup = document.getElementById("popup");
let popupbg = document.getElementById("popupbg");
export const openPopup = () => {
    popup.style.display = "block";
    popupbg.style.display = "block";
}



export const closePopup = () => {
    let popup = document.getElementById("popup");
    let popupbg = document.getElementById("popupbg");
    popup.style.display = "none";
    popupbg.style.display = "none";
    
}


window.addEventListener("click", (event) => {
    if (event.target == popupbg) {
        closePopup();
    }
})
window.addEventListener("click", (event) => {
    if (event.target == btn) {
        closePopup();
    }
})

