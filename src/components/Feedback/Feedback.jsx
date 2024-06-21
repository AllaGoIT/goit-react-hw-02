const Feedback = ({ value }) => {
    return (
        <>
            <p>{value.good }</p>
            <p>{ value.neutral}</p>
            <p>{ value.bad}</p>
        
        </>
    )
};
export default Feedback;