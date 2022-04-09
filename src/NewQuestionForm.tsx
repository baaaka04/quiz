import { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { IQuizItem } from './quizitem';
import { toast, Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IForm extends RouteComponentProps {
    quizitems: IQuizItem[],
    setNewQuizItems: (params: Omit<IQuizItem, "qIndex">[]) => void
}


export function Form(props: IForm) {
    let [inputQuestion, setQuestion] = useState<string>('');
    let [inputAnswer, setAnswer] = useState('');
    let [inputNum, setNum] = useState('');
    let [opts, setOpts] = useState([{
        value: ''
    }]);

    function resetForm() {
        setQuestion('');
        setAnswer('');
        setNum('');
        setOpts([{ value: '' }]);
    }


    function onChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
        let newOpts = opts.map((opt, i) =>
            index === i
                ? { ...opt, value: e.target.value }
                : opt
        )

        if (newOpts[newOpts.length - 1].value !== '') {
            newOpts.push({ value: '' })
        }
        setOpts(newOpts)
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        let newQuizItem = {
            question: inputQuestion,
            options: opts.slice(0, -1),
            answer: inputAnswer,
            corAnswer: Number(inputNum),
        }
        props.setNewQuizItems([...props.quizitems, newQuizItem]);
        localStorage.setItem('localStorageQuizItems', JSON.stringify([...props.quizitems, newQuizItem]));
        resetForm();
        toast.success("Новый Quiz добавлен!")
    }

    return (
        <form onSubmit={handleSubmit}>

            <div>
                <p>Вопрос</p>
                <input type="text" name="question" value={inputQuestion} onChange={(e) => setQuestion(e.target.value)} />
                <p>Варианты ответа</p>

                <div>
                    {opts.map((opt, i) => <div key={i}>
                        <input type="text" name="options" value={opt.value} onChange={e => onChange(e, i)} />
                    </div>
                    )}
                </div>

                <p>Ответ</p>
                <input type="text" name="answer" value={inputAnswer} onChange={(e) => setAnswer(e.target.value)} />
                <p>Номер верного ответа</p>
                <input type="number" name="answerNumber" value={inputNum} onChange={(e) => setNum(e.target.value)} />
                <div>
                    <button type="submit">Добавить</button>
                </div>

                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}
                    transition={Flip}
                />

            </div>
        </form>
    )
}