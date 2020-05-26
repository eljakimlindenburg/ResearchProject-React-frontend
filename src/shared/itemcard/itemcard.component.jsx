import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions';

import './itemcard.component.css';

const ItemCard = ({item, addItem}) => {
    const {id, title, price, image_src, desc} = item;

    let showPopUp = false;
    let showBackDrop = false;
    let modalClass = "";
    let modalDisplay = "";

    return (
        <div>
            <div className='card'>
                <div className='card-body'>
                    <img src={image_src} alt="" className="card-img-top"/>
                    <h3 className='card-title text-primary'>
                        <Link to={{
                            pathname: '/detail/' + id,
                            state: item
                        }}>{title}</Link></h3>
                    <h4 className='card-price'>${price}</h4>
                    <p className='card-text'>{desc}</p>

                </div>

                <div className='card-body bg-light border-top'>

                    <div className='float-left'>
                        <i className="far fa-star fa-sm"/>
                        <i className="far fa-star fa-sm"/>
                        <i className="far fa-star fa-sm"/>
                        <i className="far fa-star fa-sm"/>
                        <i className="far fa-star fa-sm"/>
                    </div>

                    <div className="float-right">
                        <button className="btn btn-secondary">
                            <i className="far fa-heart fa-sm"/>
                        </button>

                        <button className="btn btn-primary"
                                onClick={addItemAndOpenPopUp}>
                            <i className="fas fa-shopping-basket fa-sm"/>
                        </button>
                    </div>
                </div>
            </div>
            {(() => {
                if ({showPopUp} === true) {
                    return (
                        <div className={"modal " + modalClass} tabIndex="-1" role="dialog"
                             style={"display:" + modalDisplay}>
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">{title} toegevoegd aan het winkelmandje</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Dit product is toegevoegd aan je winkelmand</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Sluit
                                            dit venster
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })()}
            {(() => {
                if ({showBackDrop} === true) {
                    return (
                        <div className="modal-backdrop fade show"/>
                    )
                }
            })()}
        </div>
    );

    function openPopUp() {
        modalClass = "show";
        modalDisplay = "block";
        showBackDrop = true;
        waitOneAndAHalfSeconds();
        showPopUp = false;
        console.log(modalClass, modalDisplay, showBackDrop, showPopUp)
    }

    function closePopUp() {
        modalClass = "";
        modalDisplay = "block";
        showBackDrop = false;
        console.log(modalClass, modalDisplay, showBackDrop);
    }

    function waitOneAndAHalfSeconds() {
        console.log("before");
        const timer = setTimeout(() => closePopUp,1500);
        console.log("after");
        return () => clearTimeout(timer);
    }

    function addItemAndOpenPopUp() {
        addItem(item);
        openPopUp();
        console.log("addItemAndOpenPopUp");
    }
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(ItemCard);