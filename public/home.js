fetch("http://127.0.1:3000/ttuser/upload")
.then((rep) => rep.json())
.then((data) => arr(data));
function arr(data) {
    console.log();
}

function xemVideo(url) {
    localStorage.setItem("url" , url)
    window.location.href = `xemPhim/?name=${url}`
}