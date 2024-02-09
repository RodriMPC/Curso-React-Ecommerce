import './ItemDetail.css'

import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link  } from 'react-router-dom'

const ItemDetail = ({id, name, img, category, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)
    }

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
            <section className='Cards'>
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
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option Button' >Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />

                    )
                }
            </footer>
        </div>
    )
}

export default ItemDetail
