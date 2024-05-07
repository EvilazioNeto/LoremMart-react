// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.css'
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header>
            <div className={styles.divLogo}>
                <img className={styles.logo} src="https://www.semesb.com.br/wp-content/uploads/2019/10/cropped-logo-fundo-transparente.png" alt="" />
                <h2>LoremMart</h2>
            </div>
            <div className={styles.searchBox}>
                <select name="" id="">
                    <option value="">São Paulo, Brasil</option>
                    <option value="">Sergipe, Brasil</option>
                    <option value="">Bahia, Brasil</option>
                    <option value="">Minas Gerais, Brasil</option>
                </select>
                <input type="text" placeholder='Search' />
                {/* <span className={styles.searchIcon}>
                    <FontAwesomeIcon icon={faSearch} />
                </span> */}
                <button>SEARCH</button>
            </div>
            <div className={styles.userImgBox}>
                <img className={styles.userImg} src="https://d128mjo55rz53e.cloudfront.net/media/images/blog-breed-munchkin_2.max-400x400.format-jpeg.jpg" alt="" />
            </div>
        </header>
    )
}

export default Header;
