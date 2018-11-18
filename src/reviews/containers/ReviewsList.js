import React, { Component } from 'react';

import { connect } from 'react-redux';

import { 
    getReviewsRequest,
} from '../../core/actions/reviews.actions';

class ReviewsList extends Component {
    componentDidMount() {
        this.props.fetchReviews();
    }

    componentDidUpdate() {
        console.log(this.props)
    }
        
    render() {
        return (
            <div>
               
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