

let space = false

let cont = 0;

/*let password = prompt("Introduce la clave para seguir es 0110")*/
 
/*if (password =="0110"){
    window.location.href="index.html";
} else{
    password !== password
    password == space
    password == cont
    alert("clave incorrecta")
    window.location.href="block.html";
}*/

const boton = document.querySelector(".btn-warning");
boton.addEventListener("click",block);

function block() {
    const ingresopassword = document.getElementById("inputPassword");
    localStorage.setItem("clave",ingresopassword.value);

    if (password =="0110"){
        window.location.href="index.html";
    } else{
        password !== password
        password == space
        password == cont
        alert("clave incorrecta")
        window.location.href="block.html";
    }

    
}