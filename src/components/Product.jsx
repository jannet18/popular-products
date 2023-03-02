import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import ProductList from "./ProductList";
// destructure single product property and call them respectively
// props is immutable, while a child can read its properties, it cant modify them
// a child does not own its props, the parent owns props, react supports
// one-way data flow
const Product = ({id, title, description, votes, userUrl, itemUrl, handleVote}) => {

    // create afunction that calls the new prop-function
    const [vote, setVote] = useState(0);
  
    const[data, setData] = useState({
        title:"",
        description: "",
        votes: "",
        userUrl:"",
        itemUrl:""
    })
    
    const handleChange = (e) => {
        setData({...setData(data), [e.target.id]: e.target.value});
    }
    
    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setData(data)
        })
        handleVote()
        .catch((err) => console.log(err));

    },[id, handleVote])
    
   
        
    return (
        <div className="item">
            <div className="image">
                <img src={itemUrl} alt="" />
            </div>
            <div className="middle align content">
                <div className="header">
                <span><h5 value={votes} onChange={handleChange} count={ProductList}>{votes}</h5></span>
                    <Button  onClick={() => setVote(vote + 1)}>Vote</Button>
                    {/* <img  src="./images/caret.png" alt=""/> */}
                   
                    
                </div>
                <div className="description">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <div className="extra">
                <p>Submitted by:</p><span><img className="ui avatar image" src={userUrl} alt="" width={30} height={30}/></span>
                </div>
            </div>
        </div>
    )

}

export default Product;