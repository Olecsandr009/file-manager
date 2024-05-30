import { Link } from "react-router-dom"
import "./Home.scss"

const Home = () => {
    return <div className="home">
        <Link to="auth" >Auth</Link>
    </div>
}

export default Home