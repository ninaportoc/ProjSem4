const livros = require('../database')
const read = require('readline-sync')

const listarLivrosNaoLidos = () => {
    const primeiraResposta = read.question('Deseja ver a lista de desejos? S/N').toUpperCase()
    if (primeiraResposta === 'S') {
        const livrosQueroLer = livros.filter(livro => livro.leu === false)
        console.table(livrosQueroLer)

    } else

        console.log('Digite npm start :)')
}

module.exports = listarLivrosNaoLidos

