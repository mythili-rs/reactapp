import { Link } from "react-router-dom";
import "../../css/NavBar.css"
const NavBar = () => {
    return(
        <ol>
            <li><Link to ='/Home'>Home</Link></li>
            <li><Link to ='/About'>About</Link></li>
            <li><Link to ='/Experience'>Experience</Link></li>
            <li><Link to ='/Login'>Login</Link></li>
            <li><Link to ='/MyChannel'>MyChannel</Link></li>
        </ol>
    )

}
export default NavBar;

