let totalGeral = 0;
limpar();

function adicionar() {
    //recuperar valores - nome do produto, quantidade, e valor
    let produto = document.getElementById('produto').value;
    let nomeDoProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //cálcular preço, subtotal
    let subTotal = quantidade * valorUnitario;
    
    
    let carrinho = document.getElementById('lista-produtos');
    //adicionar carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${subTotal}</span>
  </section>`;
 
  //atualizar total da compra
  totalGeral = totalGeral + subTotal;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${totalGeral}`
  document.getElementById('quantidade').value = 0


if(quantidade <= 0){
  alert('Quantidade deve ser maior que zero')
}

    
}

function limpar() {
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = ''
  document.getElementById('valor-total').textContent = 'R$ 0'
}