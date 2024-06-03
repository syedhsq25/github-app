import { Link } from "react-router-dom";
function NavBar() {
    return (<>
        <nav className="navbar bg-primary">
            <h1>
                <a href="/" ><i className="fab fa-github"></i></a>
            </h1>
            <ul>
                <li><Link to="/" >Home</Link></li>

                <li><Link to="/contact" >Contact</Link></li>

                <li><Link to="/about" >About Us </Link></li>
            </ul>
        </nav>
    </>)
}
export default NavBar;