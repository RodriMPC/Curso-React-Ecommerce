import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, category, price, stock}) => {
    return (
        <div className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <p className='Info'>
                    Categoria: {category}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <button>
                <Link to={`/item/${id}`} className='Option' >Ver Detalle</Link>
                </button>
            </footer>
        </div>
    )
}

export default Item