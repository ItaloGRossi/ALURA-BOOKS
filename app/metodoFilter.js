const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltardos = categoria == 'disponivel' ? filtrarPorDispopnibilidade(): filtrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltardos)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorDeLivrosDisponiveis(livrosFiltardos)
        exibirValorTotalDosLivrosNaTela(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDispopnibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}