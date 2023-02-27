import React, { useState, useEffect } from "react";
import Product from "./Product";

// get products array
// map through to get single product
const ProductList = () => {
    const [products, setProducts] = useState([]);

    this.handleProductUpvote=this.handleProductUpvote


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
    const handleProductUpvote = (productId) => {
        this.handleProductUpvote.bind(this)
        console.log(productId + 'was upvoted.')

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
                onVote={this.handleProductUpvote}
                
                />
           
            ))
}
</div>
        </div>

            
    )
}

export default ProductList