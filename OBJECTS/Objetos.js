//==========================================================

//Sintaxe Literal OBJETOS
  const obj1 = {
      nome: 'Lucas'
  };

  console.log(obj1)

//Sintaxe Formal OBJETOS
  const obj2 = new Object()
  obj2.nome = 'Maria'
  obj2['idade'] = 28

  console.log(obj2)
  console.log('---------------------------------')

//==========================================================

//Sintaxe Literal STRING
  const str = 'minha string str'
  console.log(str.length, 'caracteres - str')
  //Retorna um string

//Sintaxe Formal STRING
  const str2 = new String('minha string str2')
  console.log(str2)
  console.log(str2.length, 'caracteres - str2')
  //Retorna um Objeto do tipo string

//==========================================================

//Sintaxe Literal NUMBER
  const n = 5
  console.log(n)
  //Retorna um numero

//Sintaxe Formal NUMBER
  const n1 = new Number(5)
  console.log(n1)
  //Retorna um Objeto do tipo number

//==========================================================

//Sintaxe Literal BOOLEAN
  const booleano = true
  console.log(booleano)
  //Retorna um valor boolean

//Sintaxe Formal BOOLEAN
  const booleano1 = new Boolean('abc')
  console.log(booleano1)
  //Retorna um objeto do tipo boolean

//==========================================================