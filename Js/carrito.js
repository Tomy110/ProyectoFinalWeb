

function crearElementoCarrito(img, nombre, descripcion, precio, index) {
    let contImg = `<div class="ImaCar"><img src="..${img.substring(31, img.length)}"></div>`;
    let contData = `<div class="data-cont"><h2>${nombre}</h2><p>${descripcion}</p><h3>${precio}</h3><button onclick="eliminarDelCarrito(this, ${index})">Eliminar</button></div>"`
    let cont = document.createElement("div");
    
    cont.classList.add("coteiner-e-carrito");

    cont.innerHTML = contImg + contData;
    
    return cont
}


function eliminarDelCarrito(element, indice) {
    let card = element.parentElement.parentElement;
    card.remove();

    let array = JSON.parse(localStorage.getItem("Carrito"));
    
    localStorage.removeItem("Carrito");

    for (let i = 0; i < array.length; i++) {
        const producto= array[i];
        
        if (producto["indice"] == indice) {
            array.splice(i, 1)
        }

    }

    let total = 0;
    
    for (let i = 0; i < array.length; i++) {
        const producto = array[i];
        total = total + parseFloat(producto.precio.substring(1, producto.precio.length));
        
    }

    let btnTotal = document.getElementById("btnTotal");

    btnTotal.textContent = `$${total}`;
    
    localStorage.setItem("Carrito", JSON.stringify(array));
}

let carrito = JSON.parse(localStorage.getItem("Carrito"));

localStorage.removeItem("Carrito");

let contCarrito = document.querySelector(".section-carrito")

let btnTotal = document.getElementsByTagName("button")[0];

let newCarrito = []
let total = 0;


for (let i = 0; i < carrito.length; i++) {
    const producto = carrito[i];

    producto["indice"] = i;

    newCarrito.push(producto);
    
    let elementoCarrito = crearElementoCarrito(producto.img, producto.nombre, producto.desc, producto.precio, i);
    
    contCarrito.appendChild(elementoCarrito);
    
    total = total + parseFloat(producto.precio.substring(1, producto.precio.length));
    
}

localStorage.setItem("Carrito", JSON.stringify(newCarrito));

btnTotal.textContent = `$${total}`;

