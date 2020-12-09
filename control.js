function validar() {
    var usuario, clave;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;
    expresion = /\w+@\w+\.+[a-z]/;

    if(usuario === "" || clave === "") {
        alert("Ambos campos son obligatorios");
        return false;
    }
    else if(!expresion.test(usuario)) {
        alert("El usuario no tiene un formato válido de mail");
        return false;
    }
}
