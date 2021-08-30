import './App.css'
import Account from './components/Account'
import CycleEstimates from './components/CycleEstimates'
import MaxEstimate from './components/MaxEstimate'

function App() {


  function roundForPlates(weight) {
    return (weight % 5) >= 2.5 ? parseInt(weight / 5) * 5 + 5 : parseInt(weight / 5) * 5
  }

  return (
      <div className="App">
        <div className="app-header">
          <Account />
        </div>
        <div className="app-main">
          <MaxEstimate roundForPlates={roundForPlates} />
          <CycleEstimates roundForPlates={roundForPlates} />
        </div>
      </div>
  );
}

export default App;
