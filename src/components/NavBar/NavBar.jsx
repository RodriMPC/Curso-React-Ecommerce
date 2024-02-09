import './NavBar.css'
import logo from '../../assets/logo.jpeg'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'



const NavBar = () => {
    return (
        <div className='NavBar'>
            <img src={logo} alt="" className='logo' />
            <Link to='/' className='Titulo'>
                <h1 >Jafer Amoblamientos</h1>
            </Link>
            
            <div className='Categories'>
                <Link to='/category/Oscura' className='Categoria'>Oscura</Link>
                <Link to='/category/Clara' className='Categoria'>Clara</Link>
            </div>
            <CartWidget/>
        </div>
    )
}





export default NavBar