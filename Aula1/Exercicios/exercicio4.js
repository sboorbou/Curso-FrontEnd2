
let valorProduto = 200
let parcelas = 2

if ( parcelas == 1) {
    alert(`Pagamento a vista no valor de ${valorProduto}`)
}else if ( parcelas >=5 ) {
    let valorTotal = valorProduto * 1.2
    let parcela = valorTotal / parcelas
    alert(`Valor total R$ ${valorTotal}, em ${parcelas} parcelas de R$ ${parcela}`)
}else if ( parcelas >= 3 ) {
    let valorTotal = valorProduto * 1.1
    let parcela = valorTotal / parcelas
    alert(`Valor total R$ ${valorTotal}, em ${parcelas} parcelas de R$ ${parcela}`)
}else {
    let valorTotal = valorProduto
    let parcela = valorTotal / parcelas
    alert(`Valor total R$ ${valorTotal}, em ${parcelas} parcelas de R$ ${parcela}`)
}