import { useState } from "react";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Description from "../Description/Description.jsx";
import name from "../name.json";
import value from "../value.json";

const App = () => { 

    const [clicks, setClicks] = useState ({
	good: 0,
	neutral: 0,
	bad: 0
    }
         )
    const handleClickGood = () => {
        setClicks.good = (clicks + 1);
    };

    const handleClickNeutral = () => {
setClicks.neutral = (clicks.neutral + 1);
    }

    const handleClickBad = () => {
        setClicks.bad = (clicks.bad + 1);
    };
      
    return (
        <>
             <Description/>
            <Options name={name.good} value={clicks} onUpdate={handleClickGood}/>
            <Options name={name.neutral}value={clicks.neutral} onUpdate={handleClickNeutral} />
            <Options  name={name.bad}value={clicks.bad} onUpdate={handleClickBad} />
            <Feedback value = {value} />
           
    </>
    )
}

export default App;