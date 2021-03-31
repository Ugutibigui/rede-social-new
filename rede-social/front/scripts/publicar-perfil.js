function abrirAbaPubText() {
    var fundoFalso = document.getElementById("fundo-falso")
    var divCadastro = document.getElementById("div-publicar-real-text")
    fundoFalso.style.filter = "blur(10px)"
    fundoFalso.style.marginTop = "-36%"
    fundoFalso.style.transition = "0.2s"
    fundoFalso.style.zIndex = "-50"
    divCadastro.style.display = "Block"
    divCadastro.style.zIndex = "30"
    divCadastro.style.position = "relative"
}
function fecharAbaPubText() {
    var fundoFalso = document.getElementById("fundo-falso")
    var divCadastro = document.getElementById("div-publicar-real-text")
    fundoFalso.style.filter = "blur(0px)"
    fundoFalso.style.marginTop = "0"
    fundoFalso.style.transition = "0.2s"
    divCadastro.style.display = "none"
}
function carregaNomePerfilAbaPubText(){
    let localName = document.getElementById("name-pessoa-pub-div1")
    localName.innerText = `${usuarioAtual[0].apelido}`
}
carregaNomePerfilAbaPubText()

function abrirAbaPubVideo() {
    var fundoFalso = document.getElementById("fundo-falso")
    var divCadastro = document.getElementById("div-publicar-real-video")
    fundoFalso.style.filter = "blur(10px)"
    fundoFalso.style.marginTop = "-37%"
    fundoFalso.style.transition = "0.2s"
    fundoFalso.style.zIndex = "-10"
    divCadastro.style.display = "Block"
    divCadastro.style.position = "relative"
}
function fecharAbaPubVideo() {
    var fundoFalso = document.getElementById("fundo-falso")
    var divCadastro = document.getElementById("div-publicar-real-video")
    fundoFalso.style.filter = "blur(0px)"
    fundoFalso.style.marginTop = "0"
    fundoFalso.style.transition = "0.2s"
    divCadastro.style.display = "none"
}
function carregaNomePerfilAbaPubVideo(){
    let localName = document.getElementById("name-pessoa-pub-div1-video")
    localName.innerText = `${usuarioAtual[0].apelido}`
}
carregaNomePerfilAbaPubVideo()

function abrirAbaPubImg() {
    var fundoFalso = document.getElementById("fundo-falso")
    var divCadastro = document.getElementById("div-publicar-real-img")
    fundoFalso.style.filter = "blur(10px)"
    fundoFalso.style.marginTop = "-37%"
    fundoFalso.style.transition = "0.2s"
    fundoFalso.style.zIndex = "-10"
    divCadastro.style.display = "Block"
    divCadastro.style.position = "relative"
}
function fecharAbaPubImg() {
    var fundoFalso = document.getElementById("fundo-falso")
    var divCadastro = document.getElementById("div-publicar-real-img")
    fundoFalso.style.filter = "blur(0px)"
    fundoFalso.style.marginTop = "0"
    fundoFalso.style.transition = "0.2s"
    divCadastro.style.display = "none"
}
function carregaNomePerfilAbaPubImg(){
    let localName = document.getElementById("name-pessoa-pub-div1-img")
    localName.innerText = `${usuarioAtual[0].apelido}`
}
carregaNomePerfilAbaPubImg()

function trocarParaFoto(){
    fecharAbaPubText()
    abrirAbaPubImg()
}
function trocarParaVideo(){
    fecharAbaPubText()
    abrirAbaPubVideo()
}
function trocarParaTexto(){
    alert("Você já está em publicação de texto rsrs")
}

function carregaTodosPosts() {
    var publicacoes = chamaPublicacoesBack()
    var caixaPubs = document.getElementById("area-pubs")
    caixaPubs.innerHTML = ""
    for (let i = 0; i < publicacoes.length; i++) {
         if (publicacoes[i].tipoPub === "texto") {
            caixaPubs.innerHTML += `<div class="div-publicacao-pronta">
            <div class="superior-pub-pronta">
                <div class="content-pub-pronta-superior">
                    <div class="foto-usuario-pub">
                        <img src="${publicacoes[i].fotoPerfil}" alt="" class="pic-foto-usuario-pub">
                    </div>
                    <div class="nome-data-pub">
                        <div class="nome-tipo-pub-user">
                        <h2 class="nome-user-pub">${publicacoes[i].nome}</h2>
                        <h4 class="tipoSelect">Publico</h4>
                        </div>
                        <h4 class="data-pub">${publicacoes[i].hora}h - ${publicacoes[i].data}</h4>
                    </div>
                    <div class="opcoes-pub">
                        <h2 class="text-icon-opcoes-pub">...</h2>
                    </div>
                </div>
            </div>
            <div class="inferior-pub-pronta">${publicacoes[i].conteudo}</div>
            <hr>
            <div class="interacoes-pub-pronta">
                <div class="div-button-curtir , class-button-geral-pub-interacoes">
                    <div class="button-curtir">
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
        } else if (publicacoes[i].tipoPub === "video") {
            caixaPubs.innerHTML += `<div class="div-publicacao-pronta">
            <div class="superior-pub-pronta">
                <div class="content-pub-pronta-superior">
                    <div class="foto-usuario-pub">
                        <img src="${publicacoes[i].fotoPerfil}" alt="" class="pic-foto-usuario-pub">
                    </div>
                    <div class="nome-data-pub">
                        <div class="nome-tipo-pub-user">
                        <h2 class="nome-user-pub">${publicacoes[i].nome}</h2>
                        <h4 class="tipoSelect">Publico</h4>
                        </div>
                        <h4 class="data-pub">${publicacoes[i].hora}h - ${publicacoes[i].data}</h4>
                    </div>
                    <div class="opcoes-pub">
                        <h2 class="text-icon-opcoes-pub">...</h2>
                    </div>
                </div>
            </div>
            <div class="inferior-pub-pronta">${publicacoes[i].conteudo}</div>
            <div class="inferior-pub-area-video">
                <video controls class="postagem-video , postagem-content">
                    <source src="${publicacoes[i].linkDoConteudo}" type="video/mp4"></source>
                </video>
            </div>
            <hr>
            <div class="interacoes-pub-pronta">
                <div class="div-button-curtir , class-button-geral-pub-interacoes">
                    <div class="button-curtir">
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
        } else if (publicacoes[i].tipoPub === "imagem") {
            caixaPubs.innerHTML += `<div class="div-publicacao-pronta">
            <div class="superior-pub-pronta">
                <div class="content-pub-pronta-superior">
                    <div class="foto-usuario-pub">
                        <img src="${publicacoes[i].fotoPerfil}" alt="" class="pic-foto-usuario-pub">
                    </div>
                    <div class="nome-data-pub">
                        <div class="nome-tipo-pub-user">
                        <h2 class="nome-user-pub">${publicacoes[i].nome}</h2>
                        <h4 class="tipoSelect">Publico</h4>
                        </div>
                        <h4 class="data-pub">${publicacoes[i].hora}h - ${publicacoes[i].data}</h4>
                    </div>
                    <div class="opcoes-pub">
                        <h2 class="text-icon-opcoes-pub">...</h2>
                    </div>
                </div>
            </div>
            <div class="inferior-pub-pronta">${publicacoes[i].conteudo}</div>
            <div class="inferior-pub-area-img">
                <img src="${publicacoes[i].linkDoConteudo}" alt="" class="postagem-img , postagem-content">
            </div>
            <hr>
            <div class="interacoes-pub-pronta">
                <div class="div-button-curtir , class-button-geral-pub-interacoes">
                    <div class="button-curtir">
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
carregaTodosPosts()

    async function publicaText(){
    var select = document.getElementById("opcaoPv")
	var text = select.options[select.selectedIndex].text;
    var caixaDeTexto = document.getElementById("textarea-div2-meio-div-pub-text").value
    var caixaPubs = document.getElementById("area-pubs")
    if (!caixaDeTexto) return alert("Sua publicação está vazia")
    var publicacoes = chamaPublicacoesBack()
    if (!publicacoes) publicacoes = []
    var now = new Date
    var nomeUserPost = usuarioAtual[0].apelido
    var hora = now.getHours()
    var minuto = now.getMinutes()
    var dia = now.getDate()
    var mes = now.getMonth()+1
    var ano = now.getFullYear()
    let horaPost = `${hora}:${minuto}`
    let dataPost = `${dia}/${mes}/${ano}`
    var tipo = "texto"
    var fotoUserPost = usuarioAtual[0].fotoUsuario
    caixaPubs.innerHTML += `<div class="div-publicacao-pronta">
    <div class="superior-pub-pronta">
        <div class="content-pub-pronta-superior">
            <div class="foto-usuario-pub">
                <img src="${fotoUserPost}" alt="" class="pic-foto-usuario-pub">
            </div>
            <div class="nome-data-pub">
                <div class="nome-tipo-pub-user">
                <h2 class="nome-user-pub">${nomeUserPost}</h2>
                <h4 class="tipoSelect">${text}</h4>
                </div>
                <h4 class="data-pub">${horaPost}h - ${dataPost}</h4>
            </div>
            <div class="opcoes-pub">
                <h2 class="text-icon-opcoes-pub">...</h2>
            </div>
        </div>
    </div>
    <div class="inferior-pub-pronta">${caixaDeTexto}</div>
    <hr>
    <div class="interacoes-pub-pronta">
        <div class="div-button-curtir , class-button-geral-pub-interacoes">
            <div class="button-curtir">
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
    let pub = {
        nome: nomeUserPost,
        conteudo: caixaDeTexto,
        data: dataPost,
        hora: horaPost,
        fotoPerfil: "essa eh minha foto",
        tipoPub: tipo,
        linkDoConteudo: "Essa publicação não precisa de link"
    }
    publicacoes.push(pub)
    localStorageMandaPublicacoes(publicacoes)
    fecharAbaPubText()
}

async function publicaVideo(){
    var select = document.getElementById("opcaoPv")
	var text = select.options[select.selectedIndex].text;
    var caixaDeTextoVideo = document.getElementById("textarea-div2-meio-div-pub-text-video").value
    var linkVideo = document.getElementById("local-link-video").value
    var caixaPubs = document.getElementById("area-pubs")
    if (!linkVideo) return alert("Você ainda não colocou um link de video")
    var publicacoes = chamaPublicacoesBack()
    if (!publicacoes) publicacoes = []
    var now = new Date
    var nomeUserPostVideo = usuarioAtual[0].apelido
    var horaVideo = now.getHours()
    var minutoVideo = now.getMinutes()
    var diaVideo = now.getDate()
    var mesVideo = now.getMonth()+1
    var anoVideo = now.getFullYear()
    let horaPostVideo = `${horaVideo}:${minutoVideo}`
    let dataPostVideo = `${diaVideo}/${mesVideo}/${anoVideo}`
    var tipo = "video"
    var fotoUserPost = usuarioAtual[0].fotoUsuario
    caixaPubs.innerHTML += `<div class="div-publicacao-pronta">
    <div class="superior-pub-pronta">
        <div class="content-pub-pronta-superior">
            <div class="foto-usuario-pub">
                <img src="${fotoUserPost}" alt="" class="pic-foto-usuario-pub">
            </div>
            <div class="nome-data-pub">
                <div class="nome-tipo-pub-user">
                <h2 class="nome-user-pub">${nomeUserPostVideo}</h2>
                <h4 class="tipoSelect">${text}</h4>
                </div>
                <h4 class="data-pub">${horaPostVideo}h - ${dataPostVideo}</h4>
            </div>
            <div class="opcoes-pub">
                <h2 class="text-icon-opcoes-pub">...</h2>
            </div>
        </div>
    </div>
    <div class="inferior-pub-pronta">${caixaDeTextoVideo}</div>
    <div class="inferior-pub-area-video">
        <video controls class="postagem-video , postagem-content">
            <source src="${linkVideo}" type="video/mp4"></source>
        </video>
    </div>
    <hr>
    <div class="interacoes-pub-pronta">
        <div class="div-button-curtir , class-button-geral-pub-interacoes">
            <div class="button-curtir">
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

    let pub = {
        nome: nomeUserPostVideo,
        conteudo: caixaDeTextoVideo,
        data: dataPostVideo,
        hora: horaPostVideo,
        fotoPerfil: "essa eh minha foto",
        tipoPub: tipo,
        linkDoConteudo: linkVideo
    }
    publicacoes.push(pub)
    localStorageMandaPublicacoes(publicacoes)

    fecharAbaPubVideo()
}

async function publicaImg(){
    var select = document.getElementById("opcaoPv")
	var text = select.options[select.selectedIndex].text;
    var caixaDeTextoImg = document.getElementById("textarea-div2-meio-div-pub-text-img").value
    var linkImg = document.getElementById("local-link-img").value
    var caixaPubs = document.getElementById("area-pubs")
    if (!linkImg) return alert("Você ainda não colocou um link de video")
    var publicacoes = chamaPublicacoesBack()
    if (!publicacoes) publicacoes = []
    var now = new Date
    var nomeUserPostImg = usuarioAtual[0].apelido
    var horaImg = now.getHours()
    var minutoImg = now.getMinutes()
    var diaImg = now.getDate()
    var mesImg = now.getMonth()+1
    var anoImg = now.getFullYear()
    let horaPostImg = `${horaImg}:${minutoImg}`
    let dataPostImg = `${diaImg}/${mesImg}/${anoImg}`
    var tipo = "imagem"
    var fotoUserPost = usuarioAtual[0].fotoUsuario
    caixaPubs.innerHTML += `<div class="div-publicacao-pronta">
    <div class="superior-pub-pronta">
        <div class="content-pub-pronta-superior">
            <div class="foto-usuario-pub">
                <img src="${fotoUserPost}" alt="" class="pic-foto-usuario-pub">
            </div>
            <div class="nome-data-pub">
                <div class="nome-tipo-pub-user">
                <h2 class="nome-user-pub">${nomeUserPostImg}</h2>
                <h4 class="tipoSelect">${text}</h4>
                </div>
                <h4 class="data-pub">${horaPostImg}h - ${dataPostImg}</h4>
            </div>
            <div class="opcoes-pub">
                <h2 class="text-icon-opcoes-pub">...</h2>
            </div>
        </div>
    </div>
    <div class="inferior-pub-pronta">${caixaDeTextoImg}</div>
    <div class="inferior-pub-area-img">
        <img src="${linkImg}" alt="" class="postagem-img , postagem-content">
    </div>
    <hr>
    <div class="interacoes-pub-pronta">
        <div class="div-button-curtir , class-button-geral-pub-interacoes">
            <div class="button-curtir">
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
    let pub = {
        nome: nomeUserPostImg,
        conteudo: caixaDeTextoImg,
        data: dataPostImg,
        hora: horaPostImg,
        fotoPerfil: "essa eh minha foto",
        tipoPub: tipo,
        linkDoConteudo: linkImg
    }
    publicacoes.push(pub)
    localStorageMandaPublicacoes(publicacoes)
    fecharAbaPubImg()
}