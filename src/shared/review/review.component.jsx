import React from "react";

const Review = props => (
    <div className="card mt-3">
        <div className="card-header">Reviews</div>

        <div className="card-body">
            <div className="float-left mr-3">

                <i className="fas fa-star fa-sm" style="color:#ffd800"></i>

                <i className="far fa-star fa-sm"></i>
            </div>
            <span> | </span>
            <p className="card-title text-primary ml-3" style="display:inline-block;">{props.title}</p>

            <p className="card-text">
                {props.comment}
            </p>

            <p className="card-author card-text">
                <small>
                    'Posted by ${props.author_name} on 30/03/2020'
                </small>
            </p>
        </div>

            <hr/>

    </div>
);

export default Review;