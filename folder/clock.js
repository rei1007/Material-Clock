//ページ読み込み時に基準値をセット
window.onload = function() {
    window.localStorage.setItem("bg-color", "transparent");
    window.localStorage.setItem("bg-state", "bg-trans");
    const cascade = ["time-container-bg", "date-color", "date-bg", "live-color", "time-color", "time-bg"];
    const color = ["#fff", "#fff", "#000", "#000", "#000", "#e0e0e0"];
    for (let i = 0; i < cascade.length; i++) {
        window.localStorage.setItem(cascade[i], color[i]);
    }
    window.localStorage.setItem("color-theme", "default-box");
    window.localStorage.setItem("font-family", '"Kosugi Maru", sans-serif');
    window.localStorage.setItem("font-theme", "kosugi-box")
}

//時計
function showClock() {
    let now = new Date();
    let month = now.getMonth();
    let date = now.getDate();
    let monthndate = month + "/" + date;
    let days = ["(日)", "(月)", "(火)", "(水)", "(木)", "(金)", "(土)"]
    let day = now.getDay();
    let dayJapan = days[day]
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let showHour = ("0" + hour).slice(-2)
    let showMin = ("0" + min).slice(-2)
    let clock = showHour + ":" + showMin;
    document.getElementById("date").innerHTML = monthndate;
    document.getElementById("day").innerHTML = dayJapan;
    document.getElementById("time").innerHTML = clock;
}
setInterval('showClock()', 1000);

//背景のON・OFF切替
function changeBg() {
    let bgColor = window.localStorage.getItem("bg-color");
    document.documentElement.style.setProperty("--bg-color", bgColor)
}
setInterval('changeBg()', 1000);

//時計のテーマ切替
function changeColor() {
    let timeContainerBg = window.localStorage.getItem("time-container-bg");
    document.documentElement.style.setProperty("--time-container-bg", timeContainerBg)
    let dateColor = window.localStorage.getItem("date-color");
    document.documentElement.style.setProperty("--date-color", dateColor)
    let dateBg = window.localStorage.getItem("date-bg");
    document.documentElement.style.setProperty("--date-bg", dateBg)
    let liveColor = window.localStorage.getItem("live-color");
    document.documentElement.style.setProperty("--live-color", liveColor)
    let timeColor = window.localStorage.getItem("time-color");
    document.documentElement.style.setProperty("--time-color", timeColor)
    let timeBg = window.localStorage.getItem("time-bg");
    document.documentElement.style.setProperty("--time-bg", timeBg)
}
setInterval('changeColor()', 1000);

//時計のフォント切替
function changeFont() {
    let fontFamily = window.localStorage.getItem("font-family");
    document.documentElement.style.setProperty("--font-family", fontFamily)
}
setInterval('changeFont()', 1000);

//コントロールパネル
function panelClose() {
    document.getElementById("control").style.display = 'none'
    document.getElementById("panel-close").style.display = 'none'
    document.getElementById("panel-open").style.display = 'block'
}
function panelOpen() {
    document.getElementById("control").style.display = 'block'
    document.getElementById("panel-close").style.display = 'block'
    document.getElementById("panel-open").style.display = 'none'
}