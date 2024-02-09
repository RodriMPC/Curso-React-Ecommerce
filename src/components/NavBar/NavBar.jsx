import './NavBar.css'
import fondoMadera from '../../assets/fondomaderaclara.jpg'
import logo from '../../assets/logo.jpeg'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <div className='NavBar'>
            <img src={logo} alt="" className='logo' />
            <h1>Jafer Amoblamientos</h1>
            <ul>
                <li>Madera oscura</li>
                <li>Madera clara</li>
            </ul>
            <CartWidget/>
        </div>
    )
}





export default NavBar