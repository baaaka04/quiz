
interface IAnswer {
    option: string;
    rAnswer: number;
    funOnClick: Function;
    index: number;
    isDisabled: boolean,
    qIndex: number
}

export function Answer(props: IAnswer) {
    return (
        <div>
            <input disabled={props.isDisabled} id={"q" + props.qIndex + "a" + props.index} type="radio" onClick={() => props.funOnClick(props.index)} />
            <label htmlFor={"q" + props.qIndex + "a" + props.index}>{props.index}.{props.option}</label>
        </div>
    )
}