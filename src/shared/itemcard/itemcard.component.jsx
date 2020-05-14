import React from "react";
import {Link} from "react-router-dom";

export class ItemCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.setState(props);
    }


    
    componentDidMount(){
        
    }

    render () {
        return (
            <div className='card'>
                <img src={this.props.item.image_src} alt="" className="card-img-top"/>
                <div className='card-body'>
                    <h3 className='card-title text-primary'>
                        <Link to={{
                            pathname: '/detail/' + this.props.item.id,
                            state: this.props}}>{this.props.item.title}</Link></h3>
                    <h4 className='card-price'>${this.props.item.price}</h4>
                    <p className='card-text'>{this.props.item.desc}</p>
                   
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

                        <button className="btn btn-primary">
                            <i className="fas fa-shopping-basket fa-sm"/>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemCard;