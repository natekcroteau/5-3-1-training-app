import './App.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Account from './components/Account'
import CycleEstimates from './components/CycleEstimates'
import LogViewer from './components/LogViewer'
import MaxEstimate from './components/MaxEstimate'


function App() {


  let accountLoggedStatus = useSelector(state => state.loggedIn)
  let loggedInUser = useSelector(state => state.user)


  const [retrievedLog, setRetrievedLog] = useState(null)


  function fetchLog(){
    fetch('http://localhost:3001/userlog', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: loggedInUser })
    })
    .then(response => response.json())
    .then(results => {
        return setRetrievedLog(results)
    })
  }


  function displayLogUponLogin(){
    if(accountLoggedStatus === true){
      return <LogViewer 
        fetchLog={fetchLog}
        retrievedLog={retrievedLog} 
        loggedInUser={loggedInUser}
      />
    }else{
      return <h2>Create an Account and Login to Save Your Data</h2>
    }
  }


  function roundForPlates(weight) {
    return (weight % 5) >= 2.5 ? parseInt(weight / 5) * 5 + 5 : parseInt(weight / 5) * 5
  }


  return (
      <div className='App'>
        <div className='app-header'>
          <Account />
        </div>
        <div className='app-main'>
          <MaxEstimate roundForPlates={roundForPlates} />
          <CycleEstimates 
            roundForPlates={roundForPlates}
            fetchLog={fetchLog}
            retrievedLog={retrievedLog} 
          />
        </div>
        {displayLogUponLogin()}
      </div>
  );
}

export default App;
