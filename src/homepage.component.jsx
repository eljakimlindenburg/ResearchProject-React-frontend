import React, {Component} from 'react';

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
        fetch('http://localhost:3000/pages/1')
            .then(response => response.json())
            .then(data => this.setState({pages: data}));
    }

    render() {
        return (
            <div className='Books'>
                {this.state.pages[0].content.map(book => (
                    <h1 key={book.id}> {book.title} </h1>
                ))}
            </div>
        );
    }
}

export default HomePage;