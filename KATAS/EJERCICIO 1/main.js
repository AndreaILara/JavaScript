const buttonWithClass = document.querySelector(".showme");
console.log(buttonWithClass);

const h1WithId = document.querySelector("#pillado");
console.log(h1WithId);

const allP = document.querySelectorAll("p");
console.log(allP);

const allPokemonClass = document.querySelectorAll(".pokemon");
console.log(allPokemonClass);


const elementsDataFunction = document.querySelectorAll('[data-function="testMe"]');
console.log(elementsDataFunction);

const thirdDataFunction = document.querySelectorAll('[data-function="testMe"]:nth-child(3)');
console.log(thirdDataFunction);