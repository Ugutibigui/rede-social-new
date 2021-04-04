var amigoIdBack = chamaAmigoId()
var todosUsuarios = usuariosBack();
function fotoPerfilAtual() {
    var localFotoPerfil = document.getElementById("imgFotoUserPerfil")
    for (var i = 0; i < todosUsuarios.length; i++) {
        if (todosUsuarios[i].principais.id == amigoIdBack[0]) {
            localFotoPerfil.innerHTML = `<img class="imgFotoUserPerfil" src="${todosUsuarios[i].visuais.fotoUsuario}" alt="">`
        }
    }
}
fotoPerfilAtual()
function fotoCapaPerfilAtual() {
    var localFotoPerfil = document.getElementById("imgFotoUserPerfilCapa")

    for (var i = 0; i < todosUsuarios.length; i++) {
        if (todosUsuarios[i].principais.id == amigoIdBack[0]) {
            if (todosUsuarios[i].visuais.fotoCapa == "") {
                localFotoPerfil.innerHTML = `<img class="imgCapaPerfilUser" src="https://www.showmetech.com.br/wp-content/uploads//2017/01/outrun_wallpaper__10_-2017-01-25-0516.jpg" alt="">`
            } else {
                localFotoPerfil.innerHTML = `<img class="imgCapaPerfilUser" src="${todosUsuarios[i].visuais.fotoCapa}" alt="">`
            }
        }
    }
}
fotoCapaPerfilAtual()
function carregaNomeAmigoPerfil() {
    var localNomeAmigoPerfil = document.getElementById("textApelidoPerfilUser")
    for (var i = 0; i < todosUsuarios.length; i++) {
        if (todosUsuarios[i].principais.id == amigoIdBack[0]) {
            localNomeAmigoPerfil.innerText = todosUsuarios[i].principais.apelido
        }
    }
}
carregaNomeAmigoPerfil()
function carregaBiografia() {
    var localAddBiografia = document.getElementById("localAddBiografia")

    for (var i = 0; i < todosUsuarios.length; i++) {
        if (todosUsuarios[i].principais.id == amigoIdBack[0]) {
            if (todosUsuarios[i].visuais.biografia == "") {
                localAddBiografia.innerHTML = `<h3 class="textBiografia"></h3>`
            } else {
                localAddBiografia.innerHTML = `<h3 class="textBiografia">${todosUsuarios[i].visuais.biografia}</h3>`
            }
        }
    }
}
carregaBiografia()
function apareceApresentacoes() {
    localApareceApresentacoes = document.getElementById("contentDivApresentacao")

    for (var i = 0; i < todosUsuarios.length; i++) {
        if (todosUsuarios[i].principais.id == amigoIdBack[0]) {
            localApareceApresentacoes.innerHTML = `
            <div class="ajustaIntensContentApresentacao">
                <div class="iconeSecaoDivApresentacao">
                    <img class="imgIconeSecaoDivApresentacao" src="../assets/img-icon-name.png" alt="">
                </div>
                <div class="mensagemSecaoDivaApresentacao">
                    <h3 class="textMensagemSecaoDivApresentacao">Nome: ${todosUsuarios[i].visuais.nomeUsuario} ${todosUsuarios[i].visuais.sobrenome}</h3>
                </div>
            </div>
            `
        }
    }


}
apareceApresentacoes()
function carregaAmigosPerfil() {
    var localAmigosPerfil = document.getElementById("localUsersPc")

    for (var i = 0; i < todosUsuarios.length; i++) {
        if (todosUsuarios[i].principais.id == amigoIdBack[0]) {
            for (var a = 0; a < todosUsuarios[i].visuais.amigos.length; a++) {
                localAmigosPerfil.innerHTML += `
                <div class="divAmigoLocalPerfil">
                    <img class="imgFotoUserPerfilAmigo" src="${todosUsuarios[i].visuais.amigos[a].fotoUsuario}" alt="">
                    <h1 class="apelidoUserPerfilAmigo">${todosUsuarios[i].visuais.amigos[a].principais.apelido}</h1>    
                </div>`
            }
        }
    }


}
carregaAmigosPerfil()
function carregaFotosUser() {
    var localFotosUser = document.getElementById("localImagesUser")
    localFotosUser.innerHTML = ""
    for (i = 0; i < todosUsuarios.length; i++) {
        if (todosUsuarios[i].principais.id == amigoIdBack[0]) {
            if (todosUsuarios[i].visuais.fotoCapa == "") {
                localFotosUser.innerHTML += `
            <div class="ajustaImagemUser">
                <img class="imgImagemUser" src="https://www.showmetech.com.br/wp-content/uploads//2017/01/outrun_wallpaper__10_-2017-01-25-0516.jpg" alt="">
            </div>
            `
            } else {
                localFotosUser.innerHTML += `
            <div class="ajustaImagemUser">
                <img class="imgImagemUser" src="${todosUsuarios[i].visuais.fotoCapa}" alt="">
            </div>
            `
            }
            localFotosUser.innerHTML += `
        <div class="ajustaImagemUser">
            <img class="imgImagemUser" src="${todosUsuarios[i].visuais.fotoUsuario}" alt="">
        </div>
        `
            for (var f = 0; f < todosUsuarios[i].visuais.imagensUsuario.length; f++) {
                localFotosUser.innerHTML += `
            <div class="ajustaImagemUser">
                <img class="imgImagemUser" src="${todosUsuarios[i].visuais.imagensUsuario[f].linkImage}" alt="">
            </div>
            `

            }
        }
    }


}
carregaFotosUser()