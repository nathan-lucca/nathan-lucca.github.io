/** @format */

// Criei um botão "FECHAR" e fixei ele em cada item da Lista
const myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Coloquei para quando clicar no botão "FECHAR", ele ocultar o item da Lista atual
const close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        const div = this.parentElement;
        div.style.display = "none";
    };
}

// Adicionei um símbolo de ✔️ ai clicar em um item da Lista
const list = document.querySelector("ul");
list.addEventListener(
    "click",
    function (ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
        }
    },
    false
);

// Criei um novo item da Lista ao clicar no botão "ADICIONAR" e salvando no "LOCAL STORAGE"
function newElement() {
    const li = document.createElement("li");
    li.setAttribute("class", "selfLi");
    const inputValue = document.getElementById("myInput").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === "") {
        alert("Você precisa colocar uma Atividade na LISTA!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            const div = this.parentElement;
            div.style.display = "none";
        };
    }

    function saveEdits() {
        localStorage.clear();
        const elements = document.querySelectorAll(".selfLi");
        let taskList = [];
        for (var i = elements.length - 1; i >= 0; i--) {
            taskList.push(elements[i].innerHTML.split("<span ")[0]);
        }
        let editElems = {
            edit1: taskList,
        };
        localStorage.setItem("userEdits", JSON.stringify(editElems));
    }
    setTimeout(() => {
        saveEdits();
    }, 1000);
}
