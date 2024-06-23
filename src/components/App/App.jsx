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
   const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);


    const upDateState = () => {
        setClicks({clicks})
    }

        return (
            <>
                <Description />
                <Options onclick={updateFeedback} onUpdate = {upDateState} total = {totalFeedback} />
                {totalFeedback > 0 ? <Feedback value={clicks} total ={totalFeedback} feedbackpos={positiveFeedback} /> : <Notification />}
            </>
        )
    
}
export default App;