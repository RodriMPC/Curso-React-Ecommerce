import logo from './img/GyT.jpg'
import classes from './Escudo.module.css'

const Escudo = () => {
    return (
        <div>
            <img className={classes.foto} src={logo} />
        </div>
    )
}

export default Escudo