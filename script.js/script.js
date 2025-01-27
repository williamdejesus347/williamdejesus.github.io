document.getElementById('formInscricao').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Exibir mensagem de sucesso
    const mensagem = `Obrigado ${nome}! Você se inscreveu com sucesso usando o e-mail: ${email}.`;
    document.getElementById('mensagem').innerText = mensagem;

    // Limpar os campos do formulário
    document.getElementById('formInscricao').reset();
});
