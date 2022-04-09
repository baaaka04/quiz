
interface IAnswer {
    option: string;
    rAnswer: number;
    funOnClick: Function;
    index: number;
    isDisabled: boolean,
    clickedNum?: number
}

function getColor(isClicked: boolean, answer: number, rightAnswer: number, clickedAnswer?: number) {
    if (!isClicked) {
        return ''
    }
    if (answer === rightAnswer) {
        return 'green'
    }
    if (answer === clickedAnswer && clickedAnswer !== rightAnswer) {
        return 'red'
    }
}

export function Answer(props: IAnswer) {

    const colorClass = getColor(props.isDisabled, props.index, props.rAnswer, props.clickedNum)

    return (
        <div className={`answer ${colorClass}`} onClick={() => props.funOnClick(props.index)}>
            {props.index}. {props.option}
        </div>
    )
}
