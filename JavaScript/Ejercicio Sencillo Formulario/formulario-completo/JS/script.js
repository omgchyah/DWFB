//declara y asignar variables del HTML
const artNomtInput = document.getElementById("nombre");
const artDesInput = document.getElementById("descripcion");
const artPreInput = document.getElementById("precio");
const artCanInput = document.getElementById("cantidad");
const artCatInput = document.getElementById("categoria");
const artSubmit = document.querySelector("form button");
const mensaje = document.getElementById("mensaje");
const tableTitle = document.querySelector("h3");

//tabla
const artTablaContenedor = document.getElementById("articulos-tabla");
const artTablaCuerpo = document.querySelector("#articulos-tabla tbody");

let arrayArticulos = []

function toggleTablaVisibility() {
  const hayArticulos = artTablaCuerpo.children.length > 0;

  artTablaContenedor.style.display = hayArticulos ? "table" : "none";
  tableTitle.style.display = hayArticulos ? "flex" : "none";
}

function agregarArticulo(nom, des, pre, can, cat) {
  //create elements
  const artNuevaFila = document.createElement("tr");


  const artNombre = document.createElement("td");
  const artDescripcion = document.createElement("td");
  const artPrecio = document.createElement("td");
  const artCantidad = document.createElement("td");
  const artCategoria = document.createElement("td");
  const artAcciones = document.createElement("td");

  //Agregar contenido dentro de  los elementos creados
  artNombre.textContent = nom;
  artDescripcion.textContent = des;
  artPrecio.textContent = parseFloat(pre).toFixed(2);
  artCantidad.textContent = parseInt(can);
  artCategoria.textContent = cat;

  //botón de eliminar
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar";
  deleteBtn.className = "btn-eliminar";

  deleteBtn.addEventListener("click", () => {
    artNuevaFila.remove();
    toggleTablaVisibility();
  });

  //agregar botón de borrar dentro de acciones
  artAcciones.appendChild(deleteBtn);

  //Agregar elementos dentro de la fila
  artNuevaFila.appendChild(artNombre);
  artNuevaFila.appendChild(artDescripcion);
  artNuevaFila.appendChild(artPrecio);
  artNuevaFila.appendChild(artCantidad);
  artNuevaFila.appendChild(artCategoria);
  artNuevaFila.appendChild(artAcciones);

  //agregar fila al cuerpo de la tabla
  artTablaCuerpo.appendChild(artNuevaFila);

  artNomtInput.value = "";
  artDesInput.value = "";
  artPreInput.value = "";
  artCanInput.value = "";
  artCatInput.value = "";

  //Agregar artículo a una variable nueva que se agrega al array
  let articuloNuevo = {
    nombre: nom,
    descripcion: des,
    precio: pre,
    cantidad: can,
    categoria: cat,
  };

  arrayArticulos.push(articuloNuevo);
  console.log(arrayArticulos);

}

toggleTablaVisibility()

artSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const nom = artNomtInput.value.trim();
  const des = artDesInput.value.trim();
  const pre = Number(artPreInput.value.trim());
  const can = Number(artCanInput.value.trim());
  const cat = artCatInput.value;

  if (nom.length < 3) {
    alert("Nombre muy corto.");
    return;
  }

  if (des.length < 5) {
    alert("Descripción muy corta.");
    return;
  }

  if (isNaN(pre) || pre <= 0) {
    alert("Introduzca un precio válido.")
    return;
  }

  if (!Number.isInteger(can) || can <= 0) {
    alert("Introduzca una cantidad mayor a cero.")
    return;
  }

  if (!cat) {
    alert("Debe seleccionar una categoría.");
    return;
  }

  agregarArticulo(nom, des, pre, can, cat);
  toggleTablaVisibility();

});