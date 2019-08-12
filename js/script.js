
//Show Time on Top Left Corner
function showTime() {
    let time = new Date();

    let timeString = time.getHours().format() + ":" + time.getMinutes().format();
    let clocks = document.getElementsByClassName("timeDisplay");
    clocks[0].innerHTML = timeString;
    clocks[1].innerHTML = timeString;


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

    document.getElementsByClassName("chat")[i].appendChild(construct(true, text, timeString))
    k = i === 0 ? 1 : 0;
    document.getElementsByClassName("chat")[k].appendChild(construct(false, text, timeString))

    updateScroll();
}


// constructs new message to send
function construct(boo, text, time) {

    let div = document.createElement("div");

    if (boo) {
        div.classList.add("message");
    } else {
        div.classList.add("response");
    }

    let p = document.createElement("p");
    p.innerText = text;
    div.appendChild(p);

    let button = document.createElement("button");
    button.classList.add("delete");
    button.setAttribute("onclick", "deleteButton(this)");

    button.innerHTML += '<i class="fas fa-chevron-down"></i>';

    let ul = document.createElement("ul");

    let li1 = document.createElement("li");
    li1.innerText = "Delete for me";
    li1.setAttribute("onclick", "deleteForMe(this)");
    ul.appendChild(li1);

    if (boo) {
        let li2 = document.createElement("li");
        li2.innerText = "Delete for everyone";
        li2.setAttribute("onclick", "deleteForEveryone(this)");
        ul.appendChild(li2);
    }

    button.appendChild(ul);

    div.appendChild(button);

    h5 = document.createElement("h5");
    h5.innerHTML = time + ' <i class="fas fa-check"></i>';
    div.appendChild(h5);

    return div;
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
    e.childNodes[1].classList.toggle("d-block");
}

function deleteForMe(e) {
    let elem = e.parentElement.parentElement.parentElement;
    elem.classList.toggle("d-none");
}

function deleteForEveryone(e) {
    let elem = e.parentElement.parentElement.parentElement;
    let index = elem.parentElement.childNodes.indexOf(elem);
    let chat = document.getElementsByClassName("chat");
    for (let i = 0; i < chat.length; i++) {
        let k = chat[i].childNodes[index];
        k.removeChild(k.firstChild);
        let p = document.createElement("p");
        p.innerHTML = "<strong style='color: grey'>This message is deleted</strong>";
        k.insertBefore(p, k.firstChild)
        let removed = k.childNodes[1].childNodes[1].childNodes[1];
        if (removed) {
            removed.parentElement.removeChild(removed);            
        }
    }
    
}

NodeList.prototype.indexOf = function (item) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == item) {
            return i;
        }
    }
}



