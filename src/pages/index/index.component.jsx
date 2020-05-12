import React, {Component} from 'react';
import {BookList} from "../../components/book-list/book-list.component";
import {CartModal} from "../cartmodal/cartmodal.component";

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pages: [
                {
                    id: '',
                    content: [
                        {
                            id: '',
                            title: '',
                            author: '',
                            desc: '',
                            price: '',
                            average_rating: '',
                            image_src: '',
                            reviews: [
                                {
                                    id: '',
                                    author_name: '',
                                    title: '',
                                    timestamp: '',
                                    rating: '',
                                    comment: ''
                                }]
                        }
                    ]
                }
            ]
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/pages')
            .then(response => response.json())
            .then(data => this.setState({pages: data}));
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <BookList pages={this.state.pages}/>
                    </div>
                    <CartModal></CartModal>
                </div>
            </div>
        );
    }
}

export default HomePage;