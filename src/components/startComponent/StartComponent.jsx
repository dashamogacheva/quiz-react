import styles from './StartComponent.module.css'
import react from '../../icons/react.svg';
export const StartComponent = ({t, startGame}) => {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={react} alt="React logo"/>
            <span className={styles.title}>{t('startTitle')}</span>
            <button className={styles.btn}
                    onClick={() => startGame(true)}
            >
                {t("startButton")}
            </button>
        </div>
    );
}