const formulario = documet.getElementById ('formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target[0].value),
    console.log(e.target[1].value),
    console.log(e.target[2].value),
    console.log(e.target[3].value),
    console.log(e.target[4].value);
})