import styles from './Game.module.css';
import {questions} from '../../utils/data.js';

export const Game = ({t, step, question, handleClickStep}) => {
    const percent = Math.round(step / questions.length * 100);
    return (
        question ? (
            <div>
                <div className={styles.progress}>
                    <div style={{width: `${percent}%`}} className={styles.progressBar}></div>
                </div>
                <span className={styles.question}>{question.title}</span>
                <ul>
                    {question.variants.map((variant, index) => (
                        <li key={variant} onClick={() => handleClickStep(index)}>
                            {variant}
                        </li>
                    ))}
                </ul>
            </div>
        ) : (
            <span className={styles.errorMessage}>
                {t("errorMessage")}
            </span>
        )
    );
}