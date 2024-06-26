import name from "../name.json";
import css from "./Options.module.css"
const Options = ({onclick, onUpdate, total}) => {

    return (
        <div className={css.container}>
            <button name={name.good} onClick={() => {onclick("good")}}>Good</button>
            <button name={name.neutral}onClick={() => {onclick("neutral")}}>Neutral</button>
            <button name={name.bad} onClick={() => { onclick("bad") }}>Bad</button>
            {total > 0 && <button onClick= {()=>{onUpdate()}}>Reset</button>}
            
        </div>
    )
}

export default Options;
