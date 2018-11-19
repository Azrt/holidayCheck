import React, { Component } from 'react';

import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import {
    CommentForm,
    Score,
    Comment,
} from './';

export default class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clickableDescription: true,
            displayCommentForm: false,            
        };
    }

    get reviewDate() {
        return moment(this.props.created).format('Do MMMM YYYY');
    }

    showFullDescription(event) {
        this.state.clickableDescription && this.setState({clickableDescription: false});

        if (event.target.offsetHeight < event.target.scrollHeight) {
            event.persist();
            setTimeout(() => {
               event.target.style.height = `${event.target.offsetHeight + 2}px`; 
               this.showFullDescription(event);
            }, 1);

            return;
        }

        event.target.classList.add('review__description--full');
    }

    onCommentFormSubmit(comment) {
        this.props.onSubmit(comment, this.props.id);
    }

    onCommentFormClose() {
        this.setState({
            displayCommentForm: false,
        });
    }

    onAddCommentButtonClick() {
        this.setState({
            displayCommentForm: true,
        });
    }

    render() {
        return (
            <div className="review">
                <div className="review__avatar-container">
                    <figure className="review__avatar-figure">
                        <img src={this.props.avatar} className="review__avatar" />
                    </figure>
                </div>

                <p className="review__author">
                    {this.props.first_name} {this.props.last_name}
                </p>
                <p className="review__date">
                    {this.reviewDate}
                </p>

                <h2 className="review__title">
                    {this.props.title}
                </h2>

                <Score
                    isRecommending={this.props.isRecommending}
                    score={this.props.score}
                />
 
                <p
                    onClick={this.state.clickableDescription && this.showFullDescription.bind(this)}
                    className="review__description">
                    {this.props.description}
                </p>

                {this.state.displayCommentForm &&
                 !this.props.comment &&
                    <div className="review__comment-form">
                        <FontAwesomeIcon
                            icon={faTimesCircle}
                            onClick={this.onCommentFormClose.bind(this)}
                            className="review__comment-close"
                        />
                        <CommentForm onSubmit={this.onCommentFormSubmit.bind(this)} />
                    </div>
                }

                {!!this.props.comment && <Comment {...this.props.comment} />}

                {!this.props.comment &&
                    <div className="button__container">
                        <button
                            onClick={this.onAddCommentButtonClick.bind(this)}
                            className="button">
                            Add comment
                        </button>
                    </div>
                }
            </div>
        )
    }
}