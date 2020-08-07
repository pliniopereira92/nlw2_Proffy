//Procurar o botao
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener('click', cloneField)

//Executar uma acao
function cloneField() {
     //duplicar os campos. que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true ou false

    //pegar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //Para cada campo, limpar
    fields.forEach(function(field) {
        //pega o field do momento e limpa ele
        field.value = ""
    })

    //colocar na pagina: Onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
