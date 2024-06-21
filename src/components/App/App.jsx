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
    const updateFeedbackG = () => {
        setClicks.good = (clicks.good + 1);
    };

    const updateFeedbackN= () => {
setClicks.neutral = (clicks.neutral + 1);
    }

    const updateFeedbackB = () => {
        setClicks.bad = (clicks.bad + 1);
    };
      
    return (
        <>
             <Description/>
            <Options name={name.good} value={clicks} onClick={updateFeedbackG('good')}/>
            <Options name={name.neutral}value={clicks.neutral} onClick={updateFeedbackN("neutral")} />
            <Options  name={name.bad}value={clicks.bad} onClick={ updateFeedbackB("bad")} />
            <Feedback value = {value} />
           
    </>
    )
}

export default App;