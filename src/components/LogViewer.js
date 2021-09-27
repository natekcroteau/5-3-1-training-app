import '../App.css'
import { useState, useEffect } from 'react'
import moment from 'moment'
import LogCard from './LogCard'


export default function LogViewer(props){


    let { fetchLog, retrievedLog, loggedInUser } = props

    const [sortedLog, setSortedLog] = useState(null)

    // function sortLog(){
    //     retrievedLog.map

    // }


    function dateFormatting(startDate){
        return moment(startDate).format("MMM Do, YYYY")
    }


    function log(){ 
        if(retrievedLog){
            return retrievedLog.map(cycle => {
                return <LogCard 
                    key={cycle.id}
                    logID={cycle.id}
                    lift={cycle.lift} 
                    maxWeight={cycle.maxWeight}
                    date={dateFormatting(cycle.startDate)}  
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
                    fetchLog={fetchLog}
                />
            })
        }else{
            return null
        }
    }

    
    useEffect(fetchLog, [loggedInUser])


    return(
        <div className="log-viewer">
            <h2>Log</h2>
            {log()}
        </div>
    )
}