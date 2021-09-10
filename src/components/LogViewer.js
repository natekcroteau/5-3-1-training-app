import '../App.css'
import { useSelector } from 'react-redux'
import LogCard from './LogCard'


export default function LogViewer(props){

    let loggedInUser = useSelector(state => state.user.user)

    function retrieveLog(loggedInUser){
        fetch('http://localhost:3001/userlog', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: loggedInUser })
        })
        .then(response => response.json())
        .then(results => {
            console.log(results)
            return results
        })
    }

    function displayLog(loggedInUser){
        let log = retrieveLog(loggedInUser)
        console.log(log)
        if(log){
            log.forEach(cycle => {
                <LogCard 
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
        }
    }

    return(
        <div className="log-viewer">
            {displayLog(loggedInUser)}
        </div>
    )
}