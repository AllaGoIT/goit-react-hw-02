const Feedback = ({ value }) => {
    return (
        <>
            <p >Good:{value.good}</p>
            <p>Neutral:{ value.neutral}</p>
            <p>Bad:{ value.bad}</p>
        
        </>
    )
};
export default Feedback;