import React, { useState, useEffect } from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";


// get products array
// map through to get single product
const ProductList = () => {
    const [products, setProducts] = useState([]);
      const {id} = useParams();
   
     useEffect(() => {

        fetch("http://localhost:3000/products")
        .then((resp) => resp.json())
        .then((products) => {
            setProducts(products)
            // console.log(products)

        })

        .catch((error) => console.error(error))

    }, [])
// pass the function as a prop

function handleVote ({data,setData}) {
    fetch(`http://localhost:3000/products/${id}`, {
        method: 'PATCH',
        headers:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    .then((resp) => resp.json())
    .then(data => {
        console.log(data)
        setData(data)
    })
}

    return(
        <div className="ui unstackable items">
            <div className="card">
                {/* {products.sort((a, b) =>(
                    b.votes - a.votes
                ))}; */}
            {products?.map((product, i) => (
                <Product
                key={"product-" + product?.id}
                id={product?.id || i }
                title={product?.title}
                description={product?.description}
                votes={product?.votes}
                userUrl={product?.userUrl}
                itemUrl={product?.itemUrl}
                count={handleVote}
              
                
                />
           
            ))
}
</div>
        </div>

            
    )
}

export default ProductList