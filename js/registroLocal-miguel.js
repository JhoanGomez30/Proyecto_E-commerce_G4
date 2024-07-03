export function registroLocal(){

const signupForm=document.querySelector("#formulario");


signupForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name= document.querySelector("#name").value;
    const telefono= document.querySelector("#tel").value;
    const email= document.querySelector("#email").value;
    const password= document.querySelector("#password").value;
    const confirmPassword= document.querySelector("#confirmPassword").value;

    const Users= JSON.parse(localStorage.getItem("users")) || [];
    const isUserRegistered= Users.find(user => user.email===email);
    if(isUserRegistered){
        return alert("el usuario ya está registrado");
    }

    Users.push({name: name, telefono: telefono, email: email, password:password, confirmPassword: confirmPassword });

    localStorage.setItem('users', JSON.stringify(Users));
    
    //--SWIFT ALERT NATALIA-------//
    // Swal.fire({
    //     title: "Registro exitoso!",
    //     text: "Te has registrado exitosamente.",
    //     icon: "success",
    //     timer:3000,
    //     confirmButtonText: "Aceptar"

    // });
    // setTimeout(()=>{
    //      window.location.href="inicioSesion.html";

    // },5000);

    // alert("registrado, irás a la pagina de inicio de sesion")

    //Redireccion al login

    // window.location.href="inicioSesion.html";

    // Swal.fire({
    //     icon: 'success',
    //     title: 'Registro exitoso',
    //     text: '¡Ahora puedes iniciar sesión!',
    //     confirmButtonText: 'Ir al inicio de sesión'
    //   }).then(() => {
    //     // Redirigir al usuario al inicio de sesión
    //     window.location.href = 'inicioSesion.html'; // Reemplaza con la URL de tu página de inicio de sesión
    //   });
});

}