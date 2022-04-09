import { QuizItem } from './quizitem'
import { Form } from './NewQuestionForm'
import { Router, Link, RouteComponentProps } from '@reach/router';
import { useState } from 'react'

const initialQuizItems = [
  {
    question: "Кто из президентов США написал свой собственный рассказ про Шерлока Холмса?",
    options: [
      { value: "Джон Кеннеди" },
      { value: "Франклин Рузвельт" },
      { value: "Рональд Рейган" }
    ],
    answer: "32-й президент США Франклин Рузвельт был известен и как писатель. В 1945 году он попытался воскресить образ знаменитого литературного героя, написав сочинение «Бейкер-стрит фолио: пять записок о Шерлоке Холмсе от Франклина Делано Рузвельта».",
    corAnswer: 2
  },
  {
    question: "Какую пошлину ввели в XII  веке в Англии для того чтобы заставить мужчин пойти на войну?",
    options: [
      { value: "Налог на тунеядство" },
      { value: "Налог на трусость" },
      { value: "Налог на отсутствие сапог" }
    ],
    answer: "Англичанам приходилось платить налог на трусость. Им облагали всех, кто не желал принимать участие в войнах во славу короля.",
    corAnswer: 2
  },
]

interface IHome extends RouteComponentProps {
  quizitems: {
    question: string,
    answer: string,
    corAnswer: number,
    options: { value: string }[]
  }[]
}

let Home = (props: IHome) => {
  return <>{
    props.quizitems.map((item, ind) =>
      <QuizItem
        key={item.question}
        question={item.question}
        options={item.options}
        answer={item.answer}
        corAnswer={item.corAnswer}
        qIndex={ind}
      />
    )
  }</>
}

function App() {
  if (localStorage.getItem('localStorageQuizItems') === null) {
    localStorage.setItem('localStorageQuizItems', JSON.stringify(initialQuizItems))
  }

  let quizitemsFromLocalStorage = JSON.parse(localStorage.getItem('localStorageQuizItems') || '')
  let [quizitems, setQuizitems] = useState(quizitemsFromLocalStorage);

  return (
    <div className="App">
      <h1>QUIZ!</h1>
      <nav>
        <Link className="nav-link" to="/quiz/">Home</Link> |{" "}
        <Link className="nav-link" to="/quiz/new">Add new question</Link>
      </nav>

      <Router>
        <Home path="/quiz/"
          quizitems={quizitems}
        />
        <Form path="/quiz/new"
          quizitems={quizitems}
          setNewQuizItems={setQuizitems}
        />
      </Router>
    </div>
  )
}

export default App
