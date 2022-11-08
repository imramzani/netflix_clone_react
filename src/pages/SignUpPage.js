import React, { useRef } from 'react'
import './SignUpPage.css'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

function SignUpPage() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((user)=> {
      console.log(user)
    })
    .catch(err => {
      alert(err.message)
    })
  }

  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((currentUser) => {
      console.log(currentUser)
    })
    .catch(err => {
      alert(err.message)
    })
  }
  return (
    <div className='SignUpPage'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email Address' />
        <input ref={passwordRef } type="password" placeholder='Password' />
        <button type='submit' onClick={signIn}>Sign In</button>
        <h4>
          <span className='signupGrey'>New to Netflix? </span>
          <span className='signupLink' onClick={register}>Sign up now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignUpPage