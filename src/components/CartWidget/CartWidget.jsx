import './CartWidget.css'
import cart from '../../assets/cart.svg'

const CartWidget = () =>{
    return(
        <div>
            <img src={cart} alt=""  />
            0
        </div>
    )
}

export default CartWidget