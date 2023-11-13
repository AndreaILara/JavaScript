const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

function generateList() {
  var divElement = document.querySelector('[data-function="printHere"]');
  var ulElement = document.createElement("ul");

  places.forEach(function (place) {
    var liElement = document.createElement("li");
    liElement.textContent = place;
    ulElement.appendChild(liElement);
  });

  divElement.appendChild(ulElement);
}

generateList();
