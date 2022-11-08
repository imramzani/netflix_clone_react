import React, { useState } from 'react'
import './LoginPage.css'
import SignUpPage from './SignUpPage'

function LoginPage() {
  const [signIn, setSignIn] = useState(false)
  
  return (
    <div className='loginpage'>
      <div className="loginBg">
        <img
          className='loginLogo'
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className='loginButton' onClick={() => setSignIn(true)}>Sign In</button>
        <div className="loginGradient" />

        <div className="loginBody">
          {signIn ? (
            <SignUpPage />
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel at any time</h2>
              <h3>Ready to watch? Enter your email to create or restart yout membership</h3>
              <div className="loginInput">
                <form action="" method="post">
                  <input type="email" name="" placeholder='Email Address' />
                  <button className='getstarted' onClick={() => setSignIn(true)}>GET STARTED</button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoginPage