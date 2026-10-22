let fajr = document.getElementById("fajr")
let shrook = document.getElementById("shrook")
let dhuhr = document.getElementById("dhuhr")
let asr = document.getElementById("asr")
let maghrib = document.getElementById("maghrib")
let isha = document.getElementById("isha")
let htmlnow = document.getElementById("html-now")
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

function getTimes(city,code){
    axios.get(`https://api.aladhan.com/v1/timingsByCity/${now}?city=${city}&country=${code}`)
    .then(response => {
        let times = response.data.data.timings

        // update html cards
        fajr.innerHTML = times.Fajr
        shrook.innerHTML = times.Sunrise
        dhuhr.innerHTML = times.Dhuhr
        asr.innerHTML = times.Asr
        maghrib.innerHTML = times.Maghrib
        isha.innerHTML = times.Isha
        // ## update html cards
        
    })

}
getTimes("Khartoum","SD")


