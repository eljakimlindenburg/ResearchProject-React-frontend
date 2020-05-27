import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions';

import './itemcard.component.css';

const ItemCard = ({item, addItem}) => {
    const {id, title, price, image_src, desc} = item;

    function addItemNow() {
        addItem(item);
    }

    return (
        <div className='card'>
            <div className='card-body'>
                <img src={image_src} alt="" className="card-img-top"/>
                <h3 className='card-title text-primary'>
                    <Link to={{
                        pathname: '/detail/' + id,
                        state: item
                    }}>{title}
                    </Link>
                </h3>
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
                            onClick={addItemNow}>
                        <i className="fas fa-shopping-basket fa-sm"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(ItemCard);