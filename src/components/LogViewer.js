import '../App.css'
import { useSelector } from 'react-redux'


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

    return(
        <div className="log-viewer">
            {/* <input type="submit" onClick={retrieveLog(loggedInUser)} value="retrieve log" /> */}
            {retrieveLog(loggedInUser)}
        </div>
    )
}