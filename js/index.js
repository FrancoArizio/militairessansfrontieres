const formulario = document.getElementById("formulario_log")

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();

    const logIn = {
        nombre: e.target[0].value,
        surename: e.target[1].value,
        edad: e.target[2].value,
    }
    if (logIn.edad < 18){
        errorLog.innerText = 'You are not over 18';
        return
    } 
    else {
        if(
            window.location.href.includes("militairessansfrontieres")

        ){
            window.location.href = "/militairessansfrontieres/main.html"
        }
        else{
            window.location.href = "/main.html"
        }
    }
});
