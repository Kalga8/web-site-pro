import { Link } from "react-router-dom"
import Languages from "./Languages/"

function Header() {
    return (
        <header>
            <div className= "navbar" >
                <nav>
                <Link to="/" > Communication digitale </Link>
                </nav>
            </div>
            <Languages/>
        </header>
    )
}

export default Header