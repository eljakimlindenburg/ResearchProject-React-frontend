import React from "react";

const ProductInfo = ({product}) => {

    const {average_rating, image_src, title, price, desc} = product;

    let stars = [];
    const averageRating = {average_rating};
    const nrOfStars = Math.floor(averageRating.average_rating);
    const maxStars = 5;
    for (let i = 0; i < nrOfStars; i++) {
        stars.push(<i key={i} className='fas fa-star fa-sm' style={{color: '#ffd800'}}/>);
    }
    if (maxStars > nrOfStars) {
        let starsLeft = maxStars - nrOfStars;
        for (let j = 0; j < starsLeft; j++) {
            stars.push(<i key={j+10} className='far fa-star fa-sm'/>);
        }
    }

    return (
        <div className="card" id="productInfo">

            <img src={image_src} alt="" className="card-img-top"/>
            <div className="card-body">
                <h1 className="card-title text-primary">{title}</h1>
                <h2 className="card-price">€{price}</h2>
                <p className="card-text">{desc}</p>
            </div>

            <div className="card-body">
                <div className="float-left">
                    {
                        stars.map((star, index) => (
                            <i key={index}>{star}</i>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;