import { 
    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_ERROR,
} from '../constants';

import axios from 'axios';

const REVIEWS_URL = 'reviews.json';

export function getReviewsRequest() {
    return dispatch => {
        dispatch({
            type: GET_REVIEWS_REQUEST,
        });

        axios.get(REVIEWS_URL)
            .then(res => res.data)
            .then(reviews => dispatch({
                type: GET_REVIEWS_SUCCESS,
                payload: reviews,
            }))
            .catch(error => dispatch({
                type: GET_REVIEWS_ERROR,
                payload: error,
            }));
    }
}