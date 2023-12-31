// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const createUl = document.createElement("ul");

countries.forEach(countrie => {

  const createLi = document.createElement("li");
  createLi.textContent = countrie;
  createUl.appendChild(createLi);
})

document.body.appendChild(createUl);


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elementRemove = document.querySelector('.fn-remove-me');
if (elementRemove) {
  elementRemove.parentElement.removeChild(elementRemove);
}

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHereDiv = document.querySelector('[data-function="printHere"]');
const ulElement = document.createElement("ul");

cars.forEach(car => {
  const liElement = document.createElement("li");
  liElement.textContent = car;
  ulElement.appendChild(liElement);
});

printHereDiv.appendChild(ulElement);


// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
// const countries = [
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
// ];

const countriesData = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

countriesData.forEach(country => {
  const divElement = document.createElement('div');
  const h4Element = document.createElement('h4');
  const imgElement = document.createElement('img');

  h4Element.textContent = country.title;
  imgElement.src = country.imgUrl;

  divElement.appendChild(h4Element);
  divElement.appendChild(imgElement);

  document.body.appendChild(divElement);
});


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.

const deleteLastElementButton = document.createElement('button');
deleteLastElementButton.textContent = 'Eliminar Último Elemento';
deleteLastElementButton.addEventListener('click', () => {
  const divElements = document.querySelectorAll('div');
  const lastDivElement = divElements[divElements.length - 1];
  if (lastDivElement) {
    lastDivElement.parentNode.removeChild(lastDivElement);
  }
});

document.body.appendChild(deleteLastElementButton);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.

const divs = document.querySelectorAll('div');

divs.forEach((div, index) => {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = `Eliminar Elemento ${index + 1}`;
  deleteButton.addEventListener('click', () => {
    div.parentNode.removeChild(div);
  });
  div.appendChild(deleteButton);
});