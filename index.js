// Criei um botão "FECHAR" e fixei ele em cada item da Lista
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Coloquei para quando clicar no botão "FECHAR", ele ocultar o item da Lista atual
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    };
}

// Adicionei um símbolo de ✔️ ai clicar em um item da Lista
var list = document.querySelector("ul");
list.addEventListener(
    "click",
    function (ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
        }
    },
    false
);

// Criei um novo item da Lista ao clicar no botão "ADICIONAR" e salvando as novas atividades
function newElement() {
    var li = document.createElement("li");
    li.setAttribute("class", "selfLi");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === "") {
        alert("Você precisa colocar uma Atividade na LISTA!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }

    function saveEdits() {
        localStorage.clear();
        var elements = document.querySelectorAll(".selfLi");
        var taskList = [];
        for (var i = elements.length - 1; i >= 0; i--) {
            taskList.push(elements[i].innerHTML.split("<span ")[0]);
        }
        var editElems = {
            edit1: taskList,
        };
        localStorage.setItem("userEdits", JSON.stringify(editElems));
    }

    setTimeout(() => {
        saveEdits();
    }, 1000);
}

// Carregando itens salvos no LocalStorage
window.onload = function () {
    if (localStorage.getItem("userEdits")) {
        JSON.parse(localStorage.getItem("userEdits"))["edit1"].forEach(
            (index) => {
                var topened = document.getElementById("myUL");
                var li = document.createElement("li");
                li.setAttribute("class", "selfLi");
                var t = document.createTextNode(index);
                li.appendChild(t);
                topened.appendChild(li);

                var span = document.createElement("SPAN");
                var txt = document.createTextNode("\u00D7");
                span.className = "close";
                span.appendChild(txt);
                li.appendChild(span);

                for (i = 0; i < close.length; i++) {
                    close[i].onclick = function () {
                        var div = this.parentElement;
                        div.style.display = "none";
                    };
                }
            }
        );
    }
};
