var amigoIdBack = chamaAmigoId()
var todosUsuarios = usuariosBack();
function carregaTodosPosts() {
    for (var i = 0; i < todosUsuarios.length; i++) {
        if (todosUsuarios[i].principais.id == amigoIdBack[0]) {
            var publicacoes = chamaPublicacoesBack()
            var caixaPubs = document.getElementById("area-pubs")
            caixaPubs.innerHTML = ""
            for (let a = 0; a < publicacoes.length; a++) {
                if (publicacoes[a].idUser == todosUsuarios[i].principais.id) {
                    if (publicacoes[a].tipoPub === "texto") {
                        caixaPubs.innerHTML += `<div class="div-publicacao-pronta">
            <div class="superior-pub-pronta">
                <div class="content-pub-pronta-superior">
                    <div class="foto-usuario-pub">
                        <img src="${publicacoes[a].fotoPerfil}" alt="" class="pic-foto-usuario-pub">
                    </div>
                    <div class="nome-data-pub">
                        <div class="nome-tipo-pub-user">
                        <h2 class="nome-user-pub">${publicacoes[a].nome}</h2>
                        <h4 class="tipoSelect">Publico</h4>
                        </div>
                        <h4 class="data-pub">${publicacoes[a].hora}h - ${publicacoes[a].data}</h4>
                    </div>
                    <div class="opcoes-pub">
                        <h2 class="text-icon-opcoes-pub">...</h2>
                    </div>
                </div>
            </div>
            <div class="inferior-pub-pronta">${publicacoes[a].conteudo}</div>
            <hr>
            <div class="interacoes-pub-pronta">
            <h2 class="quantidadeCurtidas">${publicacoes[a].curtidas.length}</h2>
                <div class="div-button-curtir , class-button-geral-pub-interacoes">
                    <div class="button-curtir" onclick="curtirPost(${publicacoes[a].id})">
                        <img src="../assets/img-icon-like.png" alt="" class="pic-icon-curtir">
                        <h3 class="text-curtir">Curtir</h3>
                    </div>
                </div>
                <div class="div-button-comentar , class-button-geral-pub-interacoes">
                    <div class="button-comentar">
                        <img src="../assets/img-icon-comentario.png" alt="" class="pic-icon-comentar">
                        <h3 class="text-comentar">Comentar</h3>
                    </div>
                </div>
            </div>
            </div>`
                        console.log("DEU TEXTO")
                    } else if (publicacoes[a].tipoPub === "video") {
                        caixaPubs.innerHTML += `<div class="div-publicacao-pronta">
            <div class="superior-pub-pronta">
                <div class="content-pub-pronta-superior">
                    <div class="foto-usuario-pub">
                        <img src="${publicacoes[a].fotoPerfil}" alt="" class="pic-foto-usuario-pub">
                    </div>
                    <div class="nome-data-pub">
                        <div class="nome-tipo-pub-user">
                        <h2 class="nome-user-pub">${publicacoes[a].nome}</h2>
                        <h4 class="tipoSelect">Publico</h4>
                        </div>
                        <h4 class="data-pub">${publicacoes[a].hora}h - ${publicacoes[a].data}</h4>
                    </div>
                    <div class="opcoes-pub">
                        <h2 class="text-icon-opcoes-pub">...</h2>
                    </div>
                </div>
            </div>
            <div class="inferior-pub-pronta">${publicacoes[a].conteudo}</div>
            <div class="inferior-pub-area-video">
                <video controls class="postagem-video , postagem-content">
                    <source src="${publicacoes[i].linkDoConteudo}" type="video/mp4"></source>
                </video>
            </div>
            <hr>
            <div class="interacoes-pub-pronta">
            <h2 class="quantidadeCurtidas">${publicacoes[a].curtidas.length}</h2>
                <div class="div-button-curtir , class-button-geral-pub-interacoes">
                    <div class="button-curtir" onclick="curtirPost(${publicacoes[a].id})">
                        <img src="../assets/img-icon-like.png" alt="" class="pic-icon-curtir">
                        <h3 class="text-curtir">Curtir</h3>
                    </div>
                </div>
                <div class="div-button-comentar , class-button-geral-pub-interacoes">
                    <div class="button-comentar">
                        <img src="../assets/img-icon-comentario.png" alt="" class="pic-icon-comentar">
                        <h3 class="text-comentar">Comentar</h3>
                    </div>
                </div>
            </div>
            </div>`
                        console.log("DEU VIDEO")
                    } else if (publicacoes[a].tipoPub === "imagem") {
                        caixaPubs.innerHTML += `<div class="div-publicacao-pronta">
            <div class="superior-pub-pronta">
                <div class="content-pub-pronta-superior">
                    <div class="foto-usuario-pub">
                        <img src="${publicacoes[a].fotoPerfil}" alt="" class="pic-foto-usuario-pub">
                    </div>
                    <div class="nome-data-pub">
                        <div class="nome-tipo-pub-user">
                        <h2 class="nome-user-pub">${publicacoes[a].nome}</h2>
                        <h4 class="tipoSelect">Publico</h4>
                        </div>
                        <h4 class="data-pub">${publicacoes[a].hora}h - ${publicacoes[a].data}</h4>
                    </div>
                    <div class="opcoes-pub">
                        <h2 class="text-icon-opcoes-pub">...</h2>
                    </div>
                </div>
            </div>
            <div class="inferior-pub-pronta">${publicacoes[a].conteudo}</div>
            <div class="inferior-pub-area-img">
                <img src="${publicacoes[a].linkDoConteudo}" alt="" class="postagem-img , postagem-content">
            </div>
            <hr>
            <div class="interacoes-pub-pronta">
            <h2 class="quantidadeCurtidas">${publicacoes[a].curtidas.length}</h2>
                <div class="div-button-curtir , class-button-geral-pub-interacoes">
                    <div class="button-curtir" onclick="curtirPost(${publicacoes[a].id})">
                        <img src="../assets/img-icon-like.png" alt="" class="pic-icon-curtir">
                        <h3 class="text-curtir">Curtir</h3>
                    </div>
                </div>
                <div class="div-button-comentar , class-button-geral-pub-interacoes">
                    <div class="button-comentar">
                        <img src="../assets/img-icon-comentario.png" alt="" class="pic-icon-comentar">
                        <h3 class="text-comentar">Comentar</h3>
                    </div>
                </div>
            </div>
            </div>`
                        console.log("DEU IMAGEM")
                    }
                }
            }
        }
    }
}
carregaTodosPosts()
function curtirPost(id){
    var publicacoes = chamaPublicacoesBack()
    for(var i = 0; i < publicacoes.length; i++){
        if(publicacoes[i].id == id){
            for(var c = 0; c < publicacoes[i].curtidas.length; c++){
                if(publicacoes[i].curtidas[c] == usuarioAtual[0].id){
                    publicacoes[i].curtidas.splice(c,1)
                    localStorageMandaPublicacoes(publicacoes)
                    return carregaTodosPosts()
                }
            }
            publicacoes[i].curtidas.push(usuarioAtual[0].id)
            localStorageMandaPublicacoes(publicacoes)
            carregaTodosPosts()
            break
        }
    }
}