import { useState } from 'react'
import '../App.css'
import { GiWeightLiftingUp } from 'react-icons/gi'
import { useDispatch } from 'react-redux'



export default function Account(){

    const dispatch = useDispatch()

    function setGlobalUsername(username){
        dispatch({
            type: "SET_USER", 
            user: username
        })
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


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
                setGlobalUsername(results.user[1].username)
                localStorage.setItem("token", results.token)
            })
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
            console.log(results)
        })
    }

    return(
        <>
            <GiWeightLiftingUp className="account-icon" />
            <form className="account">
                <label>Username</label>
                <input type="text" onChange={handleUsernameChange} value={username}/>
                <label>Password</label>
                <input type="password" onChange={handlePasswordChange} value={password}/>
                <button onClick={handleLogin} >Login</button>
                <button onClick={handleAccountCreation} >Create Account</button>
            </form>
        </>
    )
}