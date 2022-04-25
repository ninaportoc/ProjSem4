Projeto Guiado I 🚀
Semana 5 – Resolução de Problemas/Lógica aplicada e JavaScript (sintaxe básica)

Revisão
Tipos de dados, Variáveis e Operadores
Declaração de Funções, anônimas e arrow function
Estrutura condicional: if..else, switch...case e ternário
Estrutura de repetição: for, while e do...while
Objetos e Arrays: Destructuring, spread operator, criar, acessar, incluir e deletar item
Métodos de iteração: sort, map, reduce, filter e find
Projeto integrador I


🚀 SIstema de gerenciamento de livros
E aeeee! Este é um repositório consolidando os nossos estudos das últimas 3 semanas de lógica aplicada com javascript.

⚠️ Poder programar em javascript sem depender do navegador é TUDOOO de bom. Agora, nem o céu é o limite para as aplicações que vocês vão criar, rs. Mas vamos ao que interessa!

🧠 Contexto
O objetivo é criar um sistema onde deverá ser possível gerenciar informações sobre os livros que já lemos e os livros que estão na nossa listinha de desejos.

Como criar o projeto
Siga os passos abaixo:

Passo	Comando/informação
Inicie um projeto node	npm init -y
No package.json, crie o script start	"start": "node app.js"
Instale as dependências	npm i readline-sync
Crie o .gitignore	node_modules
|

Tecnologias
Ferramenta	Descrição
javascript	Linguagem de programação
nodejs	Ambiente de execução do javascript
npm	Gerenciador de pacotes
readline-sync	Dependência para receber inputs no terminal
|

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
   
Requisitos
 buscarLivros Deverá ser possível buscar livros pela categoria
 listarLivrosOrdenados Deverá retornar todos os livros ordenados de forma crescente por quantidade de páginas.
 listarRecomendados Deverá listar livros que já foram lidos e que são recomendados
 listarLivrosNaoLidos Deverá listar livros que ainda não foram lidos
REGRAS

- Inicia o algoritmo escolhendo a forma de busca no menu.
- Caso a pessoa usuária escolha alguma opção inexistente deverá mostrar no console a string 'fim do algoritmo'.
- O comportamento esperado deve ser o pedido da entrada e a impressão das tabelas buscadas no console, conforme requisitos acima.
COMPORTAMENTO ESPERADO image

Dados
Criar dados mocados, um array de objetos de livros com a modelagem abaixo.

LIVRO

nome: string
categoria: string
paginas: number
recomenda: boolean
leu: boolean
