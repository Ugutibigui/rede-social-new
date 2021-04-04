var usuarios = usuariosBack()
var usuarioLogado = usuarioLogadoBack()
function recuperarSenhaAbre(){
    var divLocalRecuperaSenha = document.getElementById("div-recupera-senha")
    var fundo = document.getElementById("fundo-falso")
    divLocalRecuperaSenha.style.display;
    if(divLocalRecuperaSenha.style.display == "none"){
        document.getElementById("div-recupera-senha").style.display = "flex"
        fundo.style.opacity = "30%"
        fundo.style.transition = "0.3s"
    }else{
        document.getElementById("div-recupera-senha").style.display = "none"
        fundo.style.opacity = "100%"
        fundo.style.transition = "0.3s"
    }
}

function fecharDivRecuperaSenha(){
    var fundo = document.getElementById("fundo-falso")
    document.getElementById("div-recupera-senha").style.display = "none"
    fundo.style.opacity = "100%"
    fundo.style.transition = "0.3s"
}

function recuperarSenha(){
    var pegaApelido = document.getElementById("input-info-apelido").value
    var pegaNome = document.getElementById("input-info-nome").value
    var pegaSobrenome = document.getElementById("input-info-sobrenome").value
    var localApareceSenhaRecuperada = document.getElementById("aparece-senha")

    if(pegaApelido == "" || pegaNome == "" || pegaSobrenome == ""){
        alert("Por favor preencha o campo vazio")
    }

    for(var i = 0; i < usuarios.length; i++){
        if(pegaApelido == usuarios[i].principais.apelido && pegaNome == usuarios[i].visuais.nomeUsuario && pegaSobrenome == usuarios[i].visuais.sobrenome){
            localApareceSenhaRecuperada.innerHTML = `
            <div class="div-aparece-senha">
                <div class="local-mostra-title-aparece">
                    <h2 class="title-mostra-senha-div">Senha:</h2>
                </div>
                <div class="local-aparece-text-senha">
                    <h2 class="senha-recuperada-text">${usuarios[i].principais.senha}</h2>
                </div>
            </div>`
        }
    }
}