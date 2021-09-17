import '../App.css'
import { GiWeightLiftingUp } from 'react-icons/gi'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'



export default function Account(){

    const dispatch = useDispatch()


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')


    let accountLoggedStatus = useSelector(state => state.loggedIn)
    let loggedInUser = useSelector(state => state.user)


    function loginForm(loggedInUser){
        if(accountLoggedStatus === true){
            return <div className="account">
                <h3>Welcome {loggedInUser.toUpperCase()}</h3>
                <button className="button-light" onClick={handleLogout} >Logout</button>
            </div>
        }else{
            return <>
                <form className="account">
                    <label>Username</label>
                    <input type="text" onChange={handleUsernameChange} value={username}/>
                    <label>Password</label>
                    <input type="password" onChange={handlePasswordChange} value={password}/>
                    <button className="button-light" onClick={handleLogin} >Login</button>
                    <button className="button-light" onClick={handleAccountCreation} >Create Account</button>
                    {handleMessage(message)}
                </form>
            </>
        }
    }

    function setGlobalUsername(username){
        dispatch({
            type: "SET_USER", 
            user: username
        })
    }

    function setGlobalLoggedInStatus(){
        dispatch({type: "LOG_IN"})
    }

    function setGlobalLoggedOutStatus(){
        dispatch({type: "LOG_OUT"})
    }


    function handleUsernameChange(event){
        setUsername(event.target.value)
    }
    
    function handlePasswordChange(event){
        setPassword(event.target.value)
    }


    function handleLogin(event){
        event.preventDefault()
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ user: {"username": username, "password": password}})
        })
        .then(response => response.json())
        .then(results => {
            if(results.error){
                setMessage(results.error)
                setGlobalLoggedOutStatus()
            }else{
                setMessage('')
                setGlobalUsername(results.user[1].username)
                setGlobalLoggedInStatus()
                localStorage.setItem("token", results.token)
            }
        })
    }

    function handleMessage(message){
        return <h5>{message}</h5>
    }

    function handleLogout(){
        localStorage.removeItem("token")
        setGlobalLoggedOutStatus()
    }


    function handleAccountCreation(event){
        event.preventDefault()
        fetch('http://localhost:3001/users', { 
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user: {"username": username, "password": password}})
        })
        .then(response => response.json())
        .then(results => {
            setMessage(results)
        })
    }


    return(
        <>
            <GiWeightLiftingUp className="account-icon" />
            {loginForm(loggedInUser)}
        </>
    )
}