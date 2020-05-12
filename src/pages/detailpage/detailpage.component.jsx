import React from "react";
import ProductInfo from "../../shared/productinfo/productinfo.component";
import Review from "../../shared/review/review.component";
import {Link} from "react-router-dom";

export const DetailPage = props => (
   <Link to="">
       <div className="container">
           <div className="row">
               <div className="col-sm-8">
                   <ProductInfo prod='${props.product}'/>
                   <Review reviews='${props.product.reviews}'/>
               </div>
           </div>
       </div>
   </Link>
);