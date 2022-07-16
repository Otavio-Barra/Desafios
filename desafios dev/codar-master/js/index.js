const horaAtual = new Date().getHours()

if (horaAtual <= 12) {
    var saudacao = ("bom dia")
} else if (horaAtual <= 18) {
    var saudacao = ("boa tarde")
} else var saudacao = ("boa noite")



var ola = prompt(saudacao + " seja bem vindo!\nPor favor informe seu nome para colocar no registro de acesso")

var agradecer = alert("Obrigado " + ola + "\nfico feliz pelo acesso")