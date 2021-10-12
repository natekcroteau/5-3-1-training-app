# 5-3-1 Training App

> A React application to easily calculate and save 5/3/1 Training cycle loads.

Use [5-3-1 Training App](https://training-531-app.web.app/) Now!

## General Info

5-3-1 Training App is used to calculate one-rep maximum and each 4 week cycle for any specific lift. With an account created, the user is able to save the cycle information, which can be viewed via the log.

## Technologies

* Node 
  * Express
  * KNEX
  * cors
  * jsonwebtoken
  * bcrypt

* React 
  * Redux
  * Moment JS

* HTML
* CSS


## Code Example
```
function handleLogin(event){
    event.preventDefault()
    fetch('https://training-531.herokuapp.com/login', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ user: {'username': username, 'password': password}})
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
            localStorage.setItem('token', results.token)
        }
    })
}
```


## Features
* Create new users and sign-in with authentication.
* Calculate one-rep maximum using the Brzycki equation.
* Calculate 4 week cycle for an individual lift, based upon the submitted one-rep maximum.
* Save the calculated cycle loads for view via the log, only available when signed in.
* The user is able to remove authentication by logging out.

## Contact
Created by [Nate Croteau](https://github.com/natekcroteau)
