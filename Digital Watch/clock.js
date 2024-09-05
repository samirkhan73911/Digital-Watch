
function clock() {
    const time = new Date();
    let hours = time.getHours().toString().padStart(2, 0)
    const mints = time.getMinutes().toString().padStart(2, 0)
    const seconds = time.getSeconds().toString().padStart(2, 0)
    const pmAm = (hours >= 12) ? "AM" : "PM"
    const timestring = `${hours}:${mints}:${seconds} ${pmAm}`
    document.getElementById("clock").textContent = timestring

}
// clock();
setInterval(clock, 1000)