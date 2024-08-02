function calcularPromocao() {
    const auxProduto = document.getElementById("produto");
    
    const produtoNome = auxProduto.value;

    const auxPreco = document.getElementById("preco");

    const precoProduto = auxPreco.value;

    const valorTerceiroProduto = precoProduto / 2;

    const valorTotalPromocao = precoProduto * 2 + valorTerceiroProduto;

    document.getElementById("textoExtra1").innerHTML = produtoNome + " - Promoção: Leve três por apenas R$" + valorTotalPromocao;

    document.getElementById("textoExtra2").innerHTML = "O 3° produto custa apenas R$" + valorTerceiroProduto;
}