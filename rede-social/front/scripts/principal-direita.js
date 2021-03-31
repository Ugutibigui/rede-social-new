function carregaNameUser(){
    var localName = document.getElementById("div-title-foto-option-esquerda")
    localName.innerText = `${usuarioAtual[0].apelido}`
}
carregaNameUser()
function irPageLoja(){
    window.location = "../pages/loja.html"
}
