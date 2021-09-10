import '../App.css'

export default function LogCard(props) {

    const { 
        lift, 
        date, 
        oneSetOne,
        oneSetTwo,
        oneSetThree,
        twoSetOne,
        twoSetTwo,
        twoSetThree,
        threeSetOne,
        threeSetTwo,
        threeSetThree,
        fourSetOne,
        fourSetTwo,
        fourSetThree
        } = props 

    return(
        <div className="log-card">
            <h3 className="log-lift">{lift}</h3>
            <h4 className="log-date">{date}</h4>
            <div className="log-week">
                <h4>Week 1:</h4>
                    <h5>1: {oneSetOne}</h5>
                    <h5>2: {oneSetTwo}</h5>
                    <h5>3: {oneSetThree}</h5>
            </div>
            <div className="log-week">
                <h4>Week 2:</h4>
                    <h5>1: {twoSetOne}</h5>
                    <h5>2: {twoSetTwo}</h5>
                    <h5>3: {twoSetThree}</h5>
            </div>
            <div className="log-week">
                <h4>Week 3:</h4>
                    <h5>1: {threeSetOne}</h5>
                    <h5>2: {threeSetTwo}</h5>
                    <h5>3: {threeSetThree}</h5>
            </div>
            <div className="log-week">
                <h4>Week 4:</h4>
                    <h5>1: {fourSetOne}</h5>
                    <h5>2: {fourSetTwo}</h5>
                    <h5>3: {fourSetThree}</h5>
            </div>

        </div>
    )
}