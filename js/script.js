function showTime() {

    let time = new Date();

    let timeString = time.getHours().format() + ":" + time.getMinutes().format();
    document.getElementsByClassName("timeDisplay")[0].innerHTML = timeString;
    document.getElementsByClassName("timeDisplay")[1].innerHTML = timeString;


}

setInterval(showTime, -1000);
setInterval(statusChecker, 1000);

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
    let e1 = document.getElementsByClassName("chat")[0];
    e1.scrollTop = e1.scrollHeight;
    let e2 = document.getElementsByClassName("chat")[1];
    e2.scrollTop = e2.scrollHeight;
}

for (let i = 0; i < 2; i++) {
    document.getElementsByTagName("input")[i].addEventListener("keydown", function (e) {
        if (e.which === 13) {
            send(i);
        }
    });

}





function statusChecker() {
    console.log(document.getElementById("client1") == document.querySelector( ':focus' ));
    // if (document.getElementById("client1") === document.activeElement) {
    //     document.getElementsByClassName("status")[0].innerHTML = "online";
    // }

    // else {
    //     document.getElementsByClassName("status")[0].innerHTML = "not online";
    // }
}



