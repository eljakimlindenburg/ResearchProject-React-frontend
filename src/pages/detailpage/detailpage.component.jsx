import React, {Component} from "react";
import ProductInfo from "../../shared/productinfo/productinfo.component";
import Review from "../../shared/review/review.component";

export class DetailPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            book: props
        }
    };

    render() {
        const book = [this.state.book];
        return (
            <div className='container'>
                <div className='row'>
                    {(() => {
                        if (book == null) {
                            return (
                                <p><em>Loading...</em></p>
                            )
                        } else {
                            return (
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <ProductInfo product={this.state.book}/>
                                            <Review reviews={this.state.reviews}/>
                                        </div>
                                    </div>
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