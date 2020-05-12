import React from "react";

const ProductInfo = props => (
    <div className="card" id="productInfo">
        <img src='${props.img_src}' alt="" className="card-img-top" style="max-height:400px;"/>
            <div className="card-body">
                <h1 className="card-title text-primary">{props.title}</h1>
                <h2 className="card-price">€{props.price}</h2>
                <p className="card-text">{props.desc}</p>
            </div>
            <div className="card-body">
                <div className="float-left">
                    <i class="fas fa-star fa-sm" style="color:#ffd800"></i>
                    <i class="far fa-star fa-sm"></i>
                </div>
            </div>
    </div>
);

export default ProductInfo;