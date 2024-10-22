document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    const name = document.getElementById("name").value;
    const responsible = document.getElementById("responsible").value;
    const branch = document.getElementById("branch").value;
    
    // Simulação de pré-matrícula
    const responseMessage = `Pré-matrícula realizada com sucesso para ${name} (${responsible}) na ${branch}.`;
    document.getElementById("responseMessage").innerText = responseMessage;
    
    // Atualiza o status
    document.getElementById("statusMessage").innerText = responseMessage;
});
