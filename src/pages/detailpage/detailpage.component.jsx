import React, {Component} from "react";
import ProductInfo from "../../shared/productinfo/productinfo.component";
import Review from "../../shared/review/review.component";

export class DetailPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            book: null,
            //book: this.props,
            test: "one and a two"
        }
    };

    async componentDidMount(){
        const { id } = this.props.match.params;
        const url = 'http://localhost:3000/books/'+ id;
        const response = await fetch(url, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept': 'application/json'
                }
            });
        
        const json = await response.json();

        this.setState({book: json}); 

        console.log(this.state.book);
    }

    render() {
        const book = [this.state.book];
        return (
            <div className='container'>
                <div className='row'>
                   
                   {(() => {
                        if (this.state.book == null) {
                            return (
                                <div className="row">
                                    <p><em>Loading...</em></p>
                                </div>
                            )
                        } else {
                            return (
                                    <div className="row">
                                        <ProductInfo product={this.state.book} />
                                        <Review reviews={this.state.book.reviews} />
                                    </div>
                                
                            );
                        }
                    })()}
                </div>
            </div>
        );
    }
}

export default DetailPage;