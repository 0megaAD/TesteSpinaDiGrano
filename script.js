// Função para mostrar o formulário
document.getElementById("botaoForm").onclick = function() {
    var formulario = document.getElementById("formularioPedido");
    if (formulario.style.display === "none") {
        formulario.style.display = "block";
    } else {
        formulario.style.display = "none";
    }
}

// Garantir que o formulário comece oculto ao carregar a página
window.onload = function() {
    var formulario = document.getElementById("formularioPedido");
    formulario.style.display = "none"; // Garante que o formulário esteja oculto
};
