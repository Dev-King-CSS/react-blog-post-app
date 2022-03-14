//! Firebase
import { auth, provider } from "../../firebase-config"
import { signInWithPopup } from "firebase/auth"
//! Router functions
import { useNavigate, NavigateFunction } from "react-router-dom"
//! Styles
import { Wrapper } from "./Login.styles"

type LoginProps = {
  setIsAuth?: React.Dispatch<React.SetStateAction<string | boolean | null>>
}

const Login: React.FC<LoginProps> = ({
  setIsAuth,
}: LoginProps): JSX.Element => {
  let navigate: NavigateFunction = useNavigate()

  const signInWithGoogle = async (): Promise<void> => {
    try {
      await signInWithPopup(auth, provider)
      localStorage.setItem("isAuth", "true")
      if (!setIsAuth) return
      setIsAuth(true)
      navigate("/")
    } catch ({ message }) {
      console.log(message)
    }
  }

  return (
    <Wrapper>
      <p>Sign In With Google to Continue</p>
      <button className="LoginWithGoogleBtn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </Wrapper>
  )
}

export default Login
