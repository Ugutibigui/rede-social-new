function usuariosBack() {
    return JSON.parse(localStorage.getItem("Users")) || []
}
function mandarUsuarioBack(usuarios){
    localStorage.setItem("Users", JSON.stringify(usuarios))
}
function mandaUsuarioLogadoBack(atual){
    localStorage.setItem("usuarioAtual", JSON.stringify(atual))
}
function usuarioLogadoBack() {
    return JSON.parse(localStorage.getItem("usuarioAtual")) || []
}
function carregaAmiguinhosBack() { 
    return JSON.parse(localStorage.getItem("amigos")) || []
}
function localStorageMandaPublicacoes(publicacoes) {
    localStorage.setItem("posts", JSON.stringify(publicacoes))
}
function chamaPublicacoesBack() {
    return JSON.parse(localStorage.getItem("posts")) || []
}

//ARRUMAR ISSO HEIN, SÃO SE ESQUEÇA 
function amiguitosFunction() {
    return JSON.parse(localStorage.getItem("amiguitos")) || []
}