import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'


function NavBar() {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const transitionNavBar = () => {
    if(window.scrollY > 100){
      setShow(true)
    } else setShow(false)
  }

  useEffect(()=> {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, [])

  return (
    <div className={`navbar ${ show && "navblack"}`}>
      <div className="navcontent">
        <img onClick={()=> navigate('/')} className='navlogo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
        <img onClick={()=> navigate('profile')} className='navavatar' src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="" />
      </div>
    </div>
  )
}

export default NavBar