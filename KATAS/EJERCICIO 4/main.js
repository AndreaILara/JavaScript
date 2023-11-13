// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

var btnToClick = document.getElementById('btnToClick');
var focusInput = document.querySelector('.focus');
var valueInput = document.querySelector('.value');

btnToClick.addEventListener('click', function (event) {
  console.log('Click event:', event);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

focusInput.addEventListener('focus', function (event) {
  console.log('Focus event - Input value:', event.target.value);
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

valueInput.addEventListener('input', function (event) {
  console.log('Input event - Input value:', event.target.value);
});
