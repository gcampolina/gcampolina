function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: 'smooth', // Rola suavemente
        block: 'center',    // Centraliza verticalmente
        inline: 'nearest'   // Centraliza horizontalmente (opcional)
    });
}




document.addEventListener("DOMContentLoaded", function() {
    const text = "Seja Bem Vindo ao meu Portfólio.";
    
    const cursorElement = document.getElementById('cursor');
    
    let index = 0;
    
    function typeLetter() {
        if (index < text.length) {
            cursorElement.before(text.charAt(index));
            index++;
            setTimeout(typeLetter, 40);
        } 
    }

    typeLetter();
});


document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    // Mostra o botão ao rolar a página
    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // Rola para o topo ao clicar no botão
    backToTopButton.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
});
