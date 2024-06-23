const Feedback = ({ value, total,feedbackpos }) => {
    return (
        <>
            <p >Good:{value.good}</p>
            <p>Neutral:{ value.neutral}</p>
            <p>Bad:{value.bad}</p>
            <p>Total:{total}</p>
            <p>Positive:{feedbackpos}%</p>
        
        </>
    )
};
export default Feedback;