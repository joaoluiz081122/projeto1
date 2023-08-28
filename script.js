const galeria = document.querySelector('.galeria');
const img_slideshow = document.querySelector('.slideshow img')
const overlay = document.querySelector('.overlay')
const contenedor = document.querySelector('.slideshow')
let imagensCriadas = []
let contador = 0
let quantidadeImagens = 20
const criarObjetoImagem = src => { return { src } }
const gerarImagens = (quantidadeImagens) => {
    for (let i = 1; i <= quantidadeImagens; i++) {
        imagensCriadas.push(criarObjetoImagem(`./img/${i}.jpg`))
        galeria.appendChild(document.createElement('img'))
        document.querySelectorAll('img')[i].setAttribute('src', `./img/${i}.jpg`)
        document.querySelectorAll('img')[i].setAttribute('data-imagem-mostrar', i)
    }
}
gerarImagens(quantidadeImagens)


document.querySelectorAll('.galeria img').forEach(img => {
    img.addEventListener('click', (event) => {
        const dataImagemMostrar = parseInt(event.target.dataset.imagemMostrar) - 1
        img_slideshow.src = imagensCriadas[dataImagemMostrar].src
        contador = dataImagemMostrar
        overlay.style.opacity = 1
        overlay.style.visibility = 'visible'
    })
})
document.addEventListener('click', (event) => {
    if (event.target.className === 'overlay' || event.target.className === 'btn_cerrar') {
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    }
})
document.addEventListener('keyup', function (e) {
    if (e.key === 'Escape') {
        console.log('ESQ')
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    }
})
contenedor.addEventListener('click', (event) => {
    const atras = contenedor.querySelector('.atras')
    const adelante = contenedor.querySelector('.adelante')
    const img = contenedor.querySelector('img')
    if (event.target === atras) {
        console.log('atras')
        if(contador > 0){
            img.src = imagensCriadas[contador - 1].src
            contador--
        }
        else{
            img.src = imagensCriadas[imagensCriadas.length - 1].src
            contador = imagensCriadas.length - 1
        }
    }
    else if (event.target === adelante) {
        console.log('adelante')
        if(contador < imagensCriadas.length - 1){
            img.src = imagensCriadas[contador + 1].src
            contador++
        }
        else{
            img.src = imagensCriadas[0].src
            contador = 0
        }
    }
})

document.addEventListener('keyup', (event) => {
    const atras = contenedor.querySelector('.atras')
    const adelante = contenedor.querySelector('.adelante')
    const img = contenedor.querySelector('img')
    if (event.key === 'ArrowLeft') {
        console.log('atras')
        if(contador > 0){
            img.src = imagensCriadas[contador - 1].src
            contador--
        }
        else{
            img.src = imagensCriadas[imagensCriadas.length - 1].src
            contador = imagensCriadas.length - 1
        }
    }
    else if (event.key === 'ArrowRight') {
        console.log('adelante')
        if(contador < imagensCriadas.length - 1){
            img.src = imagensCriadas[contador + 1].src
            contador++
        }
        else{
            img.src = imagensCriadas[0].src
            contador = 0
        }
    }
})
