const produto = {
    nome: 'caneta',
    qtd: 10,
    //comprar: function(n) maneira formal
    comprar(n){
        console.log(this)
        if(n > this.qtd){
            return 'Quantidade indisponivel'
        }
        this.qtd -= n;
    }
}
//--------------------------
produto.comprar(13);
console.log(produto);