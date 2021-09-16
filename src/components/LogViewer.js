import '../App.css'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import LogCard from './LogCard'


export default function LogViewer(props){

    const [retrievedLog, setRetrievedLog] = useState("")

    let loggedInUser = useSelector(state => state.user)

    useEffect(fetchLog, [loggedInUser])

    function fetchLog(){
        fetch('http://localhost:3001/userlog', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: loggedInUser })
        })
        .then(response => response.json())
        .then(results => {
            return setRetrievedLog(results)
        })
    }

    function displayLog(){ 
        if(retrievedLog){
            return retrievedLog.map(cycle => {
                return <LogCard 
                    lift={cycle.lift} 
                    date={cycle.startDate}  
                    oneSetOne={cycle.weekOneSet1}
                    oneSetTwo={cycle.weekOneSet2}
                    oneSetThree={cycle.weekOneSet3}
                    twoSetOne={cycle.weekTwoSet1}
                    twoSetTwo={cycle.weekTwoSet2}
                    twoSetThree={cycle.weekTwoSet3}
                    threeSetOne={cycle.weekThreeSet1}
                    threeSetTwo={cycle.weekThreeSet2}
                    threeSetThree={cycle.weekThreeSet3}
                    fourSetOne={cycle.weekFourSet1}
                    fourSetTwo={cycle.weekFourSet2}
                    fourSetThree={cycle.weekFourSet3}    
                />
            })
        }else{
            return null
        }
    }

    return(
        <div className="log-viewer">
            <h2>Log</h2>
            {displayLog()}
        </div>
    )
}