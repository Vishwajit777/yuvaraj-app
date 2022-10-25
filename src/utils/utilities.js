export function handleChosenAnswer(element, parentIndex, chosenAnswers, ans) {
  const selectedAnswerInt = ans;
  let updatedAnswers = [...chosenAnswers];
  updatedAnswers[parentIndex] = selectedAnswerInt;
  return updatedAnswers;
}

export function calculateResult(correctAnswers, chosenAnswers) {
  let result = 0;
  correctAnswers.forEach((correctAnswer, index) => {
    if (chosenAnswers[index] === correctAnswer) result++;
  });
  return result;
}

export function scrollToElem(elemId) {
  const elem = document.getElementById(elemId);
  elem && elem.scrollIntoView({ behavior: "smooth" });
}
