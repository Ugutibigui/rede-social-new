// let usuarioAtual
// let allUsers
function pesquisarAmigoAbre() {
    var divPesquisa = document.getElementById("caixa-pesquisa-barra-superior")
    var display = document.getElementById("div-aparece-resultado").style.display;
    if (display == "none") {
        document.getElementById("div-aparece-resultado").style.display = 'block';
        document.getElementById("div-aparece-resultado").style.transition = "1s"
        document.getElementById("caixa-pesquisa-barra-superior").style.borderRadius = "20px 20px 0px 0px"
    } else {
        document.getElementById('div-aparece-resultado').style.display = 'none';
        document.getElementById("div-aparece-resultado").style.transition = "1s"
        document.getElementById("caixa-pesquisa-barra-superior").style.borderRadius = "50px"

    }
}

function pesquisarAmigo() {
    var localApareceResultado = document.getElementById("div-aparece-resultado")
    localApareceResultado.style.display = 'block'
    document.getElementById("caixa-pesquisa-barra-superior").style.borderRadius = "20px 20px 0px 0px"
    var inputEscreveNome = document.getElementById("input-pesquisa-barra-superior").value
    for (var i = 0; i < allUsers.length; i++) {
        localApareceResultado.innerHTML = ""
        if(allUsers[i].principais.apelido.indexOf(inputEscreveNome) > -1){
            localApareceResultado.innerHTML = ""
            localApareceResultado.innerHTML += `
            <div class="divUsuarioEncontrado">
                <div class="arrumaDivUsuarioEncontrado">
                    <div class="divFotoUsuarioEncontrado">
                        <img class="fotoUsuarioEncontrado" src="">
                    </div>
                    <div class="divNomeUsuarioEncontrado">
                        <h3 class="textDivNomeUsuarioEncontrado">${allUsers[i].principais.apelido}</h3>
                    </div>
                </div>
            </div>`
            break
        }else{
            localApareceResultado.innerHTML = ""
            localApareceResultado.innerHTML += `
            <div class="usuarioNaoEncontrado">
                <div class="textUsuarioNaoEncontrado">Usuario não encontrado</div>
            </div>`
        }
    }
    console.log("click")
}