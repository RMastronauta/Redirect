function redirecionar() {
    let urlInput = document.getElementById('urlRedirect');
    let url = urlInput.value
    window.location.assign(url);
}

// Animação da barra de progresso e redirecionamento
function iniciarCarregamento() {
    var progress = document.querySelector('.progress');
    var largura = 0;
    var intervalo = setInterval(function() {
        if (largura >= 100) {
            clearInterval(intervalo);
            redirecionar();
        } else {
            largura += 1; // Aumenta a largura em 1% a cada 30ms
            progress.style.width = largura + '%';
        }
    }, 30); // 30ms * 100 = 3000ms ou 3 segundos
}

// Inicia a barra de carregamento e o redirecionamento quando a página carrega
document.addEventListener('DOMContentLoaded', iniciarCarregamento);