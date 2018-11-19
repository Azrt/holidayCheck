import { 
    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_ERROR,
    ADD_COMMENT,
} from '../constants';

import axios from 'axios';

const REVIEWS_URL = 'reviews.json';
const RANDOM_USER_URL = 'https://randomuser.me/api/';

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
    };
}

export function addComment({ comment, id }) {
    return dispatch => {
        axios.get(RANDOM_USER_URL)
            .then(res => res.data.results[0])
            .then(user => {
                const payload = {
                    [id.toString()]: {
                        ...comment,
                        user,
                    },
                };

                dispatch({
                    type: ADD_COMMENT,
                    payload,
                });
            });
    };
}