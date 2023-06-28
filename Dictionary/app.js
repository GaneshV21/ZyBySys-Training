// window.addEventListener("click",(event)=>{
//     event.preventDefault();
//     let submit=document.getElementById("submit")
//     if(event.target===submit){
//     alert("hi");
//     }
//     
    
// })

function fetchData(){
   


    let data=document.getElementById("Search").value
    let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${data}`
     fetch(url).then((response)=>response.json()).then((res) =>{
    console.log(res)
        


            let heading=document.getElementById("heading")
        heading.innerHTML=res[0].word;
        let phonetic=document.getElementById("phonetic")
        phonetic.innerHTML=res[0].phonetics[1].text;
        console.log(res)


        let part_0=document.getElementById("part_0")

        let parts_of_speech_0=document.getElementById("part_0")
        parts_of_speech_0.innerHTML=res[0].meanings[0].partOfSpeech
        let dash0=document.createElement("p")
        dash0.setAttribute("class","hhrr")
        
        part_0.appendChild(dash0)



        let meaning=document.getElementById("head11")
        meaning.innerHTML=""
        
        let ulMeaning=document.createElement("ul");

        for(let i=0;i<(res[0].meanings[0].definitions.length);i++){
            let liHeading=document.createElement("li");
        
        liHeading.innerHTML=res[0].meanings[0].definitions[i].definition;
        ulMeaning.appendChild(liHeading)
        meaning.appendChild(ulMeaning)

        }




        

        let syn_meaning=document.getElementById("syn-meaning");
        syn_meaning.innerHTML=""
        let synName=document.getElementById("headd");
        synName.innerHTML="Synonyms"
        syn_meaning.innerHTML=res[0].meanings[0].synonyms;
        
        let part_1=document.getElementById("part_1")
        let parts_of_speech_1=document.getElementById("part_1")
        parts_of_speech_1.innerHTML=res[0].meanings[1].partOfSpeech
        let dash1=document.createElement("p")
        dash1.setAttribute("class","hhrrr")
        part_1.appendChild(dash1)



        let meaning1=document.getElementById("head22")
        meaning1.innerHTML=""
        // let meaningName1=document.getElementById("head2");
        // meaningName1.innerHTML="Meaning"
        let mean_ulMeaning=document.createElement("ul");
        for(let i=0;i<res[0].meanings[1].definitions.length;i++){
            let mean_liHeading1=document.createElement("li")
            mean_liHeading1.innerHTML=res[0].meanings[1].definitions[i].definition;

            mean_ulMeaning.appendChild(mean_liHeading1)

            if(res[0].meanings[1].definitions[i].example){
            let mean_example=document.createElement("p")
            mean_example.setAttribute("id","meanExample")
            mean_example.innerHTML=`"${res[0].meanings[1].definitions[i].example}"`

            mean_ulMeaning.appendChild(mean_example)
            }




            meaning1.appendChild(mean_ulMeaning);
        }
        let breakTag=document.createElement("hr")
        meaning1.appendChild(breakTag)


        let source=document.getElementById("source")
        source.innerHTML="source"
        let link=document.getElementById("linkk");
        link.innerHTML=res[0].sourceUrls;
        link.setAttribute("href",res[0].sourceUrls)
        link.setAttribute("target","_blank")
        let aud=document.getElementById("aud")
        aud.addEventListener("click",(event)=>{
            event.preventDefault();
            let audioSrc =new Audio();
            for (let i = 0; i < res[0].phonetics.length; i++) {
                audioSrc.src =res[0].phonetics[i].audio
                audioSrc.play()
            }

        })



    let mean=document.getElementById("mean")
    let mean1=document.getElementById("mean1")
    let audio=document.getElementById("aud")
    mean.style.display="block"
    mean1.style.display="block"
    audio.style.display="block"
  
})


}


let form=document.getElementById("myForm")
form.addEventListener("submit",(event)=>
{
    event.preventDefault();
    setTimeout(()=>{
        fetchData();
    // let mean=document.getElementById("mean")
    // let mean1=document.getElementById("mean1")
    // let audio=document.getElementById("aud")
    // mean.style.display="block"
    // mean1.style.display="block"
    // audio.style.display="block"
    
    },2000)
    


})


let btn1=document.getElementById("btn_1")
let btn2=document.getElementById("btn_2")
let main=document.getElementById("main")
let dropdown=document.getElementById("dropdown")
let selectopt=document.getElementById("selectopt")
let headerlast=document.getElementById("header-last")

btn1.addEventListener("click",(event)=>{
    event.preventDefault();
    // search.style.backgroundColor="gray"
    document.body.style.backgroundColor="black"
    btn1.style.backgroundColor="grey"
    btn2.style.backgroundColor="white"
    main.style.color="white"
    dropdown.style.color="white"
    selectopt.style.backgroundColor="black"
    selectopt.style.color="white"
    headerlast.style.borderLeft="1px solid white"





})

btn2.addEventListener("click",(event)=>{
    event.preventDefault();
    document.body.style.backgroundColor="white"
    btn1.style.backgroundColor="white"
    btn2.style.backgroundColor="grey"
    main.style.color="black"
    dropdown.style.color="black"
    selectopt.style.backgroundColor="white"
    selectopt.style.color="black"
    headerlast.style.borderLeft="1px solid black"

})

