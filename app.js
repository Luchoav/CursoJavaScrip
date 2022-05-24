
let bienvenido = document.getElementById("dinamico")
bienvenido.innerText="Bienvenido,"
let promptnombre = prompt("Ingresa tu nombre");
let promptapellido = prompt("Ingresa tu apellido");
if(!promptnombre){
    prompt("Ingresa tu nombre");
}else{
    bienvenido.innerHTML = "Hola "+promptnombre+" " +promptapellido+"!"+" Bienvenido a tu formulario!!!"
};

const boton = document.querySelector(".btn-warning");

boton.addEventListener("click",nombre);

function nombre(){
    const ingresonombre = document.getElementById("inputNombre");
    localStorage.setItem("nombre", ingresonombre.value);

    const ingresoapellido = document.getElementById("inputApellido");
    localStorage.setItem("apellido", ingresoapellido.value);
}
