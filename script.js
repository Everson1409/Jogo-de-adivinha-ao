

// Gerar  um numero aleatorio e inicializar variavel
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 10;

const inputPalpite = document.getElementById("palpite");
const botaoChutar = document.getElementById("botaoChutar");
const mensagem = document.getElementById("mensagem");
const tentativasRestantes = document.getElementById("tentativasRestantes");
// Exibir tentativas iniciais
tentativasRestantes.textContent = `Tentativas restantes: ${tentativas}`;
botaoChutar.addEventListener("click", () =>{

    const palpite = Number(inputPalpite.value);

    // Validação do palpite 
    if(isNaN(palpite)|| palpite < 1 || palpite > 100){
        mensagem.textContent = " Por favor insira um numero de 1 a 100. ";
        mensagem.style.color = "rgba(243, 251, 4, 1)";
        return;
    }
    // Comparação de palpite
    if (palpite === numeroSecreto){
        mensagem.textContent = "🎉 Parabéns, você acertou o número secreto";
        mensagem.style.color = "#0ae402ff";
        botaoChutar.disabled = true;
    } else {
        tentativas --;
        if(tentativas > 0) {
             mensagem.textContent = palpite < numeroSecreto? "⬆️ numero secreto é maior" : "⬇️ numero secreto é menor";
             mensagem.style.color = "#01eaffff";
             tentativasRestantes.textContent = `Tentativas restantes: ${tentativas}`;
        } else{
            mensagem.textContent = `😢 Que pena, você perdeu! o numero secreto era: ${numeroSecreto}.`;
            mensagem.style.color = "#ff0000"
            tentativasRestantes.textContent = "Tentativas restantes: 0";
            botaoChutar.disabled = true;
        }
        
    }
    // Limpar campos 
    inputPalpite.value = "";
    inputPalpite.focus();

});