
//Show Time on Top Left Corner
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

// Send Message
function send(i) {
    let time = new Date();
    let timeString = time.getHours().format() + ":" + time.getMinutes().format();
    let text = document.getElementsByTagName("input")[i].value;
    if (text === "")
        return;
    document.getElementsByTagName("input")[i].value = "";
    let owner = '<li onclick="deleteForEveryone(this)">Delete for everyone</li>';
    let sendHtml1 = text
        + '</p><button class="delete" onclick="deleteButton(this)"> <i class="fas fa-chevron-down"></i> <ul><li onclick="deleteForMe(this)">Delete for me</li>';
    let sendHtml2 = '</ul> </button><h5>'
        + timeString
        + ' <i class="fas fa-check"></i></h5></div>';

    document.getElementsByClassName("chat")[i].innerHTML += '<div class="message"><p>' + sendHtml1 + owner + sendHtml2;
    k = i === 0 ? 1 : 0;
    document.getElementsByClassName("chat")[k].innerHTML += '<div class="response"><p>' + sendHtml1 + owner + sendHtml2;
    updateScroll();
}

// Send with Enter 
for (let i = 0; i < 2; i++) {
    document.getElementsByTagName("input")[i].addEventListener("keydown", function (e) {
        if (e.which === 13) {
            send(i);
        }
    });

}

// Scroll Bottom to See Latest Messages
function updateScroll() {
    let e1 = document.getElementsByClassName("chat")[0];
    e1.scrollTop = e1.scrollHeight;
    let e2 = document.getElementsByClassName("chat")[1];
    e2.scrollTop = e2.scrollHeight;
}


// Delete Message
function deleteButton(e) {
    e.childNodes[3].classList.toggle("d-block");
}

function deleteForMe(e) {
    var elem = e.parentElement.parentElement.parentElement;
    elem.classList.toggle("d-none");
}

function deleteForEveryone(e) {
    e.parentElement.classList.toggle("d-block");
    var elem = e.parentElement.parentElement.parentElement;
    let index = elem.parentElement.childNodes.indexOf(elem);
    let chat = document.getElementsByClassName("chat");
    for (let i = 0; i < chat.length; i++) {
        let k = chat[i].childNodes[index].innerHTML;
        chat[i].childNodes[index].innerHTML = k.substr(0, k.indexOf("<p>") + 3) + "<strong style='color: grey'>This message is deleted</strong>" + k.substr(k.indexOf("<", k.indexOf("</p>")));
    }
}

NodeList.prototype.indexOf = function (item) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == item) {
            return i;
        }
    }
}



