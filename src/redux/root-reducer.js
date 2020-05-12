import { combineReducers} from "redux";
import productReducer from "./product/product.reducer";

const rootReducer =  combineReducers({
    id: productReducer,
    title: productReducer,
    author: productReducer,
    average_rating: productReducer,
    reviews: productReducer,
    desc: productReducer,
    price: productReducer,
    image_src: productReducer
});

export default rootReducer;