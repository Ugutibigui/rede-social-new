let usuarioAtual = usuarioLogadoBack()

if (usuarioLogadoBack() !== null){
    usuarioAtual 
} else {
    usuarioAtual = []
}

function funcoesAbrir(){
    var display = document.getElementById("submenu").style.display;
    if (display == "none") {
        document.getElementById("submenu").style.display = 'block';
        document.getElementById("submenu").style.transition = "1s"
    } else {
        document.getElementById('submenu').style.display = 'none';
        document.getElementById("submenu").style.transition = "1s"
    }
}
 async function nomeEfotoBarra(){
    var apelidoSpace = document.getElementById("apelido-barra-superior")
    var fotoSpace  = document.getElementById("div-foto-barra-superior")

    let retorno = await fetch("http://localhost:8000/usuarios-banco/")
    let meusDados = await retorno.json()
    console.log(meusDados) 

    apelidoSpace.innerText = `${meusDados[0].nome}`
    // apelidoSpace.innerText = `${usuarioAtual[0].apelido}`
    fotoSpace.innerHTML = `<img class="img-div-barra-superior" src="${usuarioAtual[0].fotoUsuario}" alt="">`
    
    
}
nomeEfotoBarra()
function irPageInicial(){
    window.location = "../pages/principal.html"
}
function irRPBCompany(){
    window.location = "https://www.instagram.com/rpb_company/"
}
function irPageConfig(){
    window.location = "../pages/configuracoes.html"
}
function irPerfil(){
    window.location = "../pages/perfilUser.html"
}
function irAmigos(){
    window.location =  "../pages/configAmizades.html"
}
function irDuvidas(){
    window.location =  "../pages/duvidas.html"

}
function irNotificacoes(){
    window.location = "../pages/notificacoes.html"
}