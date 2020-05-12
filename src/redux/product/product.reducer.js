const INITIAL_STATE = {
    id: "",
    title: "",
    author: "",
    average_rating: 0,
    reviews: [],
    desc: "",
    price: 0,
    image_src: ""
};

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_PRODUCT':
            return {
                ...state,
                id: action.payload,
                title: action.payload,
                author: action.payload,
                average_rating: action.payload,
                reviews: action.payload,
                desc: action.payload,
                price: action.payload,
                image_src: action.payload
            };
        default:
            return state;
    }
};

export default productReducer;