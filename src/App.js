import './App.css';
import Result from "./components/result";
import Game from "./components/game";
import {useState} from "react";
import {questions} from './utils/data'
import {StartComponent} from "./components/startComponent/StartComponent";
import {LanguageButtons} from "./components/changeLanguage/ChangeLanguage";
import {useTranslation} from "react-i18next";

function App() {
    const [isStartGame, setIsStartGame] = useState(false);
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const {t, i18n} = useTranslation();
    const question = questions[step];
    const currentLanguage = i18n.language;

    function changeLanguage(language) {
        i18n.changeLanguage(language);
    }

    function handleStartGame(isStart) {
        setIsStartGame(isStart);
    }

    function handleClickStep(index) {
        setStep(step + 1);
        if (index === question.correct) {
            setCorrect(correct + 1);
        }
    }

    function restartGame() {
        setStep(0);
        setCorrect(0);
    }

    return (
        <div className="App">
            <LanguageButtons changeLanguage={changeLanguage}/>
            {
                isStartGame ? (
                    step === questions.length ?
                        <Result t={t}
                                correct={correct}
                                restartGame={restartGame}
                        /> :
                        <Game t={t}
                              step={step}
                              question={question[currentLanguage]}
                              handleClickStep={handleClickStep}
                        />
                ) : <StartComponent t={t}
                                    startGame={handleStartGame}/>
            }
        </div>
    );
}

export default App;
