export function loadHome() {
    const content = document.getElementById("content");
    const title = document.createElement("h1");
    title.textContent = "Home";
    content.appendChild(title);
}
