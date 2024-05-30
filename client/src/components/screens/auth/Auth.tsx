import { Link } from "react-router-dom"
import "./Auth.scss"
import SignUp from "./forms/sign-up/SignUp"
import { MouseEvent as MouseEventType, useState } from "react"
import SignIn from "./forms/sign-in/SignIn"

const Auth = () => {
    const [authState, setAuthState] = useState<"login" | "register">("login")

    function setAuthWindow(event: MouseEventType<HTMLButtonElement, MouseEvent>) {
        authState == 'login' ? setAuthState("register") : setAuthState("login")
    }

    return (
        <div className="auth">
            {authState == "login" ?
                <SignIn setAuthWindow={setAuthWindow} /> : <SignUp setAuthWindow={setAuthWindow}/>
            }
            <button onClick={setAuthWindow}>Auth</button>
            <Link to=".." >Home</Link>
        </div>
    )
}

export default Auth