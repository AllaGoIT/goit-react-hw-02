import name from "../name.json"
const Options = ({onclick, onUpdate, total}) => {

    return (
        <>
            <button name={name.good} onClick={() => {onclick("good")}}>Good</button>
            <button name={name.neutral}onClick={() => {onclick("neutral")}}>Neutral</button>
            <button name={name.bad} onClick={() => { onclick("bad") }}>Bad</button>
            {total > 0 && <button onClick= {()=>{onUpdate}}>Reset</button>}
            
        </>
    )
}

export default Options;
