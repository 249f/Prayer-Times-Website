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