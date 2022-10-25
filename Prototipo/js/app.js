
function irContactos(){
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    username=username.toLowerCase();
    username = username.replace(/\s+/g, '')
    console.log(password);
    if(password=="1234" && (username=="javiermoret" || username=="albertofernandez")){
        window.location.href = "catalogo.html";
    }else{
        alert("Usuario o contraseña no válido.");
    }
}