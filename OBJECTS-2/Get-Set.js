let tipo = ''

const tipodPermitidos = {'mamifero': true, 'amfibio': true, 'reptil': true}

const cachorro = {
  name: 'Rex',
  get tipo(){
    return tipo
  },
  set tipo(_tipo){
    if(tipodPermitidos[_tipo]) tipo = _tipo
  }
}
//get => quando chamado se comporta como uma propriedade, mas dentro do obj e uma funcao