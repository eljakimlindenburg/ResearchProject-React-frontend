import React, {Component} from "react";

export class ShoppingCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: props
        }
    };

    render() {
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

                            <div className="card-body">
                                <div className="float-left mr-3">
                                    <img src="nogteimplementeren" className="shoppingcart-item" alt=""/>
                                </div>
                                <div className="float-left">
                                    <h3 className="card-price">EUR nogteimplementeren</h3>
                                    <h4 className="text-primary">nogteimplementeren</h4>

                                    <div className="Quantity">
                                        <p className="text-dark d-block"> nogteimplementeren</p>
                                        <span className="d-block">
                          <input type="number" min="1" step="1" className="form-control input-number"
                                 value="nogteimplementeren"
                                 onChange="nogteimplementeren"/>
                          </span>
                                    </div>

                                </div>
                                <div className="float-right">
                                    <button type="button" className="close" aria-label="Close"
                                            onClick="nogteimplementeren">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>

                            <div className="card-body">
                                <hr/>
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
                                                    <h4 className="text-secondary">Delivery</h4>
                                                    <h4 className="text-secondary">Sub total</h4>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="text-secondary">€nogteimplementeren</p>
                                                    <p className="text-secondary">?</p>
                                                </div>
                                            </div>
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
}

export default ShoppingCart;