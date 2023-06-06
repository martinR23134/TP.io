const close = document.querySelector("#close"),
menu = document.querySelector("#menu");
close.addEventListener("click", (e) => {

menu.classList.toggle("active");
document.body.classList.toggle("opacity");});


// Slider imagenes

let slideBtnLeft = document.getElementById("slider-btn-left")
let slideBtnRight= document.getElementById("slider-btn-right")
let imgItem = document.querySelectorAll(".imagen-item")

console.log(imgItem.length-1)

let startSlider = 0
let endSlider = (imgItem.length - 1) * 100 // 700

slideBtnLeft.addEventListener("click",()=>{
  if(startSlider < 0){
    startSlider = startSlider + 100
  }
  imgItem.forEach(element =>{
    element.style.transform = `translateX(${startSlider}%)`;
  })
})

slideBtnRight.addEventListener("click",()=>{
  if(startSlider >= -endSlider+100){
    startSlider = startSlider - 100;
  }
  imgItem.forEach(element =>{
    element.style.transform = `translateX(${startSlider}%)`;
  })

})

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
    let arrowParent = e.target.parentElement.parentElement;
    console.log(arrowParent);
    arrowParent.classList.toggle("showMenu");
    });    
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);


/* formulario de contacto  */

const elemento = document.getElementById('miElemento');
const boton = document.getElementById('miBoton');


let visible = true;

boton.addEventListener('click', function() {
  if (visible) {
    elemento.style.display = 'none';  
  } else {
    elemento.style.display = 'block'; 
  }
  
  visible = !visible; 
});


 



// API carousel 


  const container = document.querySelector(".container");
const URL = "https://fakestoreapi.com/products";
let arr = [];




const fetchData = (URL) => {
  if (arr.length === 0) {
    container.innerHTML = "Loading...";
  }
  fetch(URL)
    .then((response) => response.json())
    .then((data) => displayData(data));
};
fetchData(URL);


const displayData = (data) => {
  arr.push(data);
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "No item :(";
  }

  data.forEach((each) => {
    let box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
    <img src=${each.image} alt="">
    <p id="title">${each.title.substring(0, 60) + "..."}</p>
    `;
    container.appendChild(box);
  });
};



