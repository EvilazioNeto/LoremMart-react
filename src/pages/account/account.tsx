import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './account.module.css';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Account() {
    const [firstName, setFirstName] = useState<string>('Evilazio');
    const [lastName, setLastName] = useState<string>('da Silva Neto');
    const [phone, setPhone] = useState<string>('(79) 99837-4115');
    const [dateOfBirth, setDateOfBirth] = useState<string>('2001-12-13');
    const [gender, setGender] = useState<string>('Male');
    const [email, setEmail] = useState<string>('evilazioneto943@gmail.com');
    const [cpf, setCpf] = useState<string>('000.777.111-00');
    const [rg, setRg] = useState<string>('123456789');

    const [usuario, setUsuario] = useState({
        "nome": `${firstName} ${lastName}`,
        "phone": phone,
        "DateofBirth": dateOfBirth,
        "gender": gender,
        "email": email,
        "cpf": cpf,
        "rg": rg
    })

    function handleSave(){
        let confirmar = confirm("Deseja alterar os dados?")
        if(confirmar){
            setUsuario({
                "nome": `${firstName} ${lastName}`,
                "phone": phone,
                "DateofBirth": dateOfBirth,
                "gender": gender,
                "email": email,
                "cpf": cpf,
                "rg": rg
            })
        }
    }

    return (
        <main className={styles.accountContainer}>
            <article className={styles.userBox}>
                <div className={styles.fotoUsuarioBox}>
                    <div>
                        <img src="userImgEx.jpg" alt="" />
                        <FontAwesomeIcon icon={faPen} />
                    </div>
                    <div>
                        <h2>{usuario.nome}</h2>
                        <p>Date of Birth: {usuario.DateofBirth}</p>
                        <p>Phone: {usuario.phone}</p>
                        <p>Email: {usuario.email}</p>
                        <p>CPF: {usuario.cpf}</p>
                        <p>RG: {usuario.rg}</p>
                        <p>
                            Github: <Link target='_blank' to="https://github.com/EvilazioNeto">
                                https://github.com/EvilazioNeto
                            </Link>
                        </p>
                    </div>
                </div>
                <div className={styles.editarPerfilBox}>
                    <h2>Edit Profile</h2>
                    <div className={styles.inputsBox}>
                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder='First Name' />
                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder='Last Name' />
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder='Phone' />
                        <input value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} type="date" placeholder='Date of Birth' />
                        <select value={gender} onChange={(e) => setGender(e.target.value)} name="" id="">
                            <option value="">Male</option>
                            <option value="">Female</option>
                        </select>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' />
                        <input value={cpf} onChange={(e) => setCpf(e.target.value)} type="text" placeholder='CPF' />
                        <input value={rg} onChange={(e) => setRg(e.target.value)} type="text" placeholder='RG' />
                    </div>
                </div>
                <div className={styles.btnBox}>
                    <button onClick={handleSave}>SAVE</button>
                    <button>LOGOUT</button>
                </div>
            </article>
        </main>
    )
}

export default Account;
