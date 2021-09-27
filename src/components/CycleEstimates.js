import { useState } from 'react'
import { useSelector } from 'react-redux'
import '../App.css'



export default function CycleEstimates(props){


    const { roundForPlates, fetchLog, retrievedLog } = props


    let accountLoggedStatus = useSelector(state => state.loggedIn)
    let loggedInUser = useSelector(state => state.user)


    const [maxWeight, setMaxWeight] = useState(0)
    const [lift, setLift] = useState("ie: Deadlift")
    const [startDate, setStartDate] = useState("")
    const [message, setMessage] = useState('')


    const handleMaxChange = (event) => {
        setMaxWeight(event.target.value)
    }

    const handleLiftChange = (event) => {
        setLift(event.target.value)
    }

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value)
    }

    function handleMessage(message){
        return <h5>{message}</h5>
    }


    const handleCycleSubmission = (event) => {
        event.preventDefault()
        fetch('http://localhost:3001/log', { 
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: loggedInUser,
                    lift: lift, 
                    weight: maxWeight,
                    startDate: startDate, 
                    targets: {
                        weekOne: weekOne(maxWeight),
                        weekTwo: weekTwo(maxWeight),
                        weekThree: weekThree(maxWeight),
                        weekFour: weekFour(maxWeight)
                    }
                })
            })
            .then(response => response.json())
            .then(results => setMessage(results))
            setTimeout(fetchLog, 500)
    }


    function weekOne(max){
        let weekOneTargets = []

        weekOneTargets.push(roundForPlates(max*0.65))
        weekOneTargets.push(roundForPlates(max*0.75))
        weekOneTargets.push(roundForPlates(max*0.85))
        
        return weekOneTargets
    }

    function weekTwo(max){
        let weekTwoTargets = []

        weekTwoTargets.push(roundForPlates(max*0.70))
        weekTwoTargets.push(roundForPlates(max*0.80))
        weekTwoTargets.push(roundForPlates(max*0.90))
        
        return weekTwoTargets
    }

    function weekThree(max){
        let weekThreeTargets = []

        weekThreeTargets.push(roundForPlates(max*0.75))
        weekThreeTargets.push(roundForPlates(max*0.85))
        weekThreeTargets.push(roundForPlates(max*0.95))
        
        return weekThreeTargets
    }

    function weekFour(max){
        let weekFourTargets = []

        weekFourTargets.push(roundForPlates(max*0.40))
        weekFourTargets.push(roundForPlates(max*0.50))
        weekFourTargets.push(roundForPlates(max*0.60))
        
        return weekFourTargets
    }


    function saveIfLoggedIn(){
        if(accountLoggedStatus === true){
            return <form className="log-submission-form" onSubmit={handleCycleSubmission} >
                <label>Which Lift? </label>
                <input type="text" value={lift} onChange={handleLiftChange} />
                <label>Start Date </label>
                <input type="date" value={startDate} onChange={handleStartDateChange} />
                <input className="button-dark" type="submit" value="Save To Log"/>
                {handleMessage(message)}
            </form>
        }else{
            return null
        }
    }


    return (
        <div className="cycle-calculations">
            <h3>Calculate 5/3/1 Training Loads</h3>
            <label>Current 1RM</label>
            <input type="text" value={maxWeight} onChange={handleMaxChange} />
            <div className="cycle-month">
                <div className="cycle-week">
                <h4>Week One:</h4>
                    <div>Set 1: {weekOne(maxWeight)[0]} lbs x 5 reps</div>
                    <div>Set 2: {weekOne(maxWeight)[1]} lbs x 5 reps</div>
                    <div>Set 3: {weekOne(maxWeight)[2]} lbs x 5+ reps</div>
                </div>
                <div className="cycle-week">
                <h4>Week Two:</h4>
                    <div>Set 1: {weekTwo(maxWeight)[0]} lbs x 3 reps</div>
                    <div>Set 2: {weekTwo(maxWeight)[1]} lbs x 3 reps</div>
                    <div>Set 3: {weekTwo(maxWeight)[2]} lbs x 3+ reps</div>
                </div>
                <div className="cycle-week">
                <h4>Week Three:</h4>
                    <div>Set 1: {weekThree(maxWeight)[0]} lbs x 5 reps</div>
                    <div>Set 2: {weekThree(maxWeight)[1]} lbs x 3 reps</div>
                    <div>Set 3: {weekThree(maxWeight)[2]} lbs x 1+ reps</div>
                </div>
                <div className="cycle-week">
                <h4>Week Four:</h4>
                    <div>Set 1: {weekFour(maxWeight)[0]} lbs x 5 reps</div>
                    <div>Set 2: {weekFour(maxWeight)[1]} lbs x 5 reps</div>
                    <div>Set 3: {weekFour(maxWeight)[2]} lbs x 5 reps</div>
                </div>
            </div>
            {saveIfLoggedIn()}
        </div>
    )
}