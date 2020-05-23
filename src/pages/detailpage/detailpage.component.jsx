import React, {Component} from "react";
import ProductInfo from "../../shared/productinfo/productinfo.component";
import Review from "../../shared/review/review.component";

export class DetailPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            book: null
        }
    };

    async componentDidMount() {
        const {id} = this.props.match.params;
        const url = 'http://localhost:3000/books/' + id;
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const json = await response.json();

        this.setState({book: json});
    }

    render() {
        return (
            <div>
                {(() => {
                    if (this.state.book == null) {
                        return (
                            <span><em>Loading...</em></span>
                        )
                    } else {
                        return (
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <ProductInfo product={this.state.book}/>
                                        <Review reviews={this.state.book.reviews}/>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })()}
            </div>
        );
    }
}

export default DetailPage;