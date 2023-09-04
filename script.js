document.addEventListener("DOMContentLoaded", function () {
    const galeria = document.querySelector(".galeria");
    const overlay = document.querySelector(".overlay");
    const imgSlideshow = document.querySelector("#img_slideshow");
    const btnCerrar = document.querySelector(".btn_cerrar");
    const adelante = document.querySelector(".adelante");
    const atras = document.querySelector(".atras");

    const imagens = document.querySelectorAll(".galeria img");
    let imagemAtual = 0;

    imagens.forEach((imagem, index) => {
        imagem.addEventListener("mouseenter", () => {
            imagem.style.transform = "scale(1.1)";
            imagem.style.filter = "grayscale(0%)";
        });

        imagem.addEventListener("mouseleave", () => {
            imagem.style.transform = "scale(1)";
            imagem.style.filter = "grayscale(100%)";
        });

        imagem.addEventListener("click", () => {
            imagemAtual = index;
            mostrarImagemAtual();
            overlay.style.visibility = "visible";
            overlay.style.opacity = "1";
        });
    });

    btnCerrar.addEventListener("click", () => {
        overlay.style.visibility = "hidden";
        overlay.style.opacity = "0";
    });

    adelante.addEventListener("click", () => {
        imagemAtual = (imagemAtual + 1) % imagens.length;
        mostrarImagemAtual();
    });

    atras.addEventListener("click", () => {
        imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
        mostrarImagemAtual();
    });

    function mostrarImagemAtual() {
        const imagem = imagens[imagemAtual];
        imgSlideshow.src = imagem.src;
    }
});
