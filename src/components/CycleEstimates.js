import { useState } from 'react'
import '../App.css'



export default function CycleEstimates(props){

    const { roundForPlates } = props

    const [maxWeight, setMaxWeight] = useState(0)
    const [lift, setLift] = useState("ie: Deadlift")

    const handleMaxChange = (event) => {
        setMaxWeight(event.target.value)
    }

    const handleLiftChange = (event) => {
        setLift(event.target.value)
    }

    const handleCycleSubmission = (event) => {
        event.preventDefault()

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

    return (
        <div className="cycle-calculations">
            <h2>Calculate 5/3/1 Training Loads</h2>
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
            {/* <form onSubmit={handleCycleSubmission} >
                <label>Which Lift? </label>
                <input type="text" value={lift} onChange={handleLiftChange} />
                <input type="submit" value="Save To Log"/>
            </form> */}
        </div>
    )
}