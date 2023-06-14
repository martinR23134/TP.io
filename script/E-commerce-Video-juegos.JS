const inputQuantity = document.querySelector('.input-quantity')
const btnIncrement = document.querySelector('#increment')
const btnDecrement = document.querySelector('#decrement')

let valueByDefault = parseInt(inputQuantity.value)

btnIncrement.addEventListener('click', () => {
    valueByDefault += 1
    inputQuantity.value = valueByDefault 
})

btnDecrement.addEventListener('click', () => {
    if (valueByDefault === 1){
        return
    }
    valueByDefault -= 1
    inputQuantity.value = valueByDefault 
})


/* formulario de contacto  */

const elemento = document.getElementById('miElemento');
const boton2 = document.getElementById('form-open');


const boton = document.getElementById('miBoton');


let visible = false;

boton.addEventListener('click', function() {
  if (visible) {
    elemento.style.display = 'none';  
  } else {
    elemento.style.display = 'block'; 
  }
  
  visible = !visible; 
});

boton2.addEventListener('click', function() {
  if (visible) {
    elemento.style.display = 'none';  
  } else {
    elemento.style.display = 'block'; 
  }
  
  visible = !visible; 
});

/* formulario de contacto 2  */

const formulario = document.getElementById('miElemento2');
const botonCerrar = document.getElementById('miElemento3');
const botonMostrar = document.getElementById('miBoton2');
let formularioVisible = false;

function toggleFormulario() {
  formulario.style.display = formularioVisible ? 'none' : 'block';
  formularioVisible = !formularioVisible;
}

botonCerrar.addEventListener('click', function() {
  formulario.style.display = 'none';
  formularioVisible = false;
});

botonMostrar.addEventListener('click', toggleFormulario);
