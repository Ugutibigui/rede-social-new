let todosAmigos = amiguitosFunction()
let allUsers = usuariosBack();
let usuarioLogado = usuarioLogadoBack()
function carregaAmigos(){
    var localAparece = document.getElementById("amigosAquiConfig")
    

    for(let i = 0; i < usuarioLogado[0].amigos.length; i++){
        if(usuarioLogado[0].id !== usuarioLogado[0].amigos[i].id){
            localAparece.innerHTML += `
            <div class="divAmigoAlign">
                <div class="divAmigo">
                    <div class="divFotoAmigo">
                        <img class="imagemEspacoImg" src="${usuarioLogado[0]?.amigos[i].fotoUsuario}"alt="">
                    </div>
                    <div class="divNomeAmigo">
                        <h1 class="textNomeAmigo">${usuarioLogado[0].amigos[i].principais.apelido}</h1>
                    </div>
                    <div class="alinhaSelectButton">
                        <div class="divTipoDeAmizade">
                            <select name="Tipo" id="tipoDeAmizade" class="selectTipoDeAmizade">
                                <option value="Amigos" class="opcaoTipoDeAmizade">Amigos</option>
                                <option value="MelhoresAmigos" class="opcaoTipoDeAmizade">Melhores Amigos</option>
                                <option value="Conhecidos" class="opcaoTipoDeAmizade">Conhecidos</option>
                            </select>
                        </div>
                        <button class="buttonConfirmaTipo">Confirmar</button>
                    </div>    
                    <div class="divBotaoIrPerfilAmigo">
                        <button class="botaoIrPerfilAmigo">Perfil</button>
                    </div>
                </div>                                   
            </div>`
        }
    }

}
carregaAmigos()

//
//
//