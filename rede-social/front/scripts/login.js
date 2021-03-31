var usuarios = usuariosBack()
var usuarioLogado = usuarioLogadoBack()

if (usuariosBack() !== null) {
    usuarios
} else {
    usuarios = []
}

if (usuarioLogadoBack() !== null){
    usuarioLogado
}else {
    usuarioLogado = []
}

function abrirCriarConta() {
    var fundoFalso = document.getElementById("fundo-falso")
    var divCadastro = document.getElementById("div-cadastro")
    fundoFalso.style.opacity = "12%"
    fundoFalso.style.marginTop = "-37%"
    fundoFalso.style.transition = "0.4s"
    divCadastro.style.display = "Block"
}
function fecharCadastro() {
    var fundoFalso = document.getElementById("fundo-falso")
    var divCadastro = document.getElementById("div-cadastro")
    fundoFalso.style.opacity = "100%"
    fundoFalso.style.marginTop = "0"
    fundoFalso.style.transition = "0.4s"
    divCadastro.style.display = "none"
}
function mostrarSenha() {
    var senha = document.getElementById("caixa-senha-login")
    if (senha.type == "password") {
        senha.type = "text";
    } else {
        senha.type = "password"
    }
}
var fotoUsuario
function cadastrarNovoUsuario() {
    let nomeUsuario = document.getElementById("nome-cadastro-user").value.trim()
    let sobrenomeUsuario = document.getElementById("sobrenome-cadastro-user").value.trim()
    let apelido = document.getElementById("apelido-cadastro-user").value.trim()
    let senha = document.getElementById("senha-cadastro-user").value.trim()
    let fotoUsuario = document.getElementById("foto-perfil").value.trim()
    let idUsuario = usuarios.length + 1
    if (nomeUsuario === "") {
        alert("Apelido do usuario vazio")
        return;
    }
    if (senha === "") {
        alert("senha vazia é invalida")
        return;
    }
    for (let i = 0; i < usuarios.length; i++) {
        console.log(i, usuarios[i].principais)
        if (usuarios[i].principais.apelido === apelido) {
            console.log(i)
            alert("Ja existe")
            return
        }
    }
    
    let novoUsuario = {principais:{apelido: apelido, senha: senha, id: idUsuario, },visuais:{ nomeUsuario: nomeUsuario, sobrenome: sobrenomeUsuario, amigos:[], fotoUsuario: fotoUsuario}}
    usuarios.push(novoUsuario)
    mandarUsuarioBack(usuarios)
    alert("Novo usuario cadastrado, por favor faça login")
    fecharCadastro()
}
function entrar() {
    let apelido = document.getElementById("apelido-login").value
    let senha = document.getElementById("caixa-senha-login").value
    if (apelido === "") {
        alert("nome de usuario vazio")
        return;
    }
    if (senha === "") {
        alert("senha vazia é invalida")
        return;
    }
    var Userlogado = false;
    let i = 0
    
    for (; i < usuarios.length; i++) {
        if (usuarios[i].principais.apelido === apelido && usuarios[i].principais.senha === senha) {
            //fotoUser = usuarios[i].fotoUsuario
            Userlogado = true;
            let usuarioAtual = { apelido: apelido, senha: senha, id: usuarios[i].principais.id, amigos: usuarios[i].visuais.amigos, nome: usuarios[i].visuais.nomeUsuario, sobrenome: usuarios[i].visuais.sobrenome, fotoUsuario: usuarios[i].visuais.fotoUsuario}
            usuarioLogado.push(usuarioAtual)
            mandaUsuarioLogadoBack(usuarioLogado)
            console.log(i)
            break
        } else Userlogado = false;
    }
    if (Userlogado) {
        window.location.href = "../pages/principal.html"
        

    } else alert("Nome de usuario ou senha incorretos")
}

if (usuarioLogado.length > 0)
    location.href = "../pages/principal.html"