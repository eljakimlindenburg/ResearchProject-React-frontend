import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from "../../shared/checkoutitem/checkout-item.component";

const ShoppingCart = ({cartItems, total}) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8 bg-light p-3">
                    <div className="card" id="shoppingCartItems">
                        <div className="card-body">
                            <h3 className="card-title text-secondary">My Bag</h3>
                        </div>

                        <div className="card-body">
                            <hr/>
                        </div>
                        {(() => {
                            if (cartItems == null) {
                                return (
                                    <div className="row">
                                        <p><em>Loading...</em></p>
                                    </div>
                                )
                            } else {
                                return (
                                    <div>
                                        {cartItems.map(cartItem => (
                                            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                                        ))}
                                    </div>
                                )
                            }
                        })()}
                    </div>
                </div>

                <div className="col-sm-4 bg-light p-3">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title text-secondary">Total</h1>
                        </div>

                        <div className="card-body">
                            <hr/>
                        </div>
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h4 className="text-secondary">Total</h4>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="text-secondary">€{total}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(ShoppingCart);