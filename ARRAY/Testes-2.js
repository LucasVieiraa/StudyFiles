const teste = {
    prop: 100,
    funcao: function(){
        return this.prop
    }
};
console.log(teste.funcao())