import React, { Fragment } from "react";
import { useAppContext } from "../../context/AppContext";
import { handleChosenAnswer } from "../../utils/utilities";
import styles from './answer.module.css'

export default function Answers({ result, parentIndex }) {
    const combinedAnswers = [...result.incorrect_answers, result.correct_answer];
    combinedAnswers.sort(); // Sort to alphabetical order
    const { chosenAnswers, setChosenAnswers } = useAppContext();

    return combinedAnswers.map((answer, index) => (
        <Fragment key={index}>
            <button
                name={`question-${parentIndex}`}
                // style={
                //     chosenAnswers[parentIndex] === answer ? { background: "green" } : null
                // }
                onClick={(element) => {
                    setChosenAnswers(
                        handleChosenAnswer(element, parentIndex, chosenAnswers, answer)
                    );
                }}
                value={index}
                key={index}
                className={chosenAnswers[parentIndex] === answer ? styles.activeButton : styles.button}
            >
                {" "}
                {answer}
            </button>

            {/* <br /> */}
        </Fragment>
    ));
}