import React, { Component } from 'react';

import { connect } from 'react-redux';

import { 
    getReviewsRequest,
} from '../../core/actions/reviews.actions';

import Review from '../components/Review';
import { Loader } from '../../common/Loader';

class ReviewsList extends Component {
    componentDidMount() {
        this.props.fetchReviews();
    }
        
    render() {
        return (
            <div class="review-list__container">
                {!!this.props.list.data.length && this.props.list.data.map(review => <Review {...review} />)}
                {this.props.list.isFetching && <Loader />}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchReviews: () => {
            dispatch(getReviewsRequest());
        },
    }
};

const mapStateToProps = store => {
    return {
        list: store.reviews.list,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);