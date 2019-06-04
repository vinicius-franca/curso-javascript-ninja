/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = [true, 1, 'string', null, 2];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr){
  return arr;
}

myFunction(myVar);

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myVar)[1]); //teste

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function exampleFunction(arr , i){
  return arr[i];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var otherVar = [10, 'texto', null, true, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(exampleFunction(otherVar, 0));
console.log(exampleFunction(otherVar, 1));
console.log(exampleFunction(otherVar, 2));
console.log(exampleFunction(otherVar, 3));
console.log(exampleFunction(otherVar, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(name){
    var obj = {
        'Harry Potter':{
            quantidadedePaginas: 200,
            autor: 'J. K. Rowling',
            editora: 'Intrinseca'
        },
        'Senhor dos Anéis':{
            quantidadedePaginas: 200,
            autor: 'Mano Brown',
            editora: 'Abril'
        },
        'Pequeno Principe':{
            quantidadedePaginas: 200,
            autor: 'Seu Jorge',
            editora: 'Printer IT.'
        }
    }
    if(!name){
        return obj;
    }
    return obj[name];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Harry Potter tem ' + book('Harry Potter').quantidadedePaginas + ' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Pequeno Principe é ' + book('Pequeno Principe').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('"O livro Senhor dos Anéis foi publicado pela editora ' + book('Senhor dos Anéis').editora + '.');
