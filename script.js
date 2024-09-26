const body = document.querySelector("body");
const btn = document.querySelector("button");

document.addEventListener("click", toggleTitle);
btn.addEventListener("click", toggleLight);

function toggleLight(e) {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    btn.classList.toggle('good-night');  // Optional: Button-Styling ändern
}

function toggleTitle(e) {
    if (document.title === "Good Morning") {
        document.title = "Good Night";
    } else {
        document.title = "Good Morning";
    }
}
