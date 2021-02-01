

//|//|//|//|//|//|//|//|//|//|//||//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|
//|//|//|//|//|//|//|//|//|//|//||//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|
//|//|//|//|//|//|//|//|//|//||//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|
//|//|//|//|//|//|//|//|//|//|//||//|//|//|//|//|//|//|//|//|//|//|//|//|PILARES DA POO|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|
//|//|//|//|//|//|//|//|//|//|//||//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|
//|//|//|//|//|//|//|//|//|//|//||//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|
//|//|//|//|//|//|//|//|//|//|//||//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|//|


//--------------------------------------------------------------------------HERANCA--------------------------------------------------------------------------

//A heranca e uma reutilizacao de codigos, podemos criar um obj
//que ira servir de base para a criacao de outrs.

//EXEMPLO CANETA AZUL
//Tampa azul da caneta e* o atributo(ATRIBUTO)
//Funcao de escrever e* um metodo(METODO)

//Assim podemos utilizar os metodos e os atributos para criar 
//outras canetas azuis ou alterar

//Ex:

//OBJ PAI CANETA {atributo: tampa azul}{metodo: escrever azul}

//OBJ FILHO(HERANCA) CANETA {atributo tampa azul}{metodo: escrever vermelho}
//O obj filho usou as caracteristicas do obj pai, assim nao tem necessidade de 
//duplicar o codigo

//Ex: 'Cachorro' herda as caracteristicas de 'Animal'(MANEIRA ANTIGA)
function Animal(tipo){ 
  if(this instanceof Animal){
    if(tipo) this.tipo = tipo
  } else {
    throw new Error('Animal nao pode ser criado sem o operador "new"')
  }
};

Animal.prototype.obterTipo = function(){
return this.tipo
};

Animal.prototype.tipo = 'desconhecido'

function Cachorro(nome, tipo){
  this.nome = nome
  Animal.call(this, tipo)//Animal.call(proprio objeto, tipo)
  
};

Cachorro.prototype = new Animal()//define o __proto__ do Cachorro para animal(A funcao construtora do 'Cachorro' passa a ser 'Animal')
Cachorro.prototype.constructor = Cachorro//Transforma novamente o construtor para 'Cachorro'

let rex = new Cachorro('rex', 'mamifero')
console.log(rex.constructor)
console.log(rex)
console.log(rex.tipo)
console.log(rex.nome)

//-------------------------------------------------------------------------------------------------------------------------------------------------
//MANEIRA NOVA ES5
class AnimalC{
  constructor(tipo){//'constructor' e a funcao construtora
    if(tipo)  this.tipo = tipo
  }

  obterTipo(){//funcao colocada diratamente na classe
    return this.tipo
  }
}

AnimalC.prototype.tipo = 'desconhecido'// propriedades ainda devem ser usadas fora da classe

let animal = new AnimalC('anfibio')
let animal2 = new AnimalC()
console.log(animal.tipo)
console.log(animal2.tipo)

//toda classe(class) vai precisar de uma funcao construtora



class GatoC extends AnimalC{// o 'extends' realiza a heranca de AnimalC
  constructor(nome){
    super('mamifero')//O mesmo que Cachorro.prototype = new Animal('mamifero') OBRIGATORIO
    this.nome = nome
  }
}

let mingal = new GatoC('mingal')

console.log(mingal)

//-------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------POLIMORFISMO------------------------------------------------------------------------

//E a reescrita de um metodo herdado de uma classe sem utilizar nenhum comportamento
//do objeto pai. No exemplo da caneta, o polimorfismo e* uma reestruturacao da funcao da caneta,
//no obj pai a caneta escreve azul, no polimorfismo a caneta apaga ao inves de escrever

//Ex: 

//OBJ PAI CANETA {atributo: tampa azul}{metodo: escrever azul}

//OBJ FILHO(POLIMORFISMO) CANETA {atributo tampa azul}{metodo: apagar a escrita}


//-------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------ENCAPSULAMENTO-----------------------------------------------------------------------

//E a capacidade de esconder determinado codigo, de maneira que fosse acessado
//somente atraves de uma funcao
//
//Ex:

//----SEM ENCAPSULAMENTO----------

  let pessoa = {
    nome: 'Lucas'
  }
  //console.log(pessoa)

//Desta maneira qualquer pessoa pode ver e atribuir um nome
//--------------------------------

//----COM-ENCAPSULAMENTO----------
function PessoaEN(name){
    'use strict'
  let person = name
  this.GetName = function(){
    return person
  }
  this.ChangeName = function(x){
    if(x) person = x
  }
}
const pessoaUm = new PessoaEN('Lucas')
pessoaUm.ChangeName('Lucaas')
console.log(pessoaUm.GetName())

//Com o encapsulamento so podera acessar e alterar o nome 
//atraves de funcoes
//--------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------ABSTRACAO-------------------------------------------------------------------------
//Ou superclasse, e uma especie de projeto que so podera se tornar algo caso 
//ocorra uma heranca.
//Ex:
//  
//OBJ SUPERCLASSE CANETA {atributo: null}{metodo: null }(sozinho nao faz nada)
//OBJ CANETA {atributo: tampa azul}{metodo: escrever azul}
//