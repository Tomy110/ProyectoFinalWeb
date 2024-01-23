
//Carrito

let carrito = document.getElementById("carrito");
let botones = document.querySelectorAll(".btn");

let productos = [];

for (let i = 0; i < botones.length; i++) {
    const boton = botones[i];

    boton.addEventListener("click", (e) => {
        e.preventDefault();


        //textCounter es para etiquetas y value es para formulario
        let producto = {
            img: boton.parentElement.previousElementSibling.src,
            nombre: boton.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent,
            desc: boton.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent,
            precio: boton.parentElement.parentElement.nextElementSibling.children[1].textContent
        }

        productos.push(producto);
        
        localStorage.setItem('Carrito', JSON.stringify(productos));
    })

}


//Carrusel principal
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(i){
    showSlides(slideIndex += i);
}

function currentSlide(i){
    showSlides(slideIndex = i);
}

function showSlides(i){
    var n;
    var slides = document.getElementsByClassName("mySlides");
    if (i > slides.length){ 
        slideIndex = 1 
    }
    if (i < 1){
        slideIndex = slides.length
    }
    for (n = 0; n < slides.length; n++){
        slides[n].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}