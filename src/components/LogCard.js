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
            <div>
                <h3 className="log-lift">{lift.toUpperCase()}</h3>
                <h4 className="log-date">{date}</h4>
            </div>
            <div className="log-week">
                <h4>Week 1:</h4>
                    <h6>Set 1: {oneSetOne} lbs x 5</h6>
                    <h6>Set 2: {oneSetTwo} lbs x 5</h6>
                    <h6>Set 3: {oneSetThree} lbs x 5+</h6>
            </div>
            <div className="log-week">
                <h4>Week 2:</h4>
                    <h6>Set 1: {twoSetOne} lbs x 3</h6>
                    <h6>Set 2: {twoSetTwo} lbs x 3</h6>
                    <h6>Set 3: {twoSetThree} lbs x 3+</h6>
            </div>
            <div className="log-week">
                <h4>Week 3:</h4>
                    <h6>Set 1: {threeSetOne} lbs x 5</h6>
                    <h6>Set 2: {threeSetTwo} lbs x 3</h6>
                    <h6>Set 3: {threeSetThree} lbs x 1+</h6>
            </div>
            <div className="log-week">
                <h4>Week 4:</h4>
                    <h6>Set 1: {fourSetOne} lbs x 5</h6>
                    <h6>Set 2: {fourSetTwo} lbs x 5</h6>
                    <h6>Set 3: {fourSetThree} lbs x 5</h6>
            </div>
        </div>
    )
}