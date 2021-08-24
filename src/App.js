import './App.css'
import CycleEstimates from './components/CycleEstimates'
import MaxEstimate from './components/MaxEstimate'

function App() {

  function roundForPlates(weight) {
    return (weight % 5) >= 2.5 ? parseInt(weight / 5) * 5 + 5 : parseInt(weight / 5) * 5
  }

  return (
    <div className="App">
      <MaxEstimate roundForPlates={roundForPlates} />
      <CycleEstimates roundForPlates={roundForPlates} />
    </div>
  );
}

export default App;
