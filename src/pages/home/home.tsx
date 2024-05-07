import Categorias from '../../components/Categorias/Categorias';
import Filtro from '../../components/Filtro/Filtro';
import Promocao from '../../components/Promocao/Promocao';
import styles from './home.module.css';
import produtosDB from '../../data/db.json';
import { useState } from 'react';
import CardProduto from '../../components/Card/Produto/CardProduto';

function Home(){
    const [produtos, setProdutos] = useState(produtosDB.produtos);
    const [categoriaFiltrada, setCategoriaFiltrada] = useState<string>('');

    const produtosFiltrados = produtos.filter((produto) => {
        return(
            produto.categoria.includes(categoriaFiltrada)
        )
    })

    function handleCategoria(categoria: string){
        setCategoriaFiltrada(categoria)
    }

    return(
        <main className={styles.homeContainer}>
            <section className={styles.apresentacaoBox}>
                <Filtro />
                <Promocao />
            </section>
            <section className={styles.produtosContainer}>
                <Categorias handleCategorias={handleCategoria}/>
                <div className={styles.produtosBox}>
                    {produtosFiltrados.map((produto) => (
                        <CardProduto key={produto.imagem} produto={produto}/>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Home;
