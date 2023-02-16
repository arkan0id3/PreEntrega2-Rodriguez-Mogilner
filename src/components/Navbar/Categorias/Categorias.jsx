import { Link } from "react-router-dom";
import { generatePath } from "react-router-dom";
const Categorias = () => {
    return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorías
                </a>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to={'/category/1'}>Lámparas</Link></li>
                    <li><Link className="dropdown-item" to={'/category/2'}>Lapiceros</Link></li>
                    <li><Link className="dropdown-item" to={'/category/3'}>Maceteros</Link></li>
                </ul>
            </li>
    );
        
}

export default Categorias;
