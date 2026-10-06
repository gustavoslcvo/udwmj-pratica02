const nome = prompt("Por favor digite seu nome:");

const elementoSaudacao = document.getElementById("saudacao");

if (nome && nome.trim() !== "") {
    elementoSaudacao.textContent = `Olá, ${nome.trim()}!`;
} else {
    elementoSaudacao.textContent = "Olá, Felipe Ribeiro!";
}