import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import './App.css'
import { Route, Routes } from "react-router-dom"
import { useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./store/userSlice";


function App() {
  let user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      userAuth => {
        if (userAuth) {
          // if user logged in
          dispatch( login({
            uid: userAuth.uid,
            name: userAuth.displayName,
            email: userAuth.email
          }) )
        } else {
          // if none logged in
          dispatch( logout() )
        }
      }
    )

    return unsubscribe
  }, [])

  return (
    <div className="App">
      {!user ? (<LoginPage />) : (
        <Routes>
          <Route path="profile" element={< ProfilePage/>} />
          <Route path="/" element={<HomePage />} />
        </Routes>)
      }
    </div>
  );
}

export default App;
