// Carne - 400 gr por pessoa, 6hs ou mais = 650 gr
// Cerveja - 1200 ml por pessoa, 6hs ou mais = 2000 ml
// Refrigerante/ água - 1000 ml por pessoa, 6hs ou mais = 1500 ml
// Crianças calculamos 0,5



let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");



let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando...")

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let carne = carnePP(duracao);
    let cerveja = cervejaPP(duracao);
    let bebidas = bebidasPP(duracao);

    let qtdTotalCarne = carne * adultos + (carne / 2 * criancas);
    let qtdTotalCerveja = cerveja * adultos;
    let qtdTotalbebidas = bebidas * adultos + (bebidas / 2 * criancas);

    showResult()


    resultado.innerHTML = `<h2>Resultado</h2>`


    resultado.innerHTML += `<p>${qtdTotalCarne / 1000}kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas (355ml) de Cerveja</p>`
    resultado.innerHTML += `<p>${qtdTotalbebidas / 2000} Garrafas 2L de Bebida</p>`

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else { return 400 }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {

        return 2000
    } else { return 1200 }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else { return 1000 }
}


function showResult() {
    let result = document.getElementsByClassName("container-resultado")[0];
    result.style.visibility = "visible";
}