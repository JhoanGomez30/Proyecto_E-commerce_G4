const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", (e)=>{
    
    e.preventDefault();
    
    const formulario = document.getElementById("loginForm");
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
    const Users= JSON.parse(localStorage.getItem("users")) || [];
    const validUser= Users.find(user => user.email === email && user.password === password);

    if(!validUser){
        return Swal.fire({
            title: "Error",
            text: "Usuario invalido. Por favor, verifica los campos del formulario.",
            icon: "error",
            confirmButtonText: "Aceptar",
        });
    }

    Swal.fire({
        title: "Inicio de sesion",
        text: "Has Iniciado sesion exitosamente.",
        icon: "success"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "productos.html";
        }
    });

})