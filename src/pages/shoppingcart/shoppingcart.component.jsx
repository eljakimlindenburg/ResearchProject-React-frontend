import React from "react";
import {Link} from "react-router-dom";

export const ShoppingCart = () => (
  <Link to="/shoppingcart">
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
                          <img src="item.Product.image_src" className="shoppingcart-item" alt=""/>
                          </div>
                          <div className="float-left">
                          <h3 className="card-price">EUR item.Total</h3>
                          <h4 className="text-primary">item.Product.Title.</h4>

                          <div className="Quantity">
                          <p className="text-dark d-block"> item.Quantity</p>
                          <span className="d-block">
                          <input type="number" min="1" step="1" className="form-control input-number" value="@item.Quantity" onChange="@( async(eventArgs) => { item.Quantity = Convert.ToInt32(eventArgs.Value.ToString()); await ChangeQuantityLocalStorage();  } )" />
                          </span>
                          </div>

                          </div>
                          <div className="float-right">
                          <button type="button" className="close" aria-label="Close" onClick="@(() => RemoveItem(@item))">
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
                          <p className="text-secondary">€cartStateProvider.ShoppingCart.Total</p>
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
  </Link>
);