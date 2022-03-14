import { useState } from "react"
//! Router components
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
//! Components
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import CreatePost from "./components/CreatePost/CreatePost"
//! Firebase
import { signOut } from "firebase/auth"
import { auth } from "./firebase-config"
//! Styles
import { Wrapper } from "./App.styles"

const App: React.FC<{}> = (): JSX.Element => {
  const [isAuth, setIsAuth] = useState<string | null | boolean>(
    localStorage.getItem("isAuth")
  )

  const signUserOut = async (): Promise<void> => {
    try {
      await signOut(auth)
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login"
    } catch ({ message }) {
      console.log(message)
    }
  }

  return (
    <Wrapper>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>

          {!isAuth ? (
            <Link to="/login" className="login">
              Login
            </Link>
          ) : (
            <>
              <Link to="/createpost">Create Post</Link>
              <button onClick={signUserOut}>Log Out</button>
            </>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route
            path="/createpost"
            element={<CreatePost isAuth={isAuth} />}
          />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  )
}

export default App
