import React, {Component} from 'react';
import ItemCard from "../../shared/itemcard/itemcard.component";

export class IndexPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: []
        }
    };

    async componentDidMount() {
        const url = 'http://localhost:3000/books';

        const response = await fetch(url, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            }
        });
        const json = await response.json();

       this.setState({books: json}); 
    }

    render() {
        const books = [this.state.books];
        return (
            <div className='container'>
                
                    {(() => {
                        if (books == null) {
                            return (
                                <div className="row">
                                    <p><em>Loading...</em></p>
                                </div>
                            )
                        } else {
                            return (
                                    <div className="row">
                                    {this.state.books.map((book, index) => (
                                        <div key={index} className='col-sm-4'>
                                            <ItemCard key={book.id} item={book} />
                                        </div>
                                    ))}
                                    </div>
                            );
                        }
                    })()}
                </div>
        );
    }
}

export default IndexPage;