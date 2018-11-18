import { 
    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_ERROR,
} from '../constants';

const reviewsInitialState = {
    list: {
        data: [],
        isLoading: false,
        errors: {},
    },
};

export default function reducer(state = reviewsInitialState, action) {
    switch (action.type) {
        case GET_REVIEWS_REQUEST:
            return {
                ...state,
                list: {
                    ...state.list,
                    isLoading: true,
                    errors: {},
                }
            };

        case GET_REVIEWS_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    isLoading: false,
                    data: action.payload,
                },
            };

        case GET_REVIEWS_ERROR:
            return {
                ...state,
                list: {
                    ...state.list,
                    isLoading: false,
                    errors: action.payload,
                },
            };

        default:
            return state;
    }
}
