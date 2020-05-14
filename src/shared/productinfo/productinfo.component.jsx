import React, {Component} from "react";

export class ProductInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: props
        }
    };

    createStars = () => {
        let stars = [];
        const nrOfStars = this.state.product.average_rating;
        const maxStars = 5;
        for (var i = 0; i < nrOfStars; i++) {
            stars.push(<i className="fas fa-star fa-sm" style={{color: "#ffd800"}}/>)
        }
        if (maxStars > nrOfStars) {
            var starsLeft = maxStars - nrOfStars;
            for (var j = 0; j < starsLeft; j++)
            {
                stars.push(<i className="far fa-star fa-sm"/>)
            }
        }
    };

    render() {
        return (
            <div className="card" id="productInfo">
                <img src={this.state.product.img_src} alt="" className="card-img-top" style={{maxHeight: "400px"}}/>
                <div className="card-body">
                    <h1 className="card-title text-primary">{this.state.product.title}</h1>
                    <h2 className="card-price">€{this.state.product.price}</h2>
                    <p className="card-text">{this.state.product.desc}</p>
                </div>
                <div className="card-body">
                    {this.createStars()}
                </div>
            </div>
        );
    }
}

export default ProductInfo;