import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CardProduto.module.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

interface Produto {
    nome: string
    descricao: string
    preco: string
    imagem: string
    categoria: string
}

interface CardProdutoProps {
    produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {
    return (
        <div className={styles.cardProduto}>
            <FontAwesomeIcon className={styles.cartShopping} icon={faCartShopping} />
            <div className={styles.imgBox}>
                <img src={`produtos/${produto.imagem}`} alt={produto.descricao} />
            </div>
            <p>{produto.nome}</p>
            <p className={styles.preco}>{produto.preco}</p>
        </div>
    )
}

export default CardProduto;
