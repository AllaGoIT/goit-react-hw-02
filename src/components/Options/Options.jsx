import name from "../name.json"
const Options = ({onclick }) => {

    return (
        <>
            <button name={name.good} onClick={() => {onclick("good")}}>Good</button>
            <button name={name.neutral}onClick={() => {onclick("neutral")}}>Neutral</button>
            <button name={name.bad} onClick={() => {onclick("bad")}}>Bad</button>
        </>
    )
}

export default Options;
