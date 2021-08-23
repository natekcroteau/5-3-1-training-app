import { useState } from 'react'



export default function MaxEstimate(props) {

    const { roundForPlates } = props

    const [weightInput, setWeightInput] = useState("Weight")
    const [repetitionsInput, setRepetitionsInput] = useState("Reps") 
    const [estimatedMax, setEstimatedMax] = useState("") 
  
    const handleWeightInputChange = (event) => {
      setWeightInput(event.target.value)
    }
  
    const handleRepetitionsInputChange = (event) => {
      setRepetitionsInput(event.target.value)
    }
  
    const handleEstimatedSubmit = (event) => {
      event.preventDefault()
      let result = brzyckiEquation(weightInput, repetitionsInput)
      setEstimatedMax(roundForPlates(result))
    }
  
    function brzyckiEquation(weight, repetitions){
      return weight/(1.0278-(0.0278*repetitions))
    }

    return (
        <div className="max-estimator">
            <h2>Estimate Your 1RM using the Brzycki Equation</h2>
            <form onSubmit={handleEstimatedSubmit}>
                <input type="text" value={weightInput} onChange={handleWeightInputChange} />
                <input type="text" value={repetitionsInput} onChange={handleRepetitionsInputChange} />
                <input type="submit" />
            </form>
            <h5>Your Estimated 1RM = {estimatedMax} lbs</h5>
        </div>
    )
}
