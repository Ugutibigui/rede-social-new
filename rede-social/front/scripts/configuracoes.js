let usuarioLogado = usuarioLogadoBack()
let allUsers = usuariosBack();
function irPageInicial(){
    window.location = "../pages/principal.html"
}
var apelidoConfig = document.getElementById("subleTitleInfo")
var nomeUserConfig = document.getElementById("subleTitleInfo2")
var sobrenomeUserConfig = document.getElementById("subleTitleInfoSobrenome")
var contato1UserConfig = document.getElementById("subleTitleContato")

function modificaConfigsNames(){
    if(usuarioLogado[0].apelido == ""){
        apelidoConfig.innerText = `Vazio`  
    }else{
        apelidoConfig.innerText = `${usuarioLogado[0].apelido}`
    }
    if(usuarioLogado[0].nome == ""){
        nomeUserConfig.innerText = `Vazio`  
    }else{
        nomeUserConfig.innerText = `${usuarioLogado[0].nome}`
    }
    if(usuarioLogado[0].sobrenome == ""){
        sobrenomeUserConfig.innerText = `Vazio`
    }else{
        sobrenomeUserConfig.innerText = `${usuarioLogado[0].sobrenome}`
    }
    
}
modificaConfigsNames()

function editarApelidoFake(){
    apelidoConfig.innerHTML = `<div class="alinha-input-muda-config"><input class="input-muda-config" id="input-muda-config-apelido" placeholder="${usuarioLogado[0].apelido}"></input><button class="button-confirma-muda-config" onclick="mudaApelido()">Confirmar</button></div>`
}
async function mudaApelido(){
    var inputTrocaApelido = document.getElementById("input-muda-config-apelido").value
    if(inputTrocaApelido == ""){
        alert("Por favor escreva algo")
    }

    for(var i = 0; i < allUsers.length; i++){
        if(allUsers[i].principais.id !== usuarioLogado[0].id){
            if(allUsers[i].principais.apelido === inputTrocaApelido){
                alert("Este apelido já está em uso, use a imaginação")
                return
            }
        }
    }

    for(var i = 0; i < allUsers.length; i++){
        if(allUsers[i].principais.id == usuarioLogado[0].id){
            allUsers[i].principais.apelido = inputTrocaApelido
            break
        }
    }

    usuarioLogado[0].apelido = inputTrocaApelido
    
    let myHeaders = new Headers({
        "Content-Type": "application/json",
      });
              let retorno = await fetch("http://localhost:8000/cria-usuario-banco/",{
                  method: "POST",
                  headers: myHeaders,
                  body: JSON.stringify({
                    nome: inputTrocaApelido
                    }) 
              })
              let meusDados = await retorno.json()
              console.log(meusDados)

    
    mandarUsuarioBack(allUsers)
    mandaUsuarioLogadoBack(usuarioLogado)
    window.location.href = "../pages/configuracoes.html"
    apelidoConfig.innerHTML = `<div class="subleTitleInfo" id="subleTitleInfo">${usuarioLogado[0].apelido}</div>`
}
function editarNomeFake(){
    nomeUserConfig.innerHTML = `<div class="alinha-input-muda-config"><input class="input-muda-config" id="input-muda-config-nome" placeholder="${usuarioLogado[0].nome}"></input><button class="button-confirma-muda-config" onclick="mudaNome()">Confirmar</button></div>`
}
function mudaNome(){
    var inputMudaNome = document.getElementById("input-muda-config-nome").value
    if(inputMudaNome == ""){
        alert("Insina um novo nome, não deixe vazio")
    }
    usuarioLogado[0].nome = inputMudaNome
    for(var i = 0; i < allUsers.length; i++){
        if(allUsers[i].principais.id == usuarioLogado[0].id){
            allUsers[i].visuais.nomeUsuario = inputMudaNome
            break
        }
    }
    nomeUserConfig.innerHTML = `<div class="subleTitleInfo" id="subleTitleInfo">${usuarioLogado[0].nome}</div>`
    mandarUsuarioBack(allUsers)
    mandaUsuarioLogadoBack(usuarioLogado)
}
function editarSobrenomeFake(){
    sobrenomeUserConfig.innerHTML = `<div class="alinha-input-muda-config"><input class="input-muda-config" id="input-muda-config-sobrenome" placeholder="${usuarioLogado[0].sobrenome}" "></input><button class="button-confirma-muda-config" onclick="mudaSobrenome()">Confirmar</button></div>`
}
function mudaSobrenome(){
    var inputMudaSobrenome = document.getElementById("input-muda-config-sobrenome").value
    if(inputMudaSobrenome == ""){
        alert("Insina um novo nome, não deixe vazio")
    }
    usuarioLogado[0].sobrenome = inputMudaSobrenome
    for(var i = 0; i < allUsers.length; i++){
        if(allUsers[i].principais.id == usuarioLogado[0].id){
            allUsers[i].visuais.sobrenome = inputMudaSobrenome
            break
        }
    }
    sobrenomeUserConfig.innerHTML = `<div class="subleTitleInfo" id="subleTitleInfo">${usuarioLogado[0].sobrenome}</div>`
    mandarUsuarioBack(allUsers)
    mandaUsuarioLogadoBack(usuarioLogado)
}
function editarContatoFake(){
    contato1UserConfig.innerHTML = `<div class="alinha-input-muda-config"><input class="input-muda-config" placeholder="vazio"></input><button class="button-confirma-muda-config">Confirmar</button></div>`
}