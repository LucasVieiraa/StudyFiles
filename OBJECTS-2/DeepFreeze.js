  
  const obj1 = {
    foo: 'bar',
    internalProp: {}
  };
//----------------------------------------------------------------------------------------------
    function deepFreeze(obj){
      const propNames = Object.getOwnPropertyNames(obj)

      propNames.forEach(name => {
        let prop = obj[name]
          if(typeof prop === 'object' && prop !== null) deepFreeze(prop)
      })

      return Object.freeze(obj)
    };
//----------------------------------------------------------------------------------------------
      const obj2 = {
        foo: 'bar',
        internalProp: {
          array: [1,2,3],
          internalObj: {teste: 'teste'}
        }
      }
      deepFreeze(obj2)
      obj2.foo = 'asdasd'
      obj2.internalProp = 'dsadsa'
      //obj2.internalProp.array.push('dsadsa') Error
      obj2.internalProp.internalObj = ['dsdssdadadsa']
      console.log(obj2)



//______________________________________________________________________________________________________________
//                Object.getOwnPropertyNames(obj)

//Retorna os nomes das propriedades enumeradas ou nao em formato de string
//Object.getOwnPropertyNames(nomeDoObj)

//______________________________________________________________________________________________________________
//                Object.freeze(obj)

//Congela a primeira camada de um objeto, ou seja caso exista outro obj dentro do obj, nao sera 'congelado'.
//Neste caso precisaria congelar varias vezes: 

//Object.freeze(obj1) //primeira camada
//Object.freeze(obj1.internalProp) //obj dentro do obj


//______________________________________________________________________________________________________________
//                Funcao Freeze

//No caso de existir muitas propriedades, congelar todas elas manualmente se torna inviavel.
//Funcao onde ira congelar todas as propriedades que forem objeto:

/*
    function deepFreeze(obj){
      const propNames = Object.getOwnPropertyNames(obj)

      propNames.forEach(name => {
        let prop = obj[name]
          if(typeof prop === 'object' && prop !== null) deepFreeze(prop)
      })

      return Object.freeze(obj)
    };

    deepFreeze(nomeDoObjeto)
*/

//______________________________________________________________________________________________________________
