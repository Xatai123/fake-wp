function showTime() {

    let time = new Date();

    let timeString = time.getHours().format() + ":" + time.getMinutes().format();
    document.getElementsByClassName("timeDisplay")[0].innerHTML = timeString;
    document.getElementsByClassName("timeDisplay")[1].innerHTML = timeString;


}

setInterval(showTime, -1000);


Number.prototype.format = function () {
    return this / 10 < 1 ? "0" + this : "" + this;
}


function send(i) {
    let time = new Date();
    let timeString = time.getHours().format() + ":" + time.getMinutes().format();
    let text = document.getElementsByTagName("input")[i].value;
    if (text === "")
        return;
    document.getElementsByTagName("input")[i].value = "";
    document.getElementsByClassName("chat")[i].innerHTML += '<div class="message"><p>' + text + '</p><h5>' + timeString + ' <i class="fas fa-check"></i></h5></div>'
    k = i === 0 ? 1 : 0;
    document.getElementsByClassName("chat")[k].innerHTML += '<div class="response"><p>' + text + '</p><h5>' + timeString + ' <i class="fas fa-check"></i></h5></div>'
    updateScroll();
}


function updateScroll() {
    var element = document.getElementsByClassName("chat")[0];
    element.scrollTop = element.scrollHeight;
    var element = document.getElementsByClassName("chat")[1];
    element.scrollTop = element.scrollHeight;
}
