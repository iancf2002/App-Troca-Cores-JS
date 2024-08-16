const body = document.getElementsByTagName("body")[0]

// função que vai mudar a cor de acordo com a tag referenciada(name)
function setColor(name) {
    body.style.backgroundColor = name;

}
//função da cor aleatória ao clicar no botão Aleatório.
function randomColor() {
    const yellow= Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue= Math.round(Math.random() * 255)

    const color = `rgb(${yellow}, ${blue}, ${green})`
    body.style.backgroundColor = color;
}

