import React, { useContext } from "react";
import { Store } from "../../context/AppContext";
import { calculateResult } from "../../utils/utilities";
import styles from './finish.module.css'
export default function Finish({ correctAnswers, totalQuestions }) {
    const { chosenAnswers } = useContext(Store);
    const marks = calculateResult(correctAnswers, chosenAnswers)
    const reult = marks / 100 * 100

    console.log('reult', reult, marks)
    return (
        <div className={styles.finishContainer} id="finish">

            <h3 className={styles.greetings}>{reult > 50 ? 'Well Done !' : "You need more practice"}</h3>
            <h2>
                Your Score is : {reult}%{" "}

            </h2>
            <div className={styles.scoreInfo}>
                <div>Total number of Questions : </div>
                <div>{totalQuestions}</div>
            </div>
            <div className={styles.scoreInfo}>
                <div>Number of correct answer : </div>
                <div>{marks}</div>
            </div>
            <div className={styles.scoreInfo}>
                <div>Number of wrong answer : </div>
                <div>{totalQuestions - marks}</div>
            </div>
        </div>
    );

}
