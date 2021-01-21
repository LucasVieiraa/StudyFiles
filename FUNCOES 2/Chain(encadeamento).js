//const doc = document.addEventListener('click', () => {  })
//-----------------------------------------------------------------------------------
//const doc = document.querySelector('a').style.color = 'red'
//console.log(doc)



//ANOTAR NO CADERNO METODOS DE ENCADEAMENTO

//O retorno de um objeto na funcao(return this) possibilita 
//chamar a funcao mais de uma vez na mesma linha de codigo
const calc = {
  value: 0,
  soma(n){
    this.value += n
    return this
  },
  // subtrai(n){
  //   this.value -= n
  //   return this
  //,
  log(){
    console.log(this.value)
    return this
  }
};
calc.soma(5).soma(2).log()
// calc.subtrai(5).soma(2).log()

