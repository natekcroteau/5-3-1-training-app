import { useState } from 'react'
import '../App.css'
import { GiWeightLiftingUp } from 'react-icons/gi'
// import { useDispatch, useSelector } from 'react-redux'
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function Account(){


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID
    }

    const app = initializeApp(firebaseConfig)


    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // set redux user
        console.log(user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    })


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
        createUserWithEmailAndPassword(auth, email, password)
        // useDispatch({type: "SET_USER", user: user })
    }

    return(
        <>
            <GiWeightLiftingUp className="account-icon" />
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