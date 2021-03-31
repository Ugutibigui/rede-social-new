let usuarioLogado = usuarioLogadoBack()
function irPageInicial(){
    window.location = "../pages/principal.html"
}
var apelidoConfig = document.getElementById("subleTitleInfo")
var nomeUserConfig = document.getElementById("subleTitleInfo2")
var sobrenomeUserConfig = document.getElementById("subleTitleInfoSobrenome")
var contato1UserConfig = document.getElementById("subleTitleContato")

function modificaConfigsNames(){
    apelidoConfig.innerText = `${usuarioLogado[0].apelido}`
    nomeUserConfig.innerText = `${usuarioLogado[0].nome}`
    sobrenomeUserConfig.innerText = `${usuarioLogado[0].sobrenome}`
}
modificaConfigsNames()

function editarApelidoFake(){
    apelidoConfig.innerHTML = `<div class="alinha-input-muda-config"><input class="input-muda-config" placeholder="${usuarioLogado[0].apelido}"></input><button class="button-confirma-muda-config">Confirmar</button></div>`
}
function editarNomeFake(){
    nomeUserConfig.innerHTML = `<div class="alinha-input-muda-config"><input class="input-muda-config" placeholder="${usuarioLogado[0].nome}"></input><button class="button-confirma-muda-config">Confirmar</button></div>`
}
function editarSobrenomeFake(){
    sobrenomeUserConfig.innerHTML = `<div class="alinha-input-muda-config"><input class="input-muda-config" placeholder="${usuarioLogado[0].sobrenome}"></input><button class="button-confirma-muda-config">Confirmar</button></div>`
}
function editarContatoFake(){
    contato1UserConfig.innerHTML = `<div class="alinha-input-muda-config"><input class="input-muda-config" placeholder="vazio"></input><button class="button-confirma-muda-config">Confirmar</button></div>`
}