import { useState } from 'react';
import styles from './Categorias.module.css';

interface CategoriasProps {
    handleCategorias: (categoria: string) => void
}

function Categorias({ handleCategorias }: CategoriasProps) {
    const [btnSelected, setBtnSelected] = useState<string>('');

    function handleClick(categoria: string){
        setBtnSelected(categoria);
        handleCategorias(categoria);
    };

    return (
        <div className={styles.categoriasBox}>
            <ul>
                <li className={btnSelected === '' ? styles.btnSelected : ''} onClick={() => handleClick('')}>All items</li>
                <li className={btnSelected === 'Shoes' ? styles.btnSelected : ''} onClick={() => handleClick('Shoes')}>Shoes</li>
                <li className={btnSelected === 'Accessories' ? styles.btnSelected : ''} onClick={() => handleClick('Accessories')}>Accessories</li>
                <li className={btnSelected === 'Bag' ? styles.btnSelected : ''} onClick={() => handleClick('Bag')}>Bag</li>
                <li className={btnSelected === 'T-Shirt' ? styles.btnSelected : ''} onClick={() => handleClick('T-Shirt')}>T-Shirt</li>
                <li className={btnSelected === 'Jacket' ? styles.btnSelected : ''} onClick={() => handleClick('Jacket')}>Jacket</li>
                <li className={btnSelected === 'Glasses' ? styles.btnSelected : ''} onClick={() => handleClick('Glasses')}>Glasses</li>
            </ul>
        </div>
    );
}

export default Categorias;
