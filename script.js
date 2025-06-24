let saisi = document.getElementById("entreListe");
let liste = document.getElementById("lists");
let clic = document.getElementById("addBtn");
let tab = [];

addTask = () => {
    if (saisi) {
        let enter = document.createElement("li");
        enter.textContent = saisi;
        liste.appendChild(enter);
        // saisi.value = "";
    }
}


clic.addEventListener("click", ()=>{
    addTask();
})




function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }