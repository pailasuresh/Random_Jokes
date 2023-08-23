let para = document.getElementById("jokeText");
let butt = document.getElementById("jokeBtn");
let load = document.getElementById("spinner");
const laughEmote = "😂😂😂";


let options = {
    method: "GET"
};


function jokes() {
    load.classList.remove("d-none");
    para.classList.add("d-none");
    let url = "https://apis.ccbp.in/jokes/random";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            load.classList.add("d-none");
            para.classList.remove("d-none");
            para.textContent = jsonData.value + laughEmote;
        });
}
butt.addEventListener("click", jokes);