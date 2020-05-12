import React from "react";


export const ItemCard = props => (

    <div className='card'>
        <img src={props.book.image_src} alt="" class="card-img-top"/>
        <div className='card-body'>
            <h3 className='card-title text-primary'><a href={'/detailpage/' + props.book.id}>{props.book.title}</a></h3>
            <h4 className='card-price'>${props.book.price}</h4>
            <p className='card-text'>{props.book.desc}</p>
        </div>

        <div className='card-body bg-light border-top'>

            <div className='float-left'>
                <i className="far fa-star fa-sm"></i>
                <i className="far fa-star fa-sm"></i>
                <i className="far fa-star fa-sm"></i>
                <i className="far fa-star fa-sm"></i>
                <i className="far fa-star fa-sm"></i>
            </div>


            <div class="float-right">
                <button class="btn btn-secondary">
                    <i class="far fa-heart fa-sm"></i>
                </button>

                <button class="btn btn-primary" onclick="AddToBasket">
                <i class="fas fa-shopping-basket fa-sm" ></i>
            </button>
        </div>

    </div>
</div>
);