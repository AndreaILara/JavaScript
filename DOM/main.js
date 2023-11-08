const title = document.body.getElementsByTagName("h1");
console.log(title)
console.log(title.parentElement)
// const title =document.querySelector ES EL SELECTOR UNIVERSAL, querySelector (". (SE USA PARA CLASES)")
// querySelector("#") Se usa para id
// querySelector ("h1") por etiqueta
const divP = document.querySelector("div > p")
const allDivP = document.querySelectorAll("div > p")

const div = document.querySelector("paragraphdiv");
console.log(div.childNodes);