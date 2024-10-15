document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Evita o comportamento padrão

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Rola suavemente até o elemento alvo
        targetElement.scrollIntoView({
            behavior: 'smooth' // Animação suave
        });
    });
});

// Seleciona o elemento da seta
const setaUpper = document.getElementById('seta-upper');

// Função para verificar a rolagem
function verificarRolagem() {
    const header = document.querySelector('header'); // Seleciona o cabeçalho
    const headerAltura = header.offsetHeight; // Obtém a altura do cabeçalho

    // Mostra a seta se a rolagem for maior que a altura do cabeçalho
    if (window.scrollY > headerAltura) {
        setaUpper.style.display = 'block'; // Exibe a seta
    } else {
        setaUpper.style.display = 'none'; // Oculta a seta
    }
}

// Adiciona o evento de rolagem
window.addEventListener('scroll', verificarRolagem);

// Função para rolar suavemente para o topo ao clicar na seta
setaUpper.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
