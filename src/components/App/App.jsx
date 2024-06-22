import { useState } from "react";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Description from "../Description/Description.jsx";
import value from "../value.json";



const App = () => {

    const [clicks, setClicks] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    }
    )
    const updateFeedback = (feedbackType) => {
        setClicks({ ...clicks, [feedbackType]: clicks[feedbackType] + 1 });
    }
        return (
            <>
                <Description />
                <Options  onclick={() => { updateFeedback()}} />
                <Feedback value={value} />
           
            </>
        )
    
}
export default App;