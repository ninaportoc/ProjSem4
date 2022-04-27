# Semana 5 – Resolução de Problemas/Lógica aplicada e JavaScript (sintaxe básica)
### Projeto Guiado I 


# Sistema de gerenciamento de livros

 Este é um repositório consolidando os nossos estudos das últimas 3 semanas de lógica aplicada com javascript.


## Contexto
O objetivo é criar um sistema onde deverá ser possível gerenciar informações sobre os livros que já lemos e os livros que estão na nossa listinha de desejos.


##


```
Arquitetura                                                  
 📁 projeto-de-livros
   |- 📁 controllers                                                                                                
   |     |- 📄 buscarLivros.js
   |     |- 📄 listarRecomendados.js
   |     |- 📄 listarLivrosNaoLidos.js
   |     |- 📄 listarLivrosOrdenados.js
   |- 📁 node_modules
   |- 📄 app.js
   |- 📄 database.js
   |- 📄 .gitignore
   |- 📄 package.json  
   |- 📄 package-lock.json

```
   
##


## Requisitos
```
* buscarLivros (Deverá ser possível buscar livros pela categoria)
* listarLivrosOrdenados (Deverá retornar todos os livros ordenados de forma crescente por quantidade de páginas.)
* listarRecomendados (Deverá listar livros que já foram lidos e que são recomendados)
* listarLivrosNaoLidos (Deverá listar livros que ainda não foram lidos)

```

## Regras

* Inicia o algoritmo escolhendo a forma de busca no menu.
* Caso a pessoa usuária escolha alguma opção inexistente deverá mostrar no console a string 'fim do algoritmo'.
* O comportamento esperado deve ser o pedido da entrada e a impressão das tabelas buscadas no console, conforme requisitos acima.


## Dados
Criar dados mocados, um array de objetos de livros com a modelagem abaixo.

## Livro

```
nome: string
categoria: string
paginas: number
recomenda: boolean
leu: boolean

```


##

<img src="https://media.giphy.com/media/ekebkJkXk7HfmFDr5r/giphy.gif" width="250" height="250"/></h4><br>
