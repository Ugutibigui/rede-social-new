let usuarioLogado = usuarioLogadoBack()
let allUsers = usuariosBack();
function abreAlteraSenha(){
    var divAlteraSenha = document.getElementById("div-altera-senha")
    divAlteraSenha.style.display;
    if(divAlteraSenha.style.display == "none"){
        document.getElementById("div-altera-senha").style.display = "block"
    }else{
        document.getElementById("div-altera-senha").style.display = "none"
    }
}
function alteraSenha(){
    var senhaAtual = document.getElementById("senha-atual-input").value
    var novaSenha = document.getElementById("nova-senha-input").value
    var confirmaSenha = document.getElementById("nova-senha-input-confirma").value

    if(senhaAtual == "" || novaSenha == "" || confirmaSenha == ""){
        alert("Porfavor preencha o campo")
    }
    if(novaSenha != confirmaSenha){
        alert("Digite a mesma senha nos dois campos, por favor")
    }

    if(senhaAtual == usuarioLogado[0].senha){
        for(var i = 0; i < allUsers.length; i++){
            if(allUsers[i].principais.id == usuarioLogado[0].id){
                if(novaSenha == usuarioLogado[0].senha){
                    alert("Você já está utilizando esta senha, tente com outra")
                }else{
                    allUsers[i].principais.senha = novaSenha
                    usuarioLogado[0].senha = novaSenha
                    mandarUsuarioBack(allUsers)
                    mandaUsuarioLogadoBack(usuarioLogado)
                    console.log("Alterou a senha")
                    alert("Parabéns, você alterou a senha")
                    document.getElementById("div-altera-senha").style.display = "none"
                }
            }
        }
    }else{
        alert("Senha incorreta tente novamente")
    }
    mandarUsuarioBack(allUsers)
    mandaUsuarioLogadoBack(usuarioLogado)
}