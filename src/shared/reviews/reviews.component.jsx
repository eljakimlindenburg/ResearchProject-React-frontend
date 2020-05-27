import React from "react";

const Reviews = ({reviews}) => {

    let reviewDivs = [];
    let stars = [];

    function getReviewDivs() {
        reviews.forEach(review =>
            reviewDivs.push(
                <div key={review.id} className="card-body">
                    <div className="float-left mr-3">
                        {(() => {
                            stars = [];
                            const nrOfStars = (Math.abs(review.rating / 20));
                            const maxStars = 5;
                            for (let i = 0; i < nrOfStars; i++) {
                                stars.push(<i key={i} className='fas fa-star fa-sm' style={{color: '#ffd800'}}/>);
                            }
                            if (maxStars > nrOfStars) {
                                let starsLeft = maxStars - nrOfStars;
                                for (let j = 0; j < starsLeft; j++) {
                                    stars.push(<i key={j + 10} className='far fa-star fa-sm'/>);
                                }
                            }
                        })()}
                        {
                            stars.map((star, index) => (
                                <i key={index}>{star}</i>
                            ))
                        }
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
                        if (!Object.keys(reviews).entries().next() == null) {
                            return (
                                <hr/>
                            )
                        }
                    })()}
                </div>))
        return reviewDivs;
    }

    return (
        <div className="card mt-3">
            <div className="card-header">Reviews
                {(() => {
                    if (reviews == null) {
                        return (
                            <p><em>Loading...</em></p>
                        )
                    } else {
                        return (
                            <div>{getReviewDivs()}</div>
                        );
                    }
                })()}
            </div>
        </div>
    );
};

export default Reviews;