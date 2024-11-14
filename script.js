
function toggleMenu() {
    const navMenu = document.querySelector(".nav-bar"); // Corrigido para usar querySelector e o nome correto da classe
    // Alterna a exibição do menu
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
}
