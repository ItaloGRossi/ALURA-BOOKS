let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()
const imagemBanner = document.getElementById('banner')
imagemBanner.innerHTML += `
    <img class="img-banner" src="/ALURA-BOOKS/imagens/Banner-1.png" alt="baner" />
`

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros= await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}

