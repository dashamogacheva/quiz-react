import styles from './Result.module.css';
import trophy from '../../icons/trophy.svg';
import maxNine from '../../icons/maxNine.svg';
import maxSeven from '../../icons/maxSeven.svg';
import maxFive from '../../icons/maxFive.svg';
import maxNull from '../../icons/null.svg';
import {questions} from '../../utils/data.js';

export const Result = ({t, correct, restartGame}) => {
    let resultSmile;
    const percentCorrect = Math.round(correct / questions.length * 100);

    if (percentCorrect === 100) {
        resultSmile = trophy;
    }
    if (percentCorrect <= 90) {
        resultSmile = maxNine;
    }
    if (percentCorrect <= 75) {
        resultSmile = maxSeven;
    }
    if (percentCorrect <= 50 && percentCorrect > 0) {
        resultSmile = maxFive;
    }
    if (correct === 0) {
        resultSmile = maxNull;
    }

    return (
        <div className={styles.resultWrapper}>
            <img className={styles.trophyStyle} src={resultSmile} alt="Result img"/>
            <span className={styles.resultText}>
                {t('resultText', {count: correct, questions: questions.length})}
            </span>
            <button className={styles.restartBtn}
                    onClick={() => restartGame()}
            >
                {t('restartButton')}
            </button>
        </div>
    );
}