const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", (e)=>{
    console.log("funciona");
    alert("funciona");
    e.preventDefault();

    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;

    const Users= JSON.parse(localStorage.getItem("users")) || [];

    const validUser= Users.find(user => user.email === email && user.password === password);

    if(!validUser){
        return alert("Usuario y/o constraseña incorrectos!");
    }

    alert(`Bienvenido ${validUser.name}`);

    window.location.href="productos.html";
})