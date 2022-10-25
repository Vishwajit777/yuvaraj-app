import React, { useState, useEffect } from "react";
// - Helpers
import {
  scrollToElem,
} from "./utils/utilities";
import { Store } from "./context/AppContext";
import Button from './components/button/Button'
// import data from "./data.json";
import Start from "./components/start/Start";
import Finish from "./components/finish/Finish";
import Answers from "./components/answers/Answers";
import axios from "axios";
import styles from './app.module.css'



export default function App() {
  const [chosenAnswers, setChosenAnswers] = useState([]);
  const [data, setData] = useState([])
  const totalQuestions = data?.results?.length;
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 👇️ push to end of state array
  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=20').then((res) => {
      if (res.status) {
        setData(res.data)
        res.data.results.map((item) => {
          setCorrectAnswers(current => [...current, item.correct_answer]);
        })
      }
    })


  }, [])


  return (
    <Store.Provider value={{ chosenAnswers, setChosenAnswers }}>
      <div className={styles.mainContainer}>
        {!isSubmitted ?
          <>
            <Start />

            {data?.results?.map((result, index) => {
              return (
                <section id={`question-${index}`} className={styles.questionSection} key={index}>
                  <span className={styles.count}>{index+1} of {data?.results?.length}</span>
                  <h3 style={{ width: '80%', textAlign: "center" }}>
                    {index + 1}. {result.question}
                  </h3>
                  <div className={styles.optionsContainer}>
                    <Answers result={result} parentIndex={index} />
                  </div>
                  <section className={styles.buttonContainer} style={{ display: "flex" }}>

                    <Button
                      text="prev"
                      disabled={index === 0}
                      func={() => scrollToElem(`question-${index - 1}`)}
                      customClass={styles.prev}
                    />


                    <Button
                      text="next"
                      disabled={index === totalQuestions - 1}
                      func={() => scrollToElem(`question-${index + 1}`)}
                      customClass={styles.next}

                    />


                    <Button text="finish"
                      func={() => setIsSubmitted(true)}

                      customClass={styles.finish}
                      disabled={index === totalQuestions - 1}
                    />


                  </section>
                </section>
              );
            })};
          </>
          : <Finish correctAnswers={correctAnswers} totalQuestions={totalQuestions} />}
      </div>
    </Store.Provider>
  );
}








