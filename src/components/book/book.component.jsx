import React from 'react';
import './book.styles.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faHeart, faShoppingBasket} from '@fortawesome/free-solid-svg-icons';

export const Book = props => (

    <div className='card'>
        <img src={props.book.image_src} alt=""/>
        <div className='card-body'>
            <h3 className='card-title text-primary'><a href={'/detailpage/' + props.book.id}>{props.book.title}</a></h3>
            <h4 className='card-price'>${props.book.price}</h4>
            <p className='card-text'>{props.book.desc}</p>
            <div className='card-body bg-light border-top'>
                <div className='float-left'>
                    <FontAwesomeIcon icon={faStar} color={"#D3D3D3"} className='star'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} color={"#D3D3D3"} className='star'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} color={"#D3D3D3"} className='star'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} color={"#D3D3D3"} className='star'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} color={"#D3D3D3"} className='star'></FontAwesomeIcon>
                </div>
                <div className='float-right'>
                    <FontAwesomeIcon icon={faHeart} color={"#D3D3D3"} size='2x'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faShoppingBasket} color={"#D3D3D3"} size='2x'></FontAwesomeIcon>
                </div>
            </div>
        </div>
    </div>

)