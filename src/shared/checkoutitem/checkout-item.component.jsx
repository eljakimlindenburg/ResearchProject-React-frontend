import React from 'react';
import {connect} from 'react-redux';

import {removeItem} from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, removeItem}) => {
    const {image_src, productTitle, price} = cartItem;
    let {quantity} = cartItem;
    return (
        <div className="card-body">
            <div className="float-left mr-3">
                <img src={image_src} className="shoppingcart-item" alt=""/>
            </div>
            <div className="float-left">
                <h3 className="card-price">EUR {price}</h3>
                <h4 className="text-primary">{productTitle}</h4>

                <div className="Quantity">
                    <p className="text-dark d-block">{quantity}</p>
                    <span className="d-block">
                        <input type="number" min="1" step="1"
                               className="form-control input-number"
                               value={quantity}
                               onChange={(e) => quantity = e.target.value}/>
                    </span>
                </div>
            </div>

            <div className="float-right">
                <button type="button" className="close" aria-label="Close"
                        onClick={() => removeItem(cartItem)}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="card-body">
                <hr/>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
});

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);
