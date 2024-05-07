import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Comentario.module.css';
import { faReply, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

interface Comentario {
    qualidade: string,
    imagem_perfil: string,
    nome: string
}

interface ComentarioProps {
    comentario: Comentario
}

function Comentario({ comentario }: ComentarioProps) {
    return (
        <div className={styles.comentarioContainer}>
            <img className={styles.logoUsuario} src="/logoUserClient.png" alt="" />
            <div className={styles.infoCommentBox}>
                <h3>{comentario.nome}</h3>
                <div className={styles.comment}>
                    <label htmlFor="">
                        <img src="stars.webp" alt="" /> 3 semanas atrás
                    </label>
                    <p>{comentario.qualidade}</p>
                </div>
                <div className={styles.interacaoComentarioBox}>
                    <p><FontAwesomeIcon icon={faReply} /> Responder</p>
                    <p><FontAwesomeIcon icon={faThumbsUp} /> Like</p>
                </div>
            </div>
        </div>
    )
}

export default Comentario;
