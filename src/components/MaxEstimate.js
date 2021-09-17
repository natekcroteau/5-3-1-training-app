import { useState } from 'react'



export default function MaxEstimate(props) {

    const { roundForPlates } = props

    const [weightInput, setWeightInput] = useState("lbs")
    const [repetitionsInput, setRepetitionsInput] = useState("reps") 
    const [estimatedMax, setEstimatedMax] = useState(0) 
  
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
            <h3>Estimate Your 1RM Using The Brzycki Equation</h3>
            <form onSubmit={handleEstimatedSubmit}>
                <input type="text" value={weightInput} onChange={handleWeightInputChange} />
                <input type="text" value={repetitionsInput} onChange={handleRepetitionsInputChange} />
                <input className="button-dark" type="submit" />
            </form>
            <h4>Your Estimated 1RM =  {estimatedMax} lbs</h4>
        </div>
    )
}
