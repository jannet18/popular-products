import React from "react";
// destructure single product property and call them respectively
// props is immutable, while a child can read its properties, it cant modify them
// a child does not own its props, the parent owns props, react supports
// one-way data flow
const Product = ({id, title, description, votes, userUrl, itemUrl, handleProductUpvote}) => {

    // create afunction that calls the new prop-function
    const handleUpVote = () => {
        this.handleProductUpvote.onVote(this.props.id)
        this.handleUpVote = this.handleUpVote.bind(this);


    }
    return (
        <div className="item">
            <div className="image">
                <img src={itemUrl} alt="" />
            </div>
            <div className="middle align content">
                <div className="header">
                    <img onClick={this.handleUpVote.bind(this.handleProductUpvote)} src="./images/caret.png" alt=""/>
                    {votes}
                    
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