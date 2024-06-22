import { useState } from "react";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Description from "../Description/Description.jsx";
import Notification from "../Notification/Notification.jsx"

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

    const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
    

        return (
            <>
                <Description />
                <Options  onclick={updateFeedback} />
                <Feedback value={clicks} sum={totalFeedback} {{ clicks } === 0 ? { Notification } : {}} />
                <Notification/>
           
            </>
        )
    
}
export default App;