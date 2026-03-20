export function loadAbout() {
    const container = document.getElementById("content");
    const title = document.createElement("h2");
    title.textContent = "About";
    container.appendChild(title);
}
