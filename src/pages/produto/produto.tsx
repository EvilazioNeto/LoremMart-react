import { Link } from "react-router-dom";
import InfoProduto from "../../components/InfoProduto/InfoProduto";
import styles from './produto.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import produtosDB from '../../data/db.json';
import CardProduto from "../../components/Card/Produto/CardProduto";
import comentariosDB from '../../data/db.json';
import Comentario from "../../components/Card/Comentario/Comentario";

interface Produto {
    nome: string
    descricao: string
    preco: string
    imagem: string
    categoria: string
}

interface ProdutoProps {
    produto: Produto
}

function Produto({ produto }: ProdutoProps) {
    const produtosMesmaCategoria = produtosDB.produtos.filter((p) => p.categoria === produto.categoria)
    const comentarios = comentariosDB.comentarios

    return (
        <main className={styles.produtoContainer}>
            <article className={styles.bannerProduto}>
                <Link className={styles.backHome} to="/">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                <section className={styles.produtoBox}>
                    <InfoProduto produto={produto} />
                </section>
                <section className={styles.produtosExtrasContainer}>
                    <h2>Compre Também</h2>
                    <div className={styles.produtosExtrasBox}>
                        {produtosMesmaCategoria.map((produto) => (
                            <CardProduto key={produto.nome} produto={produto} />
                        ))}
                    </div>
                </section>
            </article>
            <article className={styles.comentariosContainer}>
                <div className={styles.notaBox}>
                    <div>
                        <h2>4.9</h2>
                        <img className={styles.avaliacao} src="stars.webp" alt="" />
                        <p>{comentarios.length} comentários</p>
                    </div>
                    <div>
                        <label htmlFor="">Classificar por:
                            <select name="" id="">
                                <option value="">Mais Relevantes</option>
                                <option value="">Mais Recentes</option>
                                <option value="">Favoritos</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className={styles.comentarioBox}>
                    {comentarios.map((comentario) => (
                        <Comentario comentario={comentario}/>
                    ))}
                </div>
            </article>
        </main>
    )
}

export default Produto;
