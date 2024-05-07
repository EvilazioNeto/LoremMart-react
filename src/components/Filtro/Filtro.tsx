import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Filtro.module.css';
import { faMars, faSort, faVenus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function Filtro() {
    const [btnSelected, setBtnSelected] = useState<string>('Men');
    const hora = new Date().getHours();
    const [saudacao, setSaudacao] = useState<string>('Good Morning')

    useEffect(() => {
        if (hora >= 5 && hora <= 12) {
            setSaudacao('Good Morning');
        } else if (hora > 12 && hora <= 18) {
            setSaudacao('Good Afternoon');
        } else {
            setSaudacao('Good Night');
        }
    }, []);
    

    return (
        <div className={styles.filtrosBox}>
            <h1 className={styles.saudacaoTitle}>
                {saudacao} <span>Evilazio!</span>
            </h1>
            <div className={styles.filtros}>
                <div className={styles.generoBox}>
                    <button className={btnSelected === 'Men' ? styles.btnSelected : ''} onClick={() => setBtnSelected('Men')}><FontAwesomeIcon icon={faMars} /> Men</button>
                    <button className={btnSelected === 'Women' ? styles.btnSelected : ''} onClick={() => setBtnSelected('Women')}><FontAwesomeIcon icon={faVenus} /> Women</button>
                </div>
                <div>
                    <select name="" id="">
                        <option value="">Sort By</option>
                        <option value="">Preço</option>
                        <option value="">Data</option>
                        <option value="">Relevância</option>
                    </select>
                    <button><FontAwesomeIcon icon={faSort} /> Filter</button>
                </div>
            </div>
        </div>
    )
}

export default Filtro;
