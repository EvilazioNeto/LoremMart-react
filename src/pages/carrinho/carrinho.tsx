import ProdutoCarrinho from '../../components/Card/ProdutoCarrinho/ProdutoCarrinho';
import IProduto from '../../interface/IProduto';
import styles from './carrinho.module.css';
import { useEffect, useState } from 'react';

function Carrinho() {
    const [produtosCarrinho, setProdutosCarrinho] = useState<IProduto[]>([]);
    const [produtosSelecionados, setProdutosSelecionados] = useState<any[]>([]);
    const [valorTotal, setValorTotal] = useState<number>(0);

    useEffect(() => {
        const produtosCarrinhoString = localStorage.getItem("produtosCarrinho")
        let produtosCarrinho = produtosCarrinhoString && JSON.parse(produtosCarrinhoString) || [];
        setProdutosCarrinho(produtosCarrinho)
    }, []);

    function deletarProdutoCarrinho(produto: IProduto) {
        const encontrarProduto = produtosCarrinho.indexOf(produto)
        let confirmar = confirm(`Deseja deletar ${produto.nome} do carrinho?`)

        if (confirmar) {
            produtosCarrinho.splice(encontrarProduto, 1);
            setProdutosCarrinho([...produtosCarrinho]);
            localStorage.setItem("produtosCarrinho", JSON.stringify(produtosCarrinho));

            const encontrarProdutoSelec = produtosSelecionados.indexOf(produto);
            produtosSelecionados.splice(encontrarProdutoSelec, 1);
            setProdutosSelecionados([...produtosSelecionados]);

            

        }
    }

    function handleProdutoSelecionado(selecionado: boolean, produto: IProduto) {
        const produtoJaSelecionado = produtosSelecionados.find((p) => p.id === produto.id);
        if (selecionado) {

            if (!produtoJaSelecionado) {
                const arrSelec = [...produtosSelecionados, produto]
                setProdutosSelecionados(arrSelec);

                let soma = 0
                arrSelec.map((produto) => {
                    soma += produto.valorTotal
                })
                setValorTotal(soma)
            }
        } else {
            const deletarProduto = produtosSelecionados.find((p) => p.id === produto.id);
            const index = produtosSelecionados.indexOf(deletarProduto);
            produtosSelecionados.splice(index, 1);
            setProdutosSelecionados([...produtosSelecionados]);

            let soma = 0
            produtosSelecionados.map((produto) => {
                soma += produto.valorTotal
            })
            setValorTotal(soma)
        }
    }


    return (
        <main className={styles.carrinhoContainer}>
            <article className={styles.carrinhoBox}>
                <div className={styles.boxTitle}>
                    <input type="checkbox" />
                    <h1>SHOPPING CART</h1>
                </div>
                <div className={styles.produtosSelecionadosBox}>
                    <div className={styles.cardsBox}>
                        {produtosCarrinho.length > 0 ? (
                            produtosCarrinho.map((produto) => (
                                <ProdutoCarrinho handleProdutoSelecionado={handleProdutoSelecionado} deletarProdutoCarrinho={deletarProdutoCarrinho} key={produto.imagem} produto={produto} />
                            ))
                        ) : (
                            <h2>Nenhum produto encontrado :(</h2>
                        )}
                    </div>
                    <div className={styles.formsBox}>
                        <div>
                            <h2>ORDER SUMMARY</h2>
                            <p>SUBTOTAL <span>${valorTotal}</span> </p>
                            <p>TAX <span>$15.0</span></p>
                            {produtosSelecionados.length > 0 ? (
                                <p>TOTAL <span>${valorTotal + 15}</span></p>
                            ) : (
                                <p>TOTAL <span>${valorTotal}</span></p>
                            )}
                            <button>CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default Carrinho;
