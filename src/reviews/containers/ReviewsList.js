import React, { Component } from 'react';

import { connect } from 'react-redux';

import { 
    getReviewsRequest,
    addComment,
} from '../../core/actions/reviews.actions';

import Review from '../components/Review';
import { Loader } from '../../common/Loader';

class ReviewsList extends Component {
    componentDidMount() {
        this.props.fetchReviews();
    }

    onCommentSubmit(comment, id) {
        this.props.addComment({
            comment,
            id,
        });
    }
        
    render() {
        return (
            <div class="review-list__container">
                {!!this.props.list.data.length && this.props.list.data.map(review => <Review {...review} comment={this.props.comments[review.id.toString()]} onSubmit={this.onCommentSubmit.bind(this)} />)}
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
        addComment: comment => {
            dispatch(addComment(comment));
        }
    }
};

const mapStateToProps = store => {
    return {
        list: store.reviews.list,
        comments: store.reviews.comments,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);