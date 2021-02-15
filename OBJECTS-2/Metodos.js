//_______________________________________________________________________________________________________________
//                                            Object.create()

    const pai = {
      nome: 'Pai', 
      falar(msg){
        console.log(`${this.nome} esta falando: ${msg}`)
      }
    }

    const filho = Object.create(pai, {nome: {value: 'Junior', enumerable: true}})


//Objetos criados usando o 'Object.create(....)' necessitam como primeiro parametro passar
//o obj que sera ligado(como uma heranca), posteriormente os descritores '{....}'.
//
//No exemplo acima o __proto__ do obj filho e* o obj pai, logo herda a funcao falar.
//_______________________________________________________________________________________________________________
//                                            Object.assign()

    const obj1 = {
      a: 'a',
      b: 'b',
      c: 'c'
    }

    const filha = Object.assign({}, obj1, filho)

    obj1.d = 'd'

//Copia apenas objetos enumerados, as copias refletem ao objeto copiado. No exemplo acima o obj1 e filha 
//sao identicos, para evitar que sejam refletidos por inteiro basta usar um obj vazio como primeiro parametro 
//desta maneira: Object.assign({}, obj1, filho)
//_______________________________________________________________________________________________________________
//                               Object.assign()-Propriedades de mesmo nome 


    const obj2 = {
      b: 'b2',
      d: 'd2'
    }

    obj2.teste = 'Valor teste'

    const clone = Object.assign({}, obj1, obj2)//   <-------   Maneira usando Object.assign()
    const obj3 = {...obj1, ...obj2}//               <-------   Maneira usando spread operator

//No caso de propriedades de mesmo nome a regra e que o ULTIMO obj que foi incluido prevaleca sobre o primeiro 
//_______________________________________________________________________________________________________________
//                                            Object.keys()

    Object.defineProperties(obj2, {
      naoEnumeravel: {
        value: 'Valor nao enumeravel'
      },
      enumeravel: {
        value: 'Valor enumeravel',
        enumerable: true
      }
    })
    console.log(Object.keys(obj2))

//Retorna as propriedades de um objeto(SOMENTE AS ENUMERAVEIS)
//Object.keys(objExemplo)
//_______________________________________________________________________________________________________________
//                                           Object.values()

    console.log(Object.values(obj2))

//Retorna o valor da propriedade
//_______________________________________________________________________________________________________________
//                                          Object.entries()

    console.log(Object.entries(obj2))

    let arrayObj2 = Object.entries(obj2)
      console.log(arrayObj2[0])
      console.log(arrayObj2[0][1])

//Retorna uma array contendo o nome das propriedades e valores em ordem de indice
//_______________________________________________________________________________________________________________
