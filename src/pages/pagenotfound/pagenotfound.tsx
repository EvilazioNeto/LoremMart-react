import styles from './pagenotfound.module.css';

function PageNotFound() {
    return (
        <main className={styles.pagenotfoundContainer}>
            <article>
                <div>
                    <img src="logo.png" alt="Logo do projeto" />
                    <div className={styles.alien}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <h1>404 - Página não encontrada :(</h1>
                    <p>Desculpe, a página que você procura não existe.</p>
                </div>
            </article>
        </main>
    )
}

export default PageNotFound;
