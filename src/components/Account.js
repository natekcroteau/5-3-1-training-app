import { useState } from 'react'
import '../App.css'



export default function Account(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function handleEmailChange(event){
        setEmail(event.target.value)
    }
    
    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleLogin(){
       
    }

    function handleAccountCreation(event){
        event.preventDefault()
    }

    return(
        <>
            <h1>5/3/1 Training Planner</h1>
            <form className="account">
                <label>Email</label>
                <input type="text" onChange={handleEmailChange} value={email}/>
                <label>Password</label>
                <input type="password" onChange={handlePasswordChange} value={password}/>
                <button onClick={handleLogin} >Login</button>
                <button onClick={handleAccountCreation} >Create Account</button>
            </form>
        </>
    )
}