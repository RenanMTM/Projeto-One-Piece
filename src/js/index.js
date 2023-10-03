
    const botoes = document.querySelectorAll(".botao");

    const personagens = document.querySelectorAll(".personagem")

   
    botoes.forEach((botao, indice) =>{
        botao.addEventListener("click", () => {
            DesselecionarBotão();
            botao.classList.add("selecionado");
            DesselecionarPersonagem();
            personagens[indice].classList.add("selecionado");

        });
    })

function DesselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function DesselecionarBotão() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

