import React from "react";
import { scrollToElem } from "../../utils/utilities";
import Button from "../button/Button";
import styles from './start.module.css'

export default function Start() {
    return (
        <section className={styles.titleContainer} id="start">
            <h1 className={styles.title}>Quiz App</h1>
            {/* <h2>How much you know about them?</h2> */}
            <Button text="Let's go!" func={() => scrollToElem("question-0")} customClass={styles.button} />
        </section>
    );
}