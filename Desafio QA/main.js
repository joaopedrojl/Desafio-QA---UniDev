
function gerarSenhas (tamanho, tipo) {
    let caracteres = ""
    let senha = ""

    const numeros = "0123456789"
    const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const especiais = "!@#$%^&*()_+~`|}{[]\:;?><,./-="

    if (tamanho <3 || tamanho > 20) {
        return `Não é possível gerar senhas com menos de 3 caracteres, ou com mais de 20 caracteres.` 
    }

    if (tipo == "numerico" ) {
        caracteres = numeros
    } else if (tipo == "alfanumerico" ) {
        caracteres = numeros + letras
        senha += numeros.charAt(Math.floor(Math.random() * numeros.length))
        senha += letras.charAt(Math.floor(Math.random() * letras.length))
    } else if (tipo == "especial") {
        caracteres = numeros + letras + especiais
        senha += numeros.charAt(Math.floor(Math.random() * numeros.length))
        senha += letras.charAt(Math.floor(Math.random() * letras.length))
        senha += especiais.charAt(Math.floor(Math.random() * especiais.length))
    } else {
        return "Esse tipo é inválido. Selecione apenas tipos válidos."
    }


    while (senha.length < tamanho) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }

    return senha;
}
console.log(gerarSenhas(2, "numerico")) // Para exibir a mensagem de erro
console.log(gerarSenhas(10, "numerico")) // 
console.log(gerarSenhas(15, "alfanumerico")) 
console.log(gerarSenhas(20, "especial")) 
