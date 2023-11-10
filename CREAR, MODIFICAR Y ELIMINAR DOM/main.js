const technologies = [
  "JavaScript",
  "CSS",
  "HTML",
  "React",
  "Angular",
  "Node.js"
]

const ul = document.createElement("ul");

// for (const tech of technologies) {
//   const li = document.createElement("li");
//   li.innerText = tech;

// }ESTO SERIA CON FOROF

for (let i = 0; i < technologies.length; i++) {
  const tech = technologies[i];
  const li = document.createElement("li");
  li.innerText = tech;
  ul.appendChild(li);
}

document.body.appendChild(ul);


const button = document.createElement("button");
button.innerText = "Theme";
button.addEventListener("click", () => {
  document.body.classList.toggle("light")
})

document.body.appendChild(button);

