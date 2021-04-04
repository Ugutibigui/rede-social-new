let todosAmigos = amiguitosFunction()
let allUsers = usuariosBack();
let usuarioLogado = usuarioLogadoBack()

function carregaSugestoesAmigos() {
    let container = document.getElementById("sujestoes-aqui")
    container.innerHTML = ""
    amigosQueJaAdicionou = carregaAmiguinhosBack()
    var recebe = []
    for(let i = 0; i < allUsers.length; i++ ){
        if(allUsers[i].principais.id !== usuarioLogado[0]?.id){
            let existe = false
            for(let a = 0; a < usuarioLogado[0]?.amigos.length; a++){
                if(allUsers[i].principais.id == usuarioLogado[0]?.amigos[a]?.id){
                    existe = true
                    break
                }
            }
            if(!existe)
            recebe.push(allUsers[i])
        }
    }
    for(let i = 0; i < recebe.length; i++){
       container.innerHTML += `<div class="divUser"><div class="div-alinha-itens-adc"><img class="fotoUsuariosSujest" src="${recebe[i].visuais.fotoUsuario}" alt=""><div class="alinha-name-user-adc"><p class="users-name">${recebe[i].principais.apelido}</p></div><div class="doButton"><button id="botaoAdicionar" onclick="adicionarAmigo('${recebe[i].principais.id}')" class="botaoAdicionar">Adicionar</button></div></div></div>`
    }
}
carregaSugestoesAmigos()
//estava dentro do onclick ${allUsers[i].id} ,'${allUsers[i].nomeUsuario}' , '${allUsers.fotoUsuario}'
// html : `<div class="divUser"><div class="div-alinha-itens-adc"><img class="fotoUsuariosSujest" src="${allUsers[i].fotoUsuario}" alt=""><div class="alinha-name-user-adc"><p class="users-name">${allUsers[i].principais.apelido}</p></div><div class="doButton"><button id="botaoAdicionar" onclick="adicionarAmigo()" class="botaoAdicionar">Adicionar</button></div></div></div>`

function adicionarAmigo(id){
    let amigo;
    for(let i = 0; i < allUsers.length;  i++){
        if(allUsers[i].principais.id == id){
            //fotoUsuario, principais.apelido, id
            let res = {
                fotoUsuario: usuarioLogado[0]?.fotoUsuario,
                id: usuarioLogado[0]?.id,
                imagensUsuario: usuarioLogado[0]?.imagensUsuario,
                principais: {
                    apelido: usuarioLogado[0].apelido
                }
                
            }
            allUsers[i].visuais.amigos.push(res)
            amigo = allUsers[i]
            break
        }
    }
    let resultado = {
        fotoUsuario: amigo?.visuais.fotoUsuario,
        id: amigo?.principais.id,
        imagensUsuario: amigo?.visuais.imagensUsuario,
        principais: {
            apelido: amigo.principais.apelido
        }
        
    }
    usuarioLogado[0].amigos.push(resultado)
    for(let i = 0; i < allUsers.length; i++){
        if(allUsers[i].principais.id == usuarioLogado[0].id){
            allUsers[i].visuais.amigos.push(resultado)
            break
        }
    }
    carregaAmigos()
    carregaSugestoesAmigos()
    atualizaNumeroAmigos()
    mandarUsuarioBack(allUsers)
    mandaUsuarioLogadoBack(usuarioLogado)
}
function carregaAmigos(){
    var container = document.getElementById("amigos-aqui")
    container.innerHTML = ""

    for(let i = 0; i < usuarioLogado[0].amigos.length; i++){
        
            container.innerHTML += `<div class="divUser"><div class="div-alinha-itens-adc"><img class="fotoUsuariosSujest" src="${usuarioLogado[0]?.amigos[i].fotoUsuario}" alt=""><div class="alinha-name-user-adc"><p class="users-name">${usuarioLogado[0].amigos[i].principais.apelido}</p></div><div class="doButton"><button id="botaoPerfil" class="botaoAdicionar" onclick="irPerfilAmigo(${usuarioLogado[0]?.amigos[i].id})">Perfil</button></div></div></div>`
        
        console.log("a")
    }

}
carregaAmigos()

function atualizaNumeroAmigos(){
    var localNumeroAmigos = document.getElementById("numero-amigos-adicionados")
    localNumeroAmigos.innerHTML = `(${usuarioLogado[0].amigos.length} amigos)`
}
atualizaNumeroAmigos()

var amigoPerfilAmigo = []

function irPerfilAmigo(id){
    console.log("clicou")
    for(var i = 0; i < allUsers.length; i++){
        if(allUsers[i].principais.id == id){
            amigoPerfilAmigo.shift()
            var idAmigo = allUsers[i].principais.id
            amigoPerfilAmigo.push(idAmigo)
            mandaIdAmigoClick(amigoPerfilAmigo)
            window.location.href = "../pages/perfilAmigo.html"
            break
        }
    }
}