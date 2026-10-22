function getTimes(){
    axios.get("https://api.aladhan.com/v1/timings/01-01-2025?latitude=45&longitude=4")
    .then(response => {
        let times = response.data.data.timings
        console.log(times);
    })

}
getTimes()