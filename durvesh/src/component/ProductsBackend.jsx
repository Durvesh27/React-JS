import './Backend.css'
import { useEffect, useState } from "react";
import React from "react";
import { Link } from 'react-router-dom';
function ProductsBackend() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            let response = await fetch('https://fakestoreapi.com/products')
            let data = await response.json()
            setProducts(data)
        }
        getProducts()
    }, [])
    // console.log(products)
    return (
        <div className='first'>
    
            <div>
            {products.length ?
                <div className='main'>

                    {products.map((pro) => (
                        <div className="parent" key={pro.id}>
                            <Link to={`/single-backend/${pro.id}`}>
                                <img src={pro.image} alt="" />
                            </Link>
                            <h3>{pro.title}</h3>
                            <h3>{pro.price}$</h3>
                        </div>
                    ))}
                </div>
                : <h1 className='loading'>Loading...</h1>
            }
            </div>F

        </div>
    )
}
export default ProductsBackend;






