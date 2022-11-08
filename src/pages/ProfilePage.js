import React from 'react'
import './ProfilePage.css'
import NavBar from '../components/NavBar'
import { useSelector } from 'react-redux'
import { selectUser } from '../store/userSlice'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

function ProfilePage() {
  const user = useSelector(selectUser)
  return (
    <div className='profilePage'>
      <NavBar />
      <div className='profileBody' >
        <h1>Edit Profile</h1>
        <div className="profileInfo">
          <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="" />
          {/* Detail body */}
          <div className="profileDetails">
            <h2>{user.email}</h2>
            <div className="profilePlans">
              <h3>Plans</h3>
              <p>Renewal Date: </p>
              <button 
                onClick={() => signOut(auth)   }
                className='profileSignOut'>
                Sign Out
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage