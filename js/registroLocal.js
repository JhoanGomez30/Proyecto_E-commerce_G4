const signupForm=document.querySelector("#signupForm");

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
    alert("Registro Exitoso!");

    //Redireccion al login

    window.location.href="inicioSesion.html";
})