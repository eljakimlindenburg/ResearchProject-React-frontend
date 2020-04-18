import React, {Component} from 'react';

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pages: [
                {
                id: {},
                content: {
                    books: [

                    ],
                    reviews: []
                }
            }
            ]
        };
    }

    componentDidMount()
    {
        fetch('http://localhost:3000/pages/1')
            .then(response => response.json())
            .then(data => this.setState({page: data}));
    }

    render() {
        return (
           <div className='Books'>
               {this.state.books.map(book => (
                   <h1 key={book.id}> {book.title} </h1>
               ))}
           </div>
        );
    }
}

export default HomePage;