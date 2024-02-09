import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()   

    useEffect(() => {

        const asyncFunction = categoryId ? getProductByCategory : getProducts

        asyncFunction(categoryId)
        .then(resolve => {
            setProducts(resolve)
        })
        .catch(error => {
            console.error(error);
        })
    }, [categoryId])
    
    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer