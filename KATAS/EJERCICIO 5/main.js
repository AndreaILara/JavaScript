// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
// que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const CreateList = document.createElement("ul");

albums.forEach(album => {
  const createLi = document.createElement("li");
  createLi.textContent = album;
  CreateList.appendChild(createLi);
})

document.body.appendChild(CreateList);

