setInterval(function trocaCorFundo(){
    var fundo = document.getElementById("superiorPerfilUser")
    const cor = (Math.random()*0xFFFFFF<<0).toString(16);
    fundo.style.transition = "0.3s"
    fundo.style.backgroundImage = `linear-gradient(to top,#222425, #${cor})`
}, 6000);
var todosUsuarios = usuariosBack();
function carregaAmigosPerfil(){
    var localAmigosPerfil = document.getElementById("localUsersPc")
    for(var i = 0; i < usuarioAtual[0].amigos.length; i++){
        localAmigosPerfil.innerHTML += `
        <div class="divAmigoLocalPerfil">
            <img class="imgFotoUserPerfilAmigo" src="${usuarioAtual[0].amigos[i].fotoUsuario}" alt="">
            <h1 class="apelidoUserPerfilAmigo">${usuarioAtual[0].amigos[i].principais.apelido}</h1>    
        </div>`
    }
}
carregaAmigosPerfil()
function fotoCapaPerfilAtual(){
    var localFotoPerfil = document.getElementById("imgFotoUserPerfilCapa")
    if(usuarioAtual[0].fotoCapa == ""){
        localFotoPerfil.innerHTML = `<img class="imgCapaPerfilUser" src="https://www.showmetech.com.br/wp-content/uploads//2017/01/outrun_wallpaper__10_-2017-01-25-0516.jpg" onclick="trocarFotoUserCapa()" alt="" title="clique aqui para trocar a foto de perfil">`
    }else{
         localFotoPerfil.innerHTML = `<img class="imgCapaPerfilUser" src="${usuarioAtual[0].fotoCapa}" onclick="trocarFotoUserCapa()" alt="" title="clique aqui para trocar a foto de perfil">`
    }
}
fotoCapaPerfilAtual()
function fotoPerfilAtual(){
    var localFotoPerfil = document.getElementById("imgFotoUserPerfil")
    localFotoPerfil.innerHTML = `<img class="imgFotoUserPerfil" src="${usuarioAtual[0].fotoUsuario}" onclick="trocarFotoUser()" alt="" title="clique aqui para trocar a foto de perfil">`
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
function carregaBiografia(){
    var localAddBiografia = document.getElementById("localAddBiografia")
    if(usuarioAtual[0].biografia == ""){
        localAddBiografia.innerHTML = `<h3 class="textBiografia" onclick="trocaBiografia()">Adicionar biografia</h3>`
    }else{
        localAddBiografia.innerHTML = `<h3 class="textBiografia" onclick="trocaBiografia()">${usuarioAtual[0].biografia}</h3>`
    }
}
carregaBiografia()
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

    usuarioAtual[0].biografia = inputColocaBiografia
    for(var i = 0; i < todosUsuarios.length; i++){
        if(todosUsuarios[i].principais.id == usuarioAtual[0].id){
            todosUsuarios[i].visuais.biografia = inputColocaBiografia
            break
        }
    }
    localAddBiografia.innerHTML = `<h3 class="textBiografia" onclick="trocaBiografia()">${inputColocaBiografia}</h3>`
    mandarUsuarioBack(todosUsuarios)
    mandaUsuarioLogadoBack(usuarioAtual)

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
    var todosUsuarios = usuariosBack();
    var inputLinkFoto = document.getElementById("inputLinkNovaFoto").value
    var localFoto = document.getElementById("imgFotoUserPerfil")

    if(inputLinkFoto == ""){
        alert("Insina uma nova foto, não deixe vazio")
    }
    usuarioAtual[0].fotoUsuario = inputLinkFoto
    for(var i = 0; i < todosUsuarios.length; i++){
        if(todosUsuarios[i].principais.id == usuarioAtual[0].id){
            todosUsuarios[i].visuais.fotoUsuario = inputLinkFoto
            break
        }
    }
    localFoto.innerHTML = `<img class="imgFotoUserPerfil" onclick="trocarFotoUser()" src="${inputLinkFoto}" alt="">`
    mandarUsuarioBack(todosUsuarios)
    mandaUsuarioLogadoBack(usuarioAtual)
    window.location.href = "../pages/perfilUser.html"
    fechaNovaFoto()
}
function trocarFotoUserCapa(){
    var divInsereLinkCapa = document.getElementById("caixaInsereLinkNovaFotoUserCapa")
    var fundoFalso =  document.getElementById("fundo-falso")
    
    divInsereLinkCapa.style.display = "block"
    divInsereLinkCapa.style.marginTop = "200px"
    fundoFalso.style.marginTop = "-24.1%"
    divInsereLinkCapa.style.transition = "1s"
}
function fechaNovaFotoCapa(){
    var divInsereLinkCapa = document.getElementById("caixaInsereLinkNovaFotoUserCapa")
    var fundoFalso =  document.getElementById("fundo-falso")
    
    divInsereLinkCapa.style.display = "none"
    divInsereLinkCapa.style.marginTop = "0px"
    fundoFalso.style.marginTop = "0"
    divInsereLinkCapa.style.transition = "1s"
}
function confirmaNovaFotoCapa(){
    var todosUsuarios = usuariosBack();
    var inputLinkFotoCapa = document.getElementById("inputLinkNovaFotoCapa").value
    var localFotoCapa = document.getElementById("imgFotoUserPerfilCapa")

    if(inputLinkFotoCapa == ""){
        alert("Insina uma nova foto de capa, não deixe vazio")
    }
    usuarioAtual[0].fotoCapa = inputLinkFotoCapa
    for(var i = 0; i < todosUsuarios.length; i++){
        if(todosUsuarios[i].principais.id == usuarioAtual[0].id){
            todosUsuarios[i].visuais.fotoCapa = inputLinkFotoCapa
            break
        }
    }
    localFotoCapa.innerHTML = `<img class="imgFotoUserPerfilCapa" onclick="trocarFotoUser()" src="${inputLinkFotoCapa}" alt="">`
    mandarUsuarioBack(todosUsuarios)
    mandaUsuarioLogadoBack(usuarioAtual)
    window.location.href = "../pages/perfilUser.html"
    fechaNovaFoto()
}
function apareceApresentacoes(){
    localApareceApresentacoes = document.getElementById("contentDivApresentacao")
    localApareceApresentacoes.innerHTML = `
    <div class="ajustaIntensContentApresentacao">
        <div class="iconeSecaoDivApresentacao">
            <img class="imgIconeSecaoDivApresentacao" src="../assets/img-icon-name.png" alt="">
        </div>
        <div class="mensagemSecaoDivaApresentacao">
            <h3 class="textMensagemSecaoDivApresentacao">Nome: ${usuarioAtual[0].nome} ${usuarioAtual[0].sobrenome}</h3>
        </div>
    </div>
    `
}
apareceApresentacoes()
function carregaFotosUser(){
    var localFotosUser = document.getElementById("localImagesUser")
    if(usuarioAtual[0].fotoCapa == ""){
        localFotosUser.innerHTML += `
        <div class="ajustaImagemUser">
            <img class="imgImagemUser" src="https://www.showmetech.com.br/wp-content/uploads//2017/01/outrun_wallpaper__10_-2017-01-25-0516.jpg" alt="">
        </div>
        `
    }else{
        localFotosUser.innerHTML += `
        <div class="ajustaImagemUser">
            <img class="imgImagemUser" src="${usuarioAtual[0].fotoCapa}" alt="">
        </div>
        `
    }
    localFotosUser.innerHTML += `
    <div class="ajustaImagemUser">
        <img class="imgImagemUser" src="${usuarioAtual[0].fotoUsuario}" alt="">
    </div>
    `
    for(var i = 0; i <  usuarioAtual[0].imagensUsuario.length; i++){
        localFotosUser.innerHTML += `
        <div class="ajustaImagemUser">
            <img class="imgImagemUser" src="${usuarioAtual[0].imagensUsuario[i].linkImage}" alt="" >
        </div>
        `

    }
}
carregaFotosUser()
