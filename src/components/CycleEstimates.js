import { useState } from 'react'



export default function CycleEstimates(){

    function roundForPlates(weight) {
        return (weight % 5) >= 2.5 ? parseInt(weight / 5) * 5 + 5 : parseInt(weight / 5) * 5
      }

    const [maxWeight, setMaxWeight] = useState("1RM")

    const handleMaxChange = (event) => {
        setMaxWeight(event.target.value)
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
        <h2>Calculate Your 5/3/1 Training Loads</h2>
        <input type="text" value={maxWeight} onChange={handleMaxChange} />
        <div className="week-one">
            Week One:
            <div>Set 1: {weekOne(maxWeight)[0]} lbs</div>
            <div>Set 2: {weekOne(maxWeight)[1]} lbs</div>
            <div>Set 3: {weekOne(maxWeight)[2]} lbs</div>
        </div>
        <div className="week-two">
            Week Two:
            <div>Set 1: {weekTwo(maxWeight)[0]} lbs</div>
            <div>Set 2: {weekTwo(maxWeight)[1]} lbs</div>
            <div>Set 3: {weekTwo(maxWeight)[2]} lbs</div>
        </div>
        <div className="week-three">
            Week Three:
            <div>Set 1: {weekThree(maxWeight)[0]} lbs</div>
            <div>Set 2: {weekThree(maxWeight)[1]} lbs</div>
            <div>Set 3: {weekThree(maxWeight)[2]} lbs</div>
        </div>
        <div className="week-four">
            Week Four:
            <div>Set 1: {weekFour(maxWeight)[0]} lbs</div>
            <div>Set 2: {weekFour(maxWeight)[1]} lbs</div>
            <div>Set 3: {weekFour(maxWeight)[2]} lbs</div>
        </div>
      </div>
    )
}