const title = document.createElement("h1")
title.innerText = "Title";
console.log(title);

document.body.appendChild(title);

// crear un h1 para pintarlo en el html

const image = document.createElement("img");
image.src = "https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
image.alt = "sky full Stars"

console.log(image);

document.body.appendChild(image);

// crear una imagen para pintarla en el código HTML

const div = document.createElement("div");
const content = "Este es el contenido"
div.innerHTML = `<p>${content}</p>`;

document.body.appendChild(div);

image.classList.add("byw");
image.classList.remove("byw");
image.classList.toggle("byw")
// toggle la añade o la quita (la clase) si la tiene o no.

console.log(Image.classList.contains("byw"));