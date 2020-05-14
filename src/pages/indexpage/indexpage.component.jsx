import React, {Component} from 'react';
import {ItemCard} from "../../shared/itemcard/itemcard.component";

export class IndexPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: []
        }
    };

    async componentDidMount() {
        const url = 'http://localhost:3000/books';
        const response = await fetch(url);
        const json = await response.json();
        this.setState({books: json});
    }

    render() {
        const books = [this.state.books];
        return (
            <div className='container'>
                <div className='row'>
                    {(() => {
                        if (books == null) {
                            return (
                                <p><em>Loading...</em></p>
                            )
                        } else {
                            return (
                                <div className='col-sm-4'>
                                    {this.state.books.map(book => (
                                        <ItemCard key={book.id} item={book} />
                                    ))}
                                </div>
                            );
                        }
                    })()}
                </div>
            </div>
        );
    }
}

export default IndexPage;