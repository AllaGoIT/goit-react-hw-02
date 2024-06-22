import name from "../name.json"
const Options = ({updateFeedback }) => {

    return (
        <>
            <button name={name.good} onClick={() => {updateFeedback("good")}}>Good</button>
            <button name={name.neutral}onClick={() => {updateFeedback("neutral")}}>Neutral</button>
            <button name={name.bad} onClick={() => {updateFeedback("bad")}}>Bad</button>
        </>
    )
}

export default Options;
