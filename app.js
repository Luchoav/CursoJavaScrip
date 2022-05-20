function saludar (){
    let nombreusuario= prompt("Ingresar Nombre");
    let apellidousuario= prompt("Ingresar apellido");
    alert("Hola " + nombreusuario + " "+apellidousuario+","+" bienvenido");
   
}

const bienvenida = [
    saludar()
]

let texto = document.createElement("h3")
texto.innerHTML="<h3>Hola ${nombreusuario} ${apellidousuario}!! Bienvenido a tu formulario</h3>";
document.body.append (texto);



