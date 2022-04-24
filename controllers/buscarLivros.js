const livros = require('../database')
const read = require('readline-sync')
const buscarLivros = () => {
    let primeiraOpcao = read.question('Deseja buscar por categoria? S/N').toUpperCase()

if (primeiraOpcao === 'S'){
    let categorias = []
    
    categorias = livros.map((arr) => arr.categoria)

        categoriasNaoRepetidas = [...new Set(categorias)]
    
        console.table(categoriasNaoRepetidas)

    let segundaOpcao = read.question('Digite uma categoria conforme tabela acima: ').toUpperCase()

    let confirmacao = read.question('Tem certeza? S/N').toUpperCase() 

    if (confirmacao === 'S') { const livrosListados = livros.filter(livro => livro.categoria === segundaOpcao) 
        console.table(livrosListados)}

  if (segundaOpcao === 'N' && primeiraOpcao === 'N' && confirmacao === 'N') { 
      console.log('A opção não é válida! :(' +  'Digitar' + 'npm start' )}
 } 
}

module.exports = buscarLivros

