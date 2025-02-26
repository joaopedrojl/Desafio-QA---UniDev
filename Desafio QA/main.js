
function gerarSenhas (tamanho, tipo) {
    let caracteres = ""

    if (tamanho <3 || tamanho > 20) {
        return `Não é possível gerar senhas com menos de 3 caracteres, ou com mais de 20 caracteres.` 
    }

    if (tipo == "numerico" ) {
        caracteres = "1234567890"
    } else if (tipo == "alfanumerico" ) {
        caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    } else if (tipo == "especial") {
        caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-="
    } else {
        return "Esse tipo é inválido. Selecione apenas tipos válidos."
    }

    let senha = ""

    for (let i = 0; i < tamanho; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }

    return senha;
}

console.log(gerarSenhas(2, "numerico")) // Para exibir a mensagem de erro
console.log(gerarSenhas(10, "numerico")) // 
console.log(gerarSenhas(15, "alfanumerico")) 
console.log(gerarSenhas(20, "especial")) 

