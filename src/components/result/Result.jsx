import styles from './Result.module.css';
import trophy from '../../icons/trophy.svg';

export const Result = () => {
    return (
        <div className={styles.resultWrapper}>
            <img className={styles.trophyStyle} src={trophy} alt="Result img"/>
            <span className={styles.resultText}>Вы ответили правильно на все вопросы!</span>
            <button className={styles.restartBtn}>
                Попробовать снова
            </button>
        </div>
    );
}