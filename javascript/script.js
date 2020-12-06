let darkbutton = document.querySelector("#dark");
let cancelbutton = document.querySelector("#cancel");
let savebutton = document.querySelector("#save");
let newbutton = document.querySelector("#new");
let textbox = document.querySelector("#text");
let ul = document.querySelector("#notes");
let aside = document.querySelector("#aside");



function changetext() {
    if (darkbutton.innerText === "Dark Theme") { 
        darkbutton.innerText = "Light Theme";
        aside.style.color = 'white';
    } else {
        darkbutton.innerText = "Dark Theme";
        aside.style.color = 'black';
    }
}

darkbutton.addEventListener("click", changetext);

function changemode() {
    if (darkbutton.innerText === "Dark Theme") { 
        document.getElementById("aside").style.backgroundColor = "rgba(178, 181, 176, 1)";
        document.getElementById("textcontainer").style.backgroundColor = "rgba(237, 232, 237, 1)";
        document.getElementById("new").style.backgroundColor = "green";
        document.getElementById("dark").style.backgroundColor = "rgba(96, 96, 96, 1)";
        document.getElementById("save").style.backgroundColor = "green";
        document.getElementById("cancel").style.backgroundColor = "red";
        
    } else { //dark
        document.getElementById("aside").style.backgroundColor = "rgba(65, 68, 64, 1)";
        document.getElementById("textcontainer").style.backgroundColor = "rgba(131, 97, 131, 1)";
        document.getElementById("new").style.backgroundColor = "rgba(3, 72, 3, 1)";
        document.getElementById("dark").style.backgroundColor = "rgba(45, 45, 45, 1)";
        document.getElementById("save").style.backgroundColor = "rgba(3, 72, 3, 1)";
        document.getElementById("cancel").style.backgroundColor = "rgba(104, 2, 2, 1)";
    }
}

darkbutton.addEventListener("click", changemode);

function hide() {
    cancelbutton.style.display = "none";
    savebutton.style.display = "none";
    textbox.style.display = "none";
    
}

cancelbutton.addEventListener("click", hide);

function clear() {
    textbox.innerText = "";
    
}

newbutton.addEventListener("click", clear);

function show() {
    if (cancelbutton.style.display === "none" || savebutton.style.display === "none" || textbox.style.display === "none") {
        cancelbutton.style.display = "block";
        savebutton.style.display = "block";
        textbox.style.display = "block";
    } else {
        textbox.innerText = "";
    }
}

newbutton.addEventListener("click", show);

 
const notesArray = {
    note1 : {
        "title": "note one",
        "body": "some text 1"
    },
    note2 : {
        "title": "note two",
        "body": "some text 2"
    }};


let count = 2;

function save() {
    count += 1;
    let written = textbox.value;
    let title = written.slice(0,10);
    let body = written.slice(10);
    let note = `note${count}`;
    notesArray[note] = {"title": `${title}`, "body": `${body}`};

    let li = document.createElement("li");
    li.innerHTML = `${title}`;
    ul.appendChild(li);
    li.id = `note${count}`;
    li.addEventListener("click", links);
}

savebutton.addEventListener("click", save);


function links() {
    let id = this.id;
    textbox.value = notesArray[id]["title"] + notesArray[id]["body"];
}



