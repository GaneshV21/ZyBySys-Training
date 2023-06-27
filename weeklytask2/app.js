let arr = []
let startValue=1
let endValue=5
let curr=1;
let zer=1;
let stopp=10;
let arr3=[]

function addData(img_link, img_name,alter,capital,population,region) {
    let obj = { img_link, img_name,alter,capital,population,region }
    arr.push(obj)


}

function firstPage(arr){
    for(let i=0;i<25;i++){
        arr3.push(arr[i])

    }
    console.log(arr3)
    displayascdes(arr3)

    document.querySelector('#sortSelect').addEventListener("change", function(event) {
        event.preventDefault();
        console.log("hiiii")
    
        let sortSelect=document.getElementById("sortSelect").value;
        switch(sortSelect){
            case 'nameAsc':
                ascendingHome(arr3)
                break;
            case 'nameDesc':
                descendingHome(arr3)
                break;
            case 'populationAsc':
                ascPopMain(arr3)
                break;
            case 'populationDesc':
                desPopMain(arr3)
                break;
        }
    })

    window.addEventListener("input", (event) => {

        if (event.target == search) {
            displayUsers(arr3);
            
        }
    })

    
}


function ascendingHome(arr3)
{
    

    
    arr3.sort((a,b)=> a.img_name.localeCompare(b.img_name));
    displayascdes(arr3)
    displayUsers(arr3);
    window.addEventListener("input", (event) => {

        if (event.target == search) {
            displayUsers(arr3);
            
        }
    })
    
    
}
function descendingHome(arr3)
{
    

    
    arr3.sort((a,b)=> b.img_name.localeCompare(a.img_name));
    displayascdes(arr3)
    displayUsers(arr3);
    window.addEventListener("input", (event) => {

        if (event.target == search) {
            displayUsers(arr3);
            
        }
    })
    
    
}


function ascPopMain(arr3){
    
    arr3.sort((a,b)=> a.population-b.population);
    displayascdes(arr3)
    displayUsers(arr3);
    window.addEventListener("input", (event) => {

        if (event.target == search) {
            displayUsers(arr3);
            
        }
    })
    

}
function desPopMain(arr3){
    
    arr3.sort((a,b)=> b.population-a.population);
    displayascdes(arr3)
    displayUsers(arr3);
    window.addEventListener("input", (event) => {

        if (event.target == search) {
            displayUsers(arr3);
            
        }
    })
    

}



function displayCard(response) {
    let display = document.getElementById("display")
    display.innerHTML = ""
    for (let i =0; i <response.length; i++) {
        
        let name1 = response[i].name.common;
        let source1 = response[i].flags.png;
        let alter=response[i].flags.alt;
        
        let capital;

        if(response[i].capital){

        capital=response[i].capital[0];
        }
        else{
            capital="undefined";
        }
           let population=response[i].population;
            let region=response[i].region;
        
        addData(source1, name1,alter,capital,population,region);
    

    }
    pageNo(startValue,endValue);
    displayCard2(arr,zer)
    firstPage(arr);
    

   
    
}



function ascending(arr,i)
{
    let start=(i-1)*25
    let end=start+25
    let arr2=[]

        for(let j=start;j<=end;j++){
            arr2.push(arr[j])
        }
    
    console.log("asc",arr2)
    console.log(start,end)

    
    arr2.sort((a,b)=> a.img_name.localeCompare(b.img_name));
    displayascdes(arr2)
    displayUsers(arr2);
    window.addEventListener("input", (event) => {

        if (event.target == search) {
            displayUsers(arr2);
            
        }
    })
    
    
}
function descending(arr,i){
    let start=(i-1)*25
    let end=start+25
    let arr2=[]

        for(let j=start;j<=end;j++){
            arr2.push(arr[j])
        }
    

    arr2.sort((a,b)=> b.img_name.localeCompare(a.img_name));
    displayascdes(arr2)
    displayUsers(arr2);
    window.addEventListener("input", (event) => {

        if (event.target == search) {
            displayUsers(arr2);
            
        }
    })

}
function ascPop(arr,i){
    let start=(i-1)*25
    let end=start+25
    let arr2=[]

        for(let j=start;j<=end;j++){
            arr2.push(arr[j])
        }
    
    arr2.sort((a,b)=> a.population-b.population);
    displayascdes(arr2)
    displayUsers(arr2);
    window.addEventListener("input", (event) => {

        if (event.target == search) {
            displayUsers(arr2);
            
        }
    })
    

}
function desPop(arr,i){

    let start=(i-1)*25
    let end=start+25
    let arr2=[]

        for(let j=start;j<=end;j++){
            arr2.push(arr[j])
        }
    
    arr2.sort((a,b)=> b.population-a.population);
    displayascdes(arr2)
    displayUsers(arr2);

    window.addEventListener("input", (event) => {

        if (event.target == search) {
            displayUsers(arr2);
            
        }
    })
   

}


const displayascdes=(response)=>{
    let display = document.getElementById("display")
    display.innerHTML = ""
    for (let i = 0; i <response.length; i++) {
        let divContent = document.createElement("div");
        let image = document.createElement("img");
        let name = document.createElement("p");
        let source = (response[i].img_link);
        name.innerHTML = (response[i].img_name);

        image.width = 250;
        image.height = 200;
        image.src = source;
        image.style.margin = " 40px 0px";
        divContent.appendChild(image);
        divContent.appendChild(name);



            let capital=document.createElement("p");
            let population=document.createElement("p");
            let region=document.createElement("p");
        if(response[i].capital){

            capital.innerHTML=response[i].capital;
        }
        else{
            capital.innerHTML="undefined";
        }
            population.innerHTML=response[i].population;
            region.innerHTML=response[i].region;
            divContent.appendChild(capital);
        divContent.appendChild(population);
        divContent.appendChild(region);
    
        display.appendChild(divContent);
        divContent.style.textAlign = "center";

        name.style.border="1px solid black"
        capital.style.border="1px solid black"
        population.style.border="1px solid black"
        region.style.border="1px solid black"

        divContent.style.border="none"
        divContent.style.borderRadius="15px"
        divContent.style.backgroundColor="rgba(201, 201, 201, 0.483)"
        region.style.borderBottomRightRadius="15px"
        region.style.borderBottomLeftRadius="15px"
        name.style.color="white"
        capital.style.color="white"
        population.style.color="white"
        region.style.color="white"

        name.style.backgroundColor="black"
        capital.style.backgroundColor="black"
        population.style.backgroundColor="black"
        region.style.backgroundColor="black";

        function showDetailss() {
            console.log("hi")
            let imageDisplay = document.getElementById("imgg");
            let contentDisplay = document.getElementById("content");
            imageDisplay.src = source;
            contentDisplay.innerHTML = JSON.stringify(response[i].alter);
            openPopup();
        }
        image.onclick = () => {
            showDetailss();
        }




    }
}


export const submitData = async () => {
    try {
        

        let responseData = await fetch("https://restcountries.com/v3.1/all")

        let response = await responseData.json()
        displayCard(response)
        //return response
        

    } catch (error) {
        console.log(error)
    }
}
document.getElementById("myForm").addEventListener("submit", (event) => {

   
    event.preventDefault();
    submitData();
    let foot=document.getElementById("footer")
    foot.style.display="block";
    
})


let popup1 = document.getElementById("closeIcon")
popup1.addEventListener("click", () => {
    closePopup();
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
const displayUsers = (arr) => {
    let search = document.getElementById("search")

    let query = search.value;
    const payload =  arr;
    let datadisplay = payload.filter((eventdata) => {

        if (eventdata.img_name.toLowerCase().includes(query.toLowerCase())) {
            return eventdata

        }
    })
    //console.log(datadisplay)
    displayCard1(datadisplay)

}
function displayCard1(response) {
    let display = document.getElementById("display")
    display.innerHTML = ""
    for (let i = 0; i <response.length; i++) {
        let divContent = document.createElement("div");
        let image = document.createElement("img");
        let name = document.createElement("p");
        let source = (response[i].img_link);
        name.innerHTML = (response[i].img_name);

        image.width = 250;
        image.height = 200;
        image.src = source;
        image.style.margin = " 40px 0px";

        divContent.appendChild(image);
        divContent.appendChild(name);



            let capital=document.createElement("p");
            let population=document.createElement("p");
            let region=document.createElement("p");
        if(response[i].capital){

            capital.innerHTML=response[i].capital;
        }
        else{
            capital.innerHTML="undefined";
        }
        population.innerHTML=response[i].population;
        region.innerHTML=response[i].region;
        divContent.appendChild(capital);
        divContent.appendChild(population);
        divContent.appendChild(region);
    
        display.appendChild(divContent);
        divContent.style.textAlign = "center";

        name.style.border="1px solid black"
        capital.style.border="1px solid black"
        population.style.border="1px solid black"
        region.style.border="1px solid black"

        divContent.style.border="none"
        divContent.style.borderRadius="15px"
        divContent.style.backgroundColor="rgba(201, 201, 201, 0.483)"
        region.style.borderBottomRightRadius="15px"
        region.style.borderBottomLeftRadius="15px"
        name.style.color="white"
        capital.style.color="white"
        population.style.color="white"
        region.style.color="white"

        name.style.backgroundColor="black"
        capital.style.backgroundColor="black"
        population.style.backgroundColor="black"
        region.style.backgroundColor="black";

        function showDetailss() {
            console.log("hi")
            let imageDisplay = document.getElementById("imgg");
            let contentDisplay = document.getElementById("content");
            imageDisplay.src = source;
            contentDisplay.innerHTML = JSON.stringify(response[i].alter);
            openPopup();
        }
        image.onclick = () => {
            showDetailss();
        }




    }
}







function displayCard2(response,iteration) {
    let display = document.getElementById("display")
    display.innerHTML = ""
    let iteration1=(iteration-1)*25
    for (let i = iteration1; i <iteration1+25; i++) {
        let divContent = document.createElement("div");
        let image = document.createElement("img");
        let name = document.createElement("p");
        let source = (response[i].img_link);
        name.innerHTML = (response[i].img_name);

        image.width = 250;
        image.height = 200;
        image.src = source;
        image.style.margin = "40px 0px";
        divContent.appendChild(image);
        divContent.appendChild(name);



            let capital=document.createElement("p");
            let population=document.createElement("p");
            let region=document.createElement("p");
        if(response[i].capital){

            capital.innerHTML=response[i].capital;
        }
        else{
            capital.innerHTML="undefined";
        }
        population.innerHTML=response[i].population;
        region.innerHTML=response[i].region;
        divContent.appendChild(capital);
        divContent.appendChild(population);
        divContent.appendChild(region);
    
        display.appendChild(divContent);
        divContent.style.textAlign = "center";

        name.style.border="1px solid black"
        capital.style.border="1px solid black"
        population.style.border="1px solid black"
        region.style.border="1px solid black"

        divContent.style.border="none"
        divContent.style.borderRadius="15px"
        divContent.style.backgroundColor="rgba(201, 201, 201, 0.483)"
        region.style.borderBottomRightRadius="15px"
        region.style.borderBottomLeftRadius="15px"
        name.style.color="white"
        capital.style.color="white"
        population.style.color="white"
        region.style.color="white"

        name.style.backgroundColor="black"
        capital.style.backgroundColor="black"
        population.style.backgroundColor="black"
        region.style.backgroundColor="black";

        function showDetailss() {
            console.log("hi")
            let imageDisplay = document.getElementById("imgg");
            let contentDisplay = document.getElementById("content");
            imageDisplay.src = source;
            contentDisplay.innerHTML = JSON.stringify(response[i].alter);
            openPopup();
        }
        image.onclick = () => {
            showDetailss();


        }




    }
}

function pageNo(startValue,endValue){
    let foot=document.getElementById("footer")
    foot.innerHTML="";
    let pre=document.createElement("input");
    pre.setAttribute("type","submit")
    pre.setAttribute("value","prev")
    pre.setAttribute("id","previous");


    let next=document.createElement("input");

    foot.appendChild(pre)
    for(let i=startValue;i<=endValue;i++){
    let btn=document.createElement("input");
    btn.setAttribute("type","submit")
    btn.setAttribute("value",`${i}`);
    btn.setAttribute("id","btnn")

    pre.onclick=()=>{
    
        previ();
    }

    next.onclick=()=>{
        nextt();
    }



    btn.onclick=()=>{
        displayCard2(arr,i)


        document.querySelector('#sortSelect').addEventListener("change", function(event) {
            event.preventDefault();
            console.log("hiiii")
        
            let sortSelect=document.getElementById("sortSelect").value;
            switch(sortSelect){
                case 'nameAsc':
                    ascending(arr,i)
                    break;
                case 'nameDesc':
                    descending(arr,i)
                    break;
                case 'populationAsc':
                    ascPop(arr,i)
                    break;
                case 'populationDesc':
                    desPop(arr,i)
                    break;
            }
        })


        

    }


    foot.appendChild(btn)
    }
    next.setAttribute("type","submit")
    next.setAttribute("value","next")
    next.setAttribute("id","next");
    foot.appendChild(next)


    function previ(){
        if(startValue!==1){
        startValue=startValue-1
        endValue=endValue-1
        pageNo(startValue,endValue)
        curr=curr-25
        stopp=stopp-25
        }
        else {

            document.getElementById("previous").disabled=true;
        }
       

            
    }
    function nextt(){
        if(endValue!==10){
            startValue=startValue+1
        endValue=endValue+1
        pageNo(startValue,endValue)
        curr=curr+25
        stopp=stopp+25

        }
        else {
            document.getElementById("next").disabled=true;
        }
        
        
    }
    

    
}



// class tracker{
//     constructor(){
//         this.objarr=[];
//         this.count = 0;
//     }
//     addEvent(title,date,location){
//         let obj={
//             title,
//             date,
//             location
//         }
//         this.objarr.push(obj)
//         this.count++
//     }
//     displayEvent(){
//         this.objarr.forEach((item)=>{
//             console.log(`title:${item.title}`)
//             console.log(`date:${item.date}`)
//             console.log(`location:${item.location}`)
//         })
//     }
//     filterItems(start,end){
//        return this.objarr.filter((elements)=>{
//             return( (elements.date >= start)&&(elements.date<=end))
//         })
//     }
//     displayCount(){
//         return this.count
//     }
// }

// let event = new tracker()
// event.addEvent("meeting1", "2023-06-21", "Trichy");
// event.addEvent("meeting2", "2023-06-22", "Salem");
// event.addEvent("meetings", "2023-06-23", "Lalgudi");

// event.displayEvent()

// console.log("---");

// let filterData =  event.filterItems("2023-06-21","2023-06-22");
//    filterData.forEach((element)=>{
//         console.log(`title:${element.title}`)
//         console.log(`date:${element.date}`)
//         console.log(`location:${element.location}`)
// });
// let numberItems = event.displayCount()
// console.log("display count:"+numberItems)