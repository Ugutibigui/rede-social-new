usuarioLogado = usuarioLogadoBack()
if (usuarioLogado.length <= 0)
    location.href = "../pages/login.html"

function trocaFotoOption(){
    var localFotoOption = document.getElementById("div-foto-option-esquerda")
    localFotoOption.innerHTML = `<img src="${usuarioLogado[0].fotoUsuario}" alt="" class="imgOptionUser">`
}
trocaFotoOption()

