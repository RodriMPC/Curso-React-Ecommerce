const products = [
    {
        id:'1',
        name:'Mesa Ratona',
        price: 50000,
        img: 'Imagen mesa ratona' ,
        stock: 15,
        description: 'Descripcion del producto'
    },
    {id:'2', name:'Armario', price:80000, img:'Imagen armario', stock:18, description:'Descripcion armario'},
    {id:'3', name:'Footrest', price:25000, img:'Imagen footrest', stock:50, description:'Descripcion footrest'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}