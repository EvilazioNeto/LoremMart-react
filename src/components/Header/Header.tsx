// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.css'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
    handleSidebar: () => void;
}

function Header({ handleSidebar }: HeaderProps) {
    return (
        <header>
            <div className={styles.divLogo}>
                <Link to="/">
                    <img className={styles.logo} src="/logo.png" alt="" />
                    <h2>LoremMart</h2>
                </Link>
            </div>
            <FontAwesomeIcon onClick={() => handleSidebar()} className={styles.barsBtnMobile} icon={faBars} />
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
                <Link to="/carrinho">
                    <FontAwesomeIcon className={styles.addToCartBtn} icon={faCartShopping}/>
                </Link>
                <Link to="/account">
                    <img className={styles.userImg} src="/userImgEx.jpg" alt="" />
                </Link>
            </div>
        </header>
    )
}

export default Header;
