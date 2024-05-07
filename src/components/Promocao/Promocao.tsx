import styles from './Promocao.module.css';

function Promocao() {
    return (
        <div className={styles.promocoesBox}>
            <div className={styles.promocaoBox}>
                <div className={styles.imgsBox}>
                    <img src="/produtos/img8.png" alt="" />
                    +
                    <img src="/produtos/img7.png" alt="" />
                </div>
                <div className={styles.promocaoDetalhesBox}>
                    <h2>Buy 1 Get 1 Free !!</h2>
                    <p>*Valid until 18 Januaty 2024</p>
                </div>
                <div className={styles.moreInfo}>
                    <p>More:</p>
                    <div>
                        <img src="https://cdn.awsli.com.br/600x450/250/250759/produto/217266189/img-20211015-wa0070-io3co9xc1n.jpg" alt="" />
                        +
                        <img src="https://m.media-amazon.com/images/I/51wNd95WC2L._AC_.jpg" alt="" />
                        +
                        <img src="https://target.scene7.com/is/image/Target/GUEST_92065801-c6f5-4040-9a29-0ee0c157ca29?wid=488&hei=488&fmt=pjpeg" alt="" />
                    </div>
                </div>
                <div className={styles.shopNow}>
                    <p>Shop</p>
                    <p>Now</p>
                </div>
            </div>
            <div className={styles.promocaoBox2}>
                <h2>GET UP TO 50% OFF</h2>
                <button>Show Now</button>
            </div>
            <div className={styles.promocaoBox3}>
                <img src="animationSale.gif" alt="" />
                <h2>50% OFF!!!</h2>
                <img className={styles.handbag} src="/produtos/img11.png" alt="" />
            </div>
        </div>
    )
}

export default Promocao;
