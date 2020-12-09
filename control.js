function validar() {
    var usuario, clave;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;
    expresion = /\w+@\w+\.+[a-z]/;

    if(usuario === "" || clave === "") {
        alert("Ambos campos están vacios y son obligatorios");
        return false;
    }
    else if(!expresion.test(usuario)) {
        alert("Falta el arroba en el usuario y no tiene un formato válido el usuario");
        return false;
    }
}
