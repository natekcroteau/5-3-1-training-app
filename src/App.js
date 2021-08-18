import './App.css';

function App() {

  function weekOne(max){
    let weekOneTargets = []

    weekOneTargets.push(Math.round(max*0.65))
    weekOneTargets.push(Math.round(max*0.75))
    weekOneTargets.push(Math.round(max*0.85))
    
    return weekOneTargets
  }

  function weekTwo(max){
    let weekTwoTargets = []

    weekTwoTargets.push(Math.round(max*0.70))
    weekTwoTargets.push(Math.round(max*0.80))
    weekTwoTargets.push(Math.round(max*0.90))
    
    return weekTwoTargets
  }

  function weekThree(max){
    let weekThreeTargets = []

    weekThreeTargets.push(Math.round(max*0.75))
    weekThreeTargets.push(Math.round(max*0.85))
    weekThreeTargets.push(Math.round(max*0.95))
    
    return weekThreeTargets
  }

  function weekFour(max){
    let weekFourTargets = []

    weekFourTargets.push(Math.round(max*0.40))
    weekFourTargets.push(Math.round(max*0.50))
    weekFourTargets.push(Math.round(max*0.60))
    
    return weekFourTargets
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
