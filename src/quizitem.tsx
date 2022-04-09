import { useState } from 'react'
import { Answer } from './Answer'

export interface IQuizItem {
  question: string;
  answer: string;
  corAnswer: number;
  options: { value: string }[]
}

export function QuizItem(props: IQuizItem) {
  const [isAnswerVisible, setVisible] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);
  const [clickedNum, setClickedNum] = useState<number>()
  const isDisabled = isAnswerVisible;


  function isAnswerCorrect(answerNum: number) {
    if (isDisabled) {
      return
    }
    props.corAnswer === answerNum ? showRigthAnswer() : showWrongAnswer()
    setClickedNum(answerNum)
  }

  function showRigthAnswer() {
    if (isDisabled) return;
    setIsCorrect(true)
    setVisible(true)
  }
  function showWrongAnswer() {
    if (isDisabled) return;
    setIsCorrect(false)
    setVisible(true)
  }

  const right = 'Верно!';
  const wrong = 'Не верно!';

  return (
    <div>
      <p>{props.question}</p>
      {
        props.options.map((item, ind) =>
          <Answer
            key={item.value}
            rAnswer={props.corAnswer}
            option={item.value}
            funOnClick={isAnswerCorrect}
            index={ind + 1}
            isDisabled={isDisabled}
            clickedNum={clickedNum}
          />
        )
      }
      <div>
        {isAnswerVisible ?
          <div>
            <p> {isCorrect ? right : wrong} </p>
            <p className="answer-comment">{props.answer}</p>
          </div>
          : null}
      </div>
    </div>
  )
}