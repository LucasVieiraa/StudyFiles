//                              MAP
//_____________________________________________________________________
//Maneira normal
  const myObj = new Object()
  myObj.prop1 = "prop 1"
  console.log(myObj.prop1)

//_____________________________________________________________________
//Maneira usando o map
  const myMap = new Map()
  myMap.set("prop1", "prop 1")
  console.log(myMap.get("prop1"))

  myMap.set(true, false)
  console.log(myMap.get(true))

  myMap.set(myObj, "meu objeto")
  console.log(myMap.set(myObj))
  console.log('-------------------------')
//new Map(): conjunto de chave e valor
//_____________________________________________________________________
//Exemplo Map 2
//const map2 = new Map([  [chave,"valor"], [chave,"valor"], [chave,"valor"]  ])                        
  const map2 = new Map([  [0,"zero"], [1,"um"], [2,"dois"]  ])
  console.log(map2.get(0))
  console.log(map2.get(2))
  console.log(map2.keys())//Retorna as chaves do Map
  console.log(map2.values())//Retorna os valores do Map
  console.log(map2.entries())//Retorna os valores e chaves do Map

//Loop dentro do Map:
  const keys = map2.keys()

  for(let i of keys){
    console.log(`i: ${i}`)
  }

  for(let j of map2.values()){
    console.log(`value: ${j}`)
  }



console.log("_____________________________________________________")
//_____________________________________________________________________

//WAKMAP: Mais usado, os metodos sao os mesmos, (OBJETO)
//WeakMap e melhor em relacao a performance

let contador = new WeakMap()
class Contador {
  constructor(){
    contador.set(this, 0)
  }

  increment(){
    contador.set(this, contador.get(this, 0) + 1)
    console.log(contador.get(this))
  }

  get contador(){
    return console.log(contador.get(this, 0) + 1)
  }

}

  const c1 = new Contador()
  c1.increment()
  c1.increment()
  c1.increment()
  c1.contador
  c1.contador