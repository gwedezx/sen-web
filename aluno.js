window.onload = function() {
    console.warn("OLA MUNDOOOOO")

    let meuForm = $("form#formAluno")

    console.log(meuForm)

    meuForm.on("submit", function(event) {
        event.preventDefault()
        console.log("Salvo")
        let botao = $("form button")
        console.log(botao)

        let botaoqgira = Ladda.create(botao[0])
        botaoqgira.start()

    })
}