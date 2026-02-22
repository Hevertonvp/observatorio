document.addEventListener("DOMContentLoaded", function () {

    const sidebar = document.querySelector(".sidebar");
    const mobileToggle = document.querySelector(".mobile-toggle");
    const sidebarToggle = document.querySelector(".sidebar-toggle");

    // Abrir pelo botão do topo (mobile)
    mobileToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Botão interno da sidebar (opcional, para fechar)
    sidebarToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Fechar automaticamente ao clicar em um link (mobile)
    const links = document.querySelectorAll(".sidebar-nav a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove("active");
            }
        });
    });

});