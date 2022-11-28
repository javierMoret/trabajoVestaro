

var username;

function irContactos(){
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    username = username.toLowerCase();
    username = username.replace(/\s+/g, '')
    console.log(password);
    if(password=="1234" && (username=="javiermoret" || username=="albertofernandez" || username=="franciscoromero")){
        window.location.href = "catalogo.html";

    }else{
        alert("Usuario o contraseña no válido.");
    }
}

var nombrePerfil = document.getElementById("perfil");
console.log(username2);
switch(username2){
    case "javiermoret":
        nombrePerfil.innerHTML = "Javier Moret";
        break;
    case "albertofernandez":
        nombrePerfil.innerHTML = "Alberto Fernández";
        break;
    case "franciscoromero":
        nombrePerfil.innerHTML = "Francisco Romero";
        break;
    default:
        nombrePerfil.innerHTML = username;
}


