import '../App.css'
// import { useEffect } from 'react'

export default function LogCard(props) {

    
    const { 
        logID,
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
        fourSetThree,
        fetchLog
        } = props 


        function deleteLog(event){
            event.preventDefault()
            fetch('http://localhost:3001/log', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ logID: logID})
            })
            .then(response => response.json())
            .then(result => console.log(result))
            fetchLog()
        }

    return(
        <div className="log-card">
            <div className="log-lift-date">
                <h3 className="log-lift">{lift.toUpperCase()}</h3>
                <div className="log-date">{date}</div>
                <button className="button-light" onClick={deleteLog} >Delete</button>
            </div>
            <div className="log-week">
                <h4>Week 1:</h4>
                    <div>Set 1: {oneSetOne} lbs x 5</div>
                    <div>Set 2: {oneSetTwo} lbs x 5</div>
                    <div>Set 3: {oneSetThree} lbs x 5+</div>
            </div>
            <div className="log-week">
                <h4>Week 2:</h4>
                    <div>Set 1: {twoSetOne} lbs x 3</div>
                    <div>Set 2: {twoSetTwo} lbs x 3</div>
                    <div>Set 3: {twoSetThree} lbs x 3+</div>
            </div>
            <div className="log-week">
                <h4>Week 3:</h4>
                    <div>Set 1: {threeSetOne} lbs x 5</div>
                    <div>Set 2: {threeSetTwo} lbs x 3</div>
                    <div>Set 3: {threeSetThree} lbs x 1+</div>
            </div>
            <div className="log-week">
                <h4>Week 4:</h4>
                    <div>Set 1: {fourSetOne} lbs x 5</div>
                    <div>Set 2: {fourSetTwo} lbs x 5</div>
                    <div>Set 3: {fourSetThree} lbs x 5</div>
            </div>
        </div>
    )
}