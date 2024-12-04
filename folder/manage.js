//ページ読み込み時及び定期的に時計の状態を反映する
window.onload = function() {
    bgButtonChange();
    showThemeState();
    showFontState();
    changeFont();
}
function reflection() {
    bgButtonChange();
    showThemeState();
    showFontState();
    changeFont();
}
setInterval('reflection()', 1000);


//背景のON・OFF切替
function changeBg() {
    window.localStorage.setItem("bg-color", "#808080");
    window.localStorage.setItem("bg-state", "bg-gray");
    bgButtonChange();
}
function resetBg() {
    window.localStorage.setItem("bg-color", "transparent");
    window.localStorage.setItem("bg-state", "bg-trans");
    bgButtonChange();
}
//切替ボタン表示切替
function bgButtonChange() {
    let bgState = window.localStorage.getItem("bg-state");
    let bgOn = document.getElementById("bg-on");
    let bgOff = document.getElementById("bg-off");
    if (bgState === 'bg-gray') {
        bgOn.style.display = 'none';
        bgOff.style.display = 'block';
    } else if (bgState === 'bg-trans') {
        bgOn.style.display = 'block';
        bgOff.style.display = 'none';
    }
}

//時計のテーマ切替
function changeColorDefault() {
    const cascade = ["time-container-bg", "date-color", "date-bg", "live-color", "time-color", "time-bg"];
    const color = ["#fff", "#fff", "#000", "#000", "#000", "#e0e0e0"];
    for (let i = 0; i < cascade.length; i++) {
        window.localStorage.setItem(cascade[i], color[i]);
    }
    window.localStorage.setItem("color-theme", "default-box");
    showThemeState();
}
function changeColorBlue() {
    const cascade = ["time-container-bg", "date-color", "date-bg", "live-color", "time-color", "time-bg"];
    const color = ["#f7f9ff", "#fff", "#28638a", "#65587b", "#0c1d29", "#d3e5f6"];
    for (let i = 0; i < cascade.length; i++) {
        window.localStorage.setItem(cascade[i], color[i]);
    }
    window.localStorage.setItem("color-theme", "blue-box");
    showThemeState();
}
function changeColorPink() {
    const cascade = ["time-container-bg", "date-color", "date-bg", "live-color", "time-color", "time-bg"];
    const color = ["#fff8f8", "#fff", "#874b6c", "#7f543b", "#291520", "#fcd9e8"];
    for (let i = 0; i < cascade.length; i++) {
        window.localStorage.setItem(cascade[i], color[i]);
    }
    window.localStorage.setItem("color-theme", "pink-box");
    showThemeState();
}
function changeColorYellow() {
    const cascade = ["time-container-bg", "date-color", "date-bg", "live-color", "time-color", "time-bg"];
    const color = ["#fff9ee", "#fff", "#6e5d0e", "#2c4e38", "#211b04", "#eee2bc"];
    for (let i = 0; i < cascade.length; i++) {
        window.localStorage.setItem(cascade[i], color[i]);
    }
    window.localStorage.setItem("color-theme", "yellow-box");
    showThemeState();
}
//時計テーマ選択状態表示
function showThemeState() {
    const colorBox = document.getElementsByClassName("color-box");
    for (let i = 0; i < colorBox.length; i++) {
        colorBox[i].style.border = "none";
    }
    let nowTheme = window.localStorage.getItem("color-theme");
    let borderColor = window.localStorage.getItem("date-bg");
    document.getElementById(nowTheme).style.border = "solid 4px"
    document.getElementById(nowTheme).style.borderColor = borderColor
}


//時計のフォント切替
function changeKosugi() {
    window.localStorage.setItem("font-family", '"Kosugi Maru", sans-serif');
    window.localStorage.setItem("font-theme", "kosugi-box");
    showFontState();
    changeFont();
}
function changeMround() {
    window.localStorage.setItem("font-family", '"M PLUS Rounded 1c", sans-serif');
    window.localStorage.setItem("font-theme", "mround-box");
    showFontState();
    changeFont();
}
function changeKiwi() {
    window.localStorage.setItem("font-family", '"Kiwi Maru", sans-serif');
    window.localStorage.setItem("font-theme", "kiwi-box");
    showFontState();
    changeFont();
}
function changeNoto() {
    window.localStorage.setItem("font-family", '"Noto Sans JP", sans-serif');
    window.localStorage.setItem("font-theme", "noto-box");
    showFontState();
    changeFont();
}
//時計フォント選択状態表示
function showFontState() {
    const fontBox = document.getElementsByClassName("font-box");
    for (let i = 0; i < fontBox.length; i++) {
        fontBox[i].style.border = "none";
    }
    let nowFont = window.localStorage.getItem("font-theme");
    document.getElementById(nowFont).style.border = "solid 4px #000"
}