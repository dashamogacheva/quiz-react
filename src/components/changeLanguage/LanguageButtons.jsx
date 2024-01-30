import styles from './LanguageButtons.module.css';

export const LanguageButtons = ({changeLanguage}) => {
    return (
        <div className={styles.container}>
            <button className={styles.btn}
                    onClick={() => changeLanguage("en")}
            >
                EN
            </button>
            <button className={styles.btn}
                    onClick={() => changeLanguage("ru")}
            >
                RU
            </button>
        </div>
    );
}