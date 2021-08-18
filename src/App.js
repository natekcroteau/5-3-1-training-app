import './App.css';
import { useState } from 'react'

function App() {

  const [estimatedMax, setEstimatedMax] = useState()

  const handleChange = (event) => {
    setEstimatedMax(event.target.value)
  }

  function roundForPlates(weight) {
    return (weight % 5) >= 2.5 ? parseInt(weight / 5) * 5 + 5 : parseInt(weight / 5) * 5
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
    <div className="App">
      <input type="text" value={estimatedMax} onChange={handleChange} />
      <div>
        <div className="week-one">
          Week One:
          <div>Set 1: {weekOne(estimatedMax)[0]} lbs</div>
          <div>Set 2: {weekOne(estimatedMax)[1]} lbs</div>
          <div>Set 3: {weekOne(estimatedMax)[2]} lbs</div>
        </div>
        <div className="week-two">
          Week Two:
          <div>Set 1: {weekTwo(estimatedMax)[0]} lbs</div>
          <div>Set 2: {weekTwo(estimatedMax)[1]} lbs</div>
          <div>Set 3: {weekTwo(estimatedMax)[2]} lbs</div>
        </div>
        <div className="week-three">
          Week Three:
          <div>Set 1: {weekThree(estimatedMax)[0]} lbs</div>
          <div>Set 2: {weekThree(estimatedMax)[1]} lbs</div>
          <div>Set 3: {weekThree(estimatedMax)[2]} lbs</div>
        </div>
        <div className="week-four">
          Week Four:
          <div>Set 1: {weekFour(estimatedMax)[0]} lbs</div>
          <div>Set 2: {weekFour(estimatedMax)[1]} lbs</div>
          <div>Set 3: {weekFour(estimatedMax)[2]} lbs</div>
        </div>
      </div>
    </div>
  );
}

export default App;
