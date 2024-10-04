import React from 'react'

const ProductList = () => {

    const product = {
        src: 'https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: "Laptop",
        price: 12000,
        Avaibility: "In Stock"
    }

    return(
        <div className='flex justify-centerify-center item'>
        <img 
            src={product.src}
            className='w-40 h-40 rounded-xl'
        />
        <h2>Name: {product.name}</h2>
        <h2>Price: {product.price}</h2>
        <h2>Avaibility: {product.Avaibility}</h2>
        </div>
    )
}

export default ProductList;