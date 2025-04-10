const botao = document.querySelector("#mostrarMensagemBotao");
const mensagem = document.querySelector("#mensagemParagrafo");

botao.addEventListener("click", () => {
  mensagem.textContent = "Você é capaz de conquistar tudo com dedicação!";
});
