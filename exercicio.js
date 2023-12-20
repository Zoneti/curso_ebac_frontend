function Produto(p_Nome, p_Preco){ 
    this.nome = p_Nome; 
    this.preco = p_Preco;
} 
function ProdutoSeminovo(p_Nome, p_Preco, p_DataCompraOrignial){ 
    this.dataCompraOriginal = p_DataCompraOrignial; 
    Produto.call(this,p_Nome,p_Preco);
}

function ProdutoPerecivel(p_Nome, p_Preco, p_Validade){ 
    this.validade = p_Validade; 
    Produto.call(this,p_Nome,p_Preco);
} 

function ProdutoDigital(p_Nome, p_Preco, p_Validade, p_URL){ 
    this.urlProduto = p_URL; 
    ProdutoPerecivel.call(this,p_Nome,p_Preco, p_Validade);
} 



var produto1 = new Produto("Blusa", 120);
var produto2 = new ProdutoPerecivel("Arroz", 10, "12/10/2024");
var produto3 = new ProdutoDigital("Curso A", 1000, "12/10/2024", "https://www.google.com/");
var produto2 = new ProdutoSeminovo("Carro V", 10000, "12/10/2021");