// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

const emptyDiv = document.createElement("div");
document.body.appendChild(emptyDiv);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divWithP = document.createElement("div");
const paragraph = document.createElement("p");
divWithP.appendChild(paragraph);
document.body.appendChild(divWithP);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un BUCLE con javascript.

const divWithParagraphs = document.createElement("div");
for (let i = 0; i < 6; i++) {
  const paragraphs = document.createElement("p");
  divWithParagraphs.appendChild(paragraphs);
}

document.body.appendChild(divWithParagraphs);

// 1.4 Inserta dinámicamente con JavaScript en un HTML un párrafo con el texto 'Soy dinámico!':

const dynamicParagraph = document.createElement("p");
dynamicParagraph.textContent = 'Soy dinámico!';

document.body.appendChild(dynamicParagraph);


// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub':

const h2Element = document.querySelector('.fn-insert-here');
h2Element.textContent = 'Wubba Lubba dub dub';


// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ulElement = document.createElement("ul");

apps.forEach(app => {

  const liElements = document.createElement("li");
  liElements.textContent = app;

  ulElement.appendChild(liElements);

})

document.body.appendChild(ulElement);


// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me:

const ElementsRemove = document.querySelectorAll('.fn-remove-me');

ElementsRemove.forEach(Element => Element.parentNode.removeChild(Element));

// 1.8 Inserta un párrafo con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild:

const middelParagraph = document.createElement("p");
middelParagraph.textContent = 'Voy en medio!';
const firstDiv = document.querySelector('#div1');

firstDiv.parentNode.insertBefore(middelParagraph, firstDiv.nextSibling);

// 1.9 Inserta párrafos con el texto 'Voy dentro!' dentro de todos los div con la clase .fn-insert-here:

const divWithClass = document.querySelectorAll('.fn-insert-here');
divWithClass.forEach(div => {
  const inParagraph = document.createElement("p");
  inParagraph.textContent = 'Voy dentro !';
  div.appendChild(inParagraph);
})

