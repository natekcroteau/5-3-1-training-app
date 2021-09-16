import './App.css'
import { useSelector } from 'react-redux'
import Account from './components/Account'
import CycleEstimates from './components/CycleEstimates'
import LogViewer from './components/LogViewer'
import MaxEstimate from './components/MaxEstimate'


function App() {


  let accountLoggedStatus = useSelector(state => state.loggedIn)


  function displayLogUponLogin(){
    if(accountLoggedStatus === true){
      return <LogViewer />
    }else{
      return <h2>Create an Account and Login to Save Your Data</h2>
    }
  }


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
        {displayLogUponLogin()}
      </div>
  );
}

export default App;
