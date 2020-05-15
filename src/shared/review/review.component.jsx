import React, {Component} from "react";

export class Review extends Component {
    constructor(props) {
        super(props);

        
        this.state = {
            ...props
        }
    };

   /* createStars = props => {
        let stars = [];
        const nrOfStars = props.review.rating / 20;
        const maxStars = 5;
        for (var i = 0; i < nrOfStars; i++) {
            stars.push(<i className="fas fa-star fa-sm" style={{color: "#ffd800"}}/>)
        }
        if (maxStars > nrOfStars) {
            var starsLeft = maxStars - nrOfStars;
            for (var j = 0; j < starsLeft; j++) {
                stars.push(<i className="far fa-star fa-sm"/>)
            }
        }
    }; */
    

    createReviews = () => {
        let reviewDivs = [];
        const reviews = this.state.reviews;

        console.log(reviews);

        reviews.forEach( review => 
            reviewDivs.push(
                <div key={review.id} className="card-body">
                    <div className="float-left mr-3">
                        
                    </div>
                    <span> | </span>
                    <p className="card-title text-primary ml-3" style={{display: "inline-block"}}>{review.title}</p>
                    <p className="card-text">
                        {review.comment}
                    </p>
                    <p className="card-author card-text">
                        <small>
                            Posted by {review.author_name} on 30/03/2020
                        </small>
                    </p>
                    {(() => {
                        if (!Object.keys(reviews).entries().next() == null) { return (
                                <hr/>
                            )
                        }
                    })()}
                </div>))
       
        

        return reviewDivs;
    };

    render() {
        const reviews = [this.state.reviews];
        return (
            <div className="card mt-3">
                <div className="card-header">Reviews>
                    {(() => {
                        if (reviews == null) {
                            return (
                                <p><em>Loading...</em></p>
                            )
                        } else {
                            return (
                                <div>{this.createReviews()}</div>
                            );
                        }
                    })()}
                </div>
            </div>
        );
    }
}

export default Review;