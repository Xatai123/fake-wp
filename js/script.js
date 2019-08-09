function showTime() {

    let time = new Date();

    let timeString = time.getHours().format() + ":" + time.getMinutes().format();
    document.getElementsByClassName("timeDisplay")[0].innerHTML = timeString;
    // document.getElementsByClassName("timeDisplay")[1].innerHTML = timeString;


}

setInterval(showTime, -1000);


Number.prototype.format = function () {
    return this / 10 < 1 ? "0" + this : "" + this;
}


function send() {
    let time = new Date();
    let timeString = time.getHours().format() + ":" + time.getMinutes().format();
    let text = document.getElementsByTagName("input")[0].value;
    document.getElementsByTagName("input")[0].value = "";
    document.getElementsByClassName("chat")[0].innerHTML += '<div class="response"><p>' + text + '</p><h5>' + timeString + ' <i class="fas fa-check"></i></h5></div>'
}
