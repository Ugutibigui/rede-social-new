setInterval(function trocaCorFundo(){
    var fundo = document.getElementById("superiorPerfilUser")
    const cor = (Math.random()*0xFFFFFF<<0).toString(16);
    fundo.style.transition = "0.3s"
    fundo.style.backgroundImage = `linear-gradient(to top,#222425, #${cor})`
}, 6000);
function fotoPerfilAtual(){
    var localFotoPerfil = document.getElementById("imgFotoUserPerfil")
    localFotoPerfil.innerHTML = `<img class="imgFotoUserPerfil" src="${usuarioAtual[0].fotoUsuario}" alt="">`
}
fotoPerfilAtual()
function trocaFotoPerfilPub(){
    var localFotoPublicar = document.getElementById("div-foto-perfil-content-pubs")
    localFotoPublicar.innerHTML = `<img class="img-div-foto-perfil-content-pubs" src="${usuarioAtual[0].fotoUsuario}" alt="">`
}
trocaFotoPerfilPub()
function trocaNomePage(){
    var apelidoPrincipal = document.getElementById("textApelidoPerfilUser")
    var apelidoPubPerfil = document.getElementById("text-dentro-input-falso-content-pubs")
    apelidoPrincipal.innerText = `${usuarioAtual[0].apelido}`
    apelidoPubPerfil.innerText = `No que você está pensando hoje, ${usuarioAtual[0].apelido}?`
}
trocaNomePage()

function trocaBiografia(){
    var localAddBiografia = document.getElementById("localAddBiografia")
    localAddBiografia.innerHTML = `<input class="inputColocaBiografia" id="inputColocaBiografia" placeholder="Escreva aqui"><button class="buttonConfirmaBiografia" onclick="trocandoTextBiografia()">Pronto</button>`
}
function trocandoTextBiografia(){
    var localAddBiografia = document.getElementById("localAddBiografia")
    var inputColocaBiografia = document.getElementById("inputColocaBiografia").value
    if(inputColocaBiografia == ""){
        localAddBiografia.innerHTML = `<h3 class="textBiografia" onclick="trocaBiografia()">Adicionar biografia</h3>`  
    }else{
        localAddBiografia.innerHTML = `<h3 class="textBiografia" onclick="trocaBiografia()">${inputColocaBiografia}</h3>`
    }
}

function trocarFotoUser(){
    var divInsereLink = document.getElementById("caixaInsereLinkNovaFotoUser")
    var fundoFalso =  document.getElementById("fundo-falso")
    
    divInsereLink.style.display = "block"
    divInsereLink.style.marginTop = "200px"
    fundoFalso.style.marginTop = "-24.1%"
    divInsereLink.style.transition = "1s"
}
function fechaNovaFoto(){
    var divInsereLink = document.getElementById("caixaInsereLinkNovaFotoUser")
    var fundoFalso =  document.getElementById("fundo-falso")
    
    divInsereLink.style.display = "none"
    divInsereLink.style.marginTop = "0px"
    fundoFalso.style.marginTop = "0"
    divInsereLink.style.transition = "1s"
}
function confirmaNovaFoto(){
    var inputLinkFoto = document.getElementById("inputLinkNovaFoto").value
    var localFoto = document.getElementById("imgFotoUserPerfil")
    localFoto.innerHTML = `<img class="imgFotoUserPerfil" onclick="trocarFotoUser()" src="${inputLinkFoto}" alt="">`

    fechaNovaFoto()
}
