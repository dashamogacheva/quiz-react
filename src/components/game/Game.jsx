import styles from './Game.module.css';
import { questions } from '../../utils/data.js'
export const Game = () => {
    return (
      <div className={styles.container}>
          <div className={styles.progress}>
              <div style={{width: '60%'}} className={styles.progressBar}></div>
          </div>
          <span className={styles.question}>Что такое useState?</span>
          <ul>
              <li>Это функция для хранения данных компонена</li>
              <li>Это глобальный стейт</li>
              <li>Функция для использования статических переменных</li>
              <li>Библиотека для логирования ошибок</li>
          </ul>
      </div>
    );
}