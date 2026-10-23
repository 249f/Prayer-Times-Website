let fajr = document.getElementById("fajr")
let shrook = document.getElementById("shrook")
let dhuhr = document.getElementById("dhuhr")
let asr = document.getElementById("asr")
let maghrib = document.getElementById("maghrib")
let isha = document.getElementById("isha")
let htmlnow = document.getElementById("html-now")
let currentCityTitle = document.getElementById("current-city")
let heroButton = document.getElementById("hero-main-btn")
let daySpan = document.getElementById("daySpan")
let citesHolder = document.getElementById("cites")



// get device local date

let deviceDate = new Date()
let options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
};
 let now = deviceDate.toLocaleDateString("en-GB",options).replace(/\//g,"-")

// #### get device local date

htmlnow.innerHTML = now

function getTimes(city,code,arCity){
    axios.get(`https://api.aladhan.com/v1/timingsByCity/${now}?city=${city}&country=${code}`)
    .then(response => {
        let times = response.data.data.timings
        let day = response.data.data.date.hijri.weekday.ar
        
        // update html cards
        fajr.innerHTML = times.Fajr
        shrook.innerHTML = times.Sunrise
        dhuhr.innerHTML = times.Dhuhr
        asr.innerHTML = times.Asr
        maghrib.innerHTML = times.Maghrib
        isha.innerHTML = times.Isha
        currentCityTitle.innerHTML = arCity
        daySpan.innerHTML = day
        // ## update html cards
        
    })
    scrollToTimes()
}

// scroll to the times cards
function scrollToTimes(){
scroll({
    top: 1200,
    behavior: "smooth"
})

}

heroButton.onclick = () => {
    scrollToTimes()
}

onload = () => {
    // get times for default city which is Khartoum
    getTimes("Khartoum","SD","الخرطوم")

    // scroll to the top of the page when reload
    scroll({
        top : 0,
        behavior: "smooth"
    })
}

let Cities = [
{ 
    arabicName : "السودان - الخرطوم",
    englishName : "Khartoum",
    country : "SD",
    imgLink : "https://upload.wikimedia.org/wikipedia/en/3/31/Hotel_in_Khartoum_%282007%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
},
{ 
    arabicName : "مصر - القاهرة",
    englishName : "Cairo",
    country : "EG",
    imgLink : "https://orionmagazine.org/wp-content/uploads/2015/09/8589130570139-dusk-camel-pyramids-cairo-egypt-top-travel-lists-wallpaper-hd.jpg"
},
{ 
    arabicName : "المملكة العربية السعودية - مكة المكرمة",
    englishName : "Makkah",
    country : "SA",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3S57DfIzbCYjo046FlXlzB7Vp1iPmihoTOIknJb4_HA&s=10"
},
{ 
    arabicName : "قطر - الدوحة",
    englishName : "Doha",
    country : "QA",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZi9gFXMB0bGIQdXuOpyUoacApQPANGumiKlhLdX3sNGyjMQGSGDETvZI&s=10"
},
{ 
    arabicName : "ألبانيا - تيرانا",
    englishName : "Tirana",
    country : "AL",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlGVfTmpzjMRnBWFXnkocGOeVzMYMtAoF5odaGWW1QQ&s=10"
},

]
function fillCitesDiv(){
    let content = ``
    for (city of Cities){
        content += `
            <div onclick="getTimes('${city.englishName}','${city.country}','${city.arabicName}')">
            <div id="img-wrapper">
            <img src="${city.imgLink}" alt="${city.englishName} image">
            </div>
            <h2>${city.arabicName}</h2>
        </div>
        `
    }
    citesHolder.innerHTML = content
  
}
fillCitesDiv()
