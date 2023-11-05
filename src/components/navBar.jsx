import { Link } from "react-router-dom";
import {BsCart3} from "react-icons/bs"

const NavBar = () => {
    return(
        <nav className='navBar'>
        <ul className='containerElements'>
          <Link style={{textDecoration: "none"}} to="/sneakers"><li className='navElement'>Sneakers</li></Link>
          <Link style={{textDecoration: "none"}} to="/conversor"><li className='navElement'>Conversor</li></Link>
          <Link style={{textDecoration: "none"}} to="/pesquisarprodutos"><li className='navElement'>Pesquisar </li></Link>
          <Link style={{textDecoration: "none"}} to="/contato"><li className='navElement'>Contato </li></Link>
           <Link to='/carrinho'><BsCart3 size="2rem" color="black"/></Link>
        </ul>
      </nav>
    )
}

export default NavBar;