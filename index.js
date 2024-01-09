var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var setaesquerda = window.document.getElementById("seta-esquerda")
var setadireita = window.document.getElementById("seta-direita")

function RolarParaDireita(){
    Leonardo.style = "display:none"
    Samantha.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex"
}

function RolarParaEsquerda(){
    Leonardo.style = "display:flex"
    Samantha.style = "display:none"
    setadireita.style = "display:flex"
    setaesquerda.style = "display:none"
}