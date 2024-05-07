import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Sidebar.module.css';
import { faArrowRight, faBox, faBurst, faGear, faHouse, faPhone, faShuffle, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [btnSelected, setBtnSelected] = useState<string>('home');

    const handleButtonClick = (buttonName: string) => {
        setBtnSelected(buttonName);
    };
    return (
        <aside className={styles.sidebar}>
            <div className={styles.optionsContainer}>
                <ul>
                    <li>
                        <Link onClick={() => handleButtonClick('home')}
                            className={btnSelected === 'home' ? styles.btnSelected : ''} to="/">
                            <FontAwesomeIcon icon={faHouse} /> Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => handleButtonClick('bestOffer')}
                            className={btnSelected === 'bestOffer' ? styles.btnSelected : ''} to="/bestOffer">
                            <FontAwesomeIcon icon={faBurst} /> Best Offer
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => handleButtonClick('product')}
                            className={btnSelected === 'product' ? styles.btnSelected : ''} to="/">
                            <FontAwesomeIcon icon={faBox} /> Product
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => handleButtonClick('trackOrder')}
                            className={btnSelected === 'trackOrder' ? styles.btnSelected : ''} to="/trackOrder">
                            <FontAwesomeIcon icon={faShuffle} /> Track Order
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => handleButtonClick('contact')}
                            className={btnSelected === 'contact' ? styles.btnSelected : ''} to="/contact">
                            <FontAwesomeIcon icon={faPhone} /> Contact
                        </Link>
                    </li>
                </ul>
                <div className={styles.trendProductsBox}>
                    <img className={styles.trendImg} src="boom.png" alt="" />
                    <h2>Trend<br />Products</h2>
                    <img className={styles.shoe} src="shoeSale.png" alt="" />
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div className={styles.accountBox}>
                    <ul>
                        <li>
                            <Link onClick={() => handleButtonClick('account')}
                                className={btnSelected === 'account' ? styles.btnSelected : ''} to="/account">
                                <FontAwesomeIcon icon={faUser} /> Account
                            </Link>
                        </li>

                        <li>
                            <Link onClick={() => handleButtonClick('settings')}
                                className={btnSelected === 'settings' ? styles.btnSelected : ''} to="/settings">
                                <FontAwesomeIcon icon={faGear} /> Settings
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;
