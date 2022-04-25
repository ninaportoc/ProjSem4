const livros = require('../database')
const read = require('readline-sync')

const listarRecomendados = () => {
    const primeiraResposta = read.question('Deseja ver os livros recomendados? S/N').toUpperCase()
    if (primeiraResposta === 'S') {
        const livrosRecomendados = livros.filter(livro => livro.recomenda === true)
        console.table(livrosRecomendados)

    } else

        console.log('Digite npm start :)')
}




module.exports = listarRecomendados

