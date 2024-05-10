import { toast } from "react-toastify";

interface Produto {
    nome: string
    descricao: string
    preco: string
    imagem: string
    categoria: string
}

export function handleCarrinho(produto: Produto) {
    const produtosCarrinhoString = localStorage.getItem("produtosCarrinho")
    let produtosCarrinho = produtosCarrinhoString ? JSON.parse(produtosCarrinhoString) : []

    const produtoEncontrado = produtosCarrinho.find((item: Produto) => item.nome === produto.nome)
    if (produtoEncontrado) {
        toast.warning(`${produto.nome} já está no carrinho!`);
        return;
    }

    produtosCarrinho = [...produtosCarrinho, produto]
    localStorage.setItem("produtosCarrinho", JSON.stringify(produtosCarrinho))
    toast.success(`${produto.nome} adicionado no carrinho!`);
}