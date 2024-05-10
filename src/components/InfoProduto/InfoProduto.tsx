import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './InfoProduto.module.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { handleCarrinho } from '../../util/carrinho/handleCarrinho';

interface Produto {
    nome: string
    descricao: string
    preco: string
    imagem: string
    categoria: string
}

interface InfoProdutoProps {
    produto: Produto
}

function InfoProduto({ produto }: InfoProdutoProps) {

    return (
        <div className={styles.produtoContainer}>
            <img className={styles.fotoProduto} src={`/produtos/${produto.imagem}`} alt="" />
            <div className={styles.InfoProduto}>
                <img className={styles.avaliacao} src="stars.webp" alt="" />
                <h2>{produto.nome}</h2>
                <p className={styles.codigoPdt}>STYLE#DGVF545</p>
                <p className={styles.valorProduto}>{produto.preco}</p>
                <label className={styles.pdtQtd} htmlFor="">Quantity
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                    </select>
                </label>
                <label className={styles.addFav} htmlFor=""><FontAwesomeIcon icon={faHeart} /> Add To Favorite</label>
                <button onClick={() => handleCarrinho(produto)} className={styles.addCartBtn}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default InfoProduto;
