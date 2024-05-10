import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ProdutoCarrinho.module.css';
import { faMinus, faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import IProduto from '../../../interface/IProduto';

interface Produto {
    nome: string
    descricao: string
    preco: string
    imagem: string
    categoria: string
    id: number
}

interface ProdutoCarrinhoProps {
    produto: Produto
    deletarProdutoCarrinho: (produto: Produto) => void;
    handleProdutoSelecionado: (selecionado: boolean, produto: IProduto) => void;
}

function ProdutoCarrinho({ produto, deletarProdutoCarrinho, handleProdutoSelecionado }: ProdutoCarrinhoProps) {
    const [qtdProduto, setQtdProduto] = useState<number>(1);

    function handleQtdProduto(opcao: string) {
        switch (opcao) {
            case "diminuir": qtdProduto > 0 && setQtdProduto(qtd => qtd - 1)
                break
            case "aumentar": qtdProduto < 50 && setQtdProduto(qtd => qtd + 1)
                break
        }
    }


    return (
        <div className={styles.cardProdutoCarrinho}>
            <div className={styles.imgBox}>
                <input onChange={(e) => handleProdutoSelecionado(e.target.checked, {...produto, "qtd": qtdProduto, "valorTotal": parseFloat(produto.preco.replace('$', '')) * qtdProduto})} type="checkbox" />
                <img className={styles.fotoPdtCart} src={`/produtos/${produto.imagem}`} alt="" />
            </div>
            <div className={styles.produtoInfoBox}>
                <div className={styles.boxTitle}>
                    <p>{produto.nome}</p>
                    <FontAwesomeIcon icon={faX} onClick={() => deletarProdutoCarrinho(produto)} />
                </div>
                <div className={styles.optionBox}>
                    <select name="" id="">
                        <option value="">BLACK</option>
                        <option value="">GREEN</option>
                        <option value="">YELLOW</option>
                        <option value="">RED</option>
                        <option value="">BLUE</option>
                    </select>
                    <div>
                        <FontAwesomeIcon icon={faMinus} onClick={() => handleQtdProduto("diminuir")} />
                        <p>{qtdProduto}</p>
                        <FontAwesomeIcon icon={faPlus} onClick={() => handleQtdProduto("aumentar")} />
                    </div>
                </div>
                <div className={styles.priceBox}>
                    <Link to="/">
                        <span>MOVE TO FAVORITES</span>
                    </Link>
                    <p>${parseFloat(produto.preco.replace('$', '')) * qtdProduto}</p>
                </div>
            </div>
        </div>
    )
}

export default ProdutoCarrinho;
