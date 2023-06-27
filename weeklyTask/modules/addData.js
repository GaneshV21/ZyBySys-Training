export let i = 1;
export let arr = [];

// export const addData = () => {

//     let API_KEY = `c7a9299a3d8da1d910da08bcffb48a3b`;
//     let locationName = document.getElementById("countryName").value;
//     let url = `http://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${API_KEY}`

//     if (arr.includes(locationName) === false) {
//         arr.push(locationName)

//         fetch(url).then((response) => response.json()).then((response) => {
//             console.log(arr);


//             if (response.cod == 200) {
//                 let table = document.getElementById("myTable")
//                 let row = table.insertRow(-1);
//                 let S_no = row.insertCell(0);
//                 let countryName = row.insertCell(1);
//                 let action = row.insertCell(2);
//                 let action1 = row.insertCell(3);
//                 S_no.innerHTML = i++;
//                 countryName.innerHTML = document.getElementById("countryName").value;
//                 action.innerHTML =
//                     "<input type='submit' id='Show' value='show' >"
//                 action1.innerHTML = `<input type='submit' id='Delete' value='Delete' >`;
//                 action.addEventListener("click", function () {
//                     let API_KEY = `c7a9299a3d8da1d910da08bcffb48a3b`;
//                     let locationName = row.cells[1].innerHTML;
//                     let url = `http://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${API_KEY}`
//                     loader(true)
//                     fetch(url).then((response) => response.json()).then((response) => {
//                         loader(false)
//                         if (response.cod == 200) {
//                             console.log(response);
//                             let temperature = response.main.temp - 273.15

//                             let humidity = response.main.humidity

//                             let locName = response.name

//                             showPopup(temperature, humidity, locName)

//                         } else {
//                             alert("No Location found")
//                         }

//                     }).catch(error => {
//                         loader(false)
//                         alert(`API Error: ${error.message}`)
//                     });


//                 })

//                 action1.addEventListener("click", function () {
//                     row.remove(locationName);
//                     for (let i = arr.length - 1; i >= 0; i--) {
//                         if (arr[i] === locationName) {
//                             arr.splice(i, 1);
//                         }
//                     }


//                     for (let i = 1; i < table.rows.length; i++) {
//                         table.rows[i].cells[0].innerHTML = i
//                     }
//                     i--;
//                 })

//                 document.getElementById("countryName").value = "";



//             } else {
//                 alert("No Location found in Api")
//             }

//         }).catch(error => {
//             loader(false)
//             alert(`Input Error :S ${error.message}`)
//         });




//     }
//     else {
//         alert("already Exist");
//     }

// }

export const showPopup = (temp, hum, loc) => {
    let locationName = document.getElementById("location")
    let temperature = document.getElementById("temperature")
    let humidity = document.getElementById("humidity")

    locationName.innerHTML = loc
    temperature.innerHTML = `Temperature: ${temp.toFixed(2)}°C`
    humidity.innerHTML = `Humidity: ${hum}%`
    openPopup();

}
export const loader = (isLoading) => {
    let loaderData = document.getElementById("loader");

    if (isLoading) {
        loaderData.style.display = "block";
    } else {
        loaderData.style.display = "none";
    }

}
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

