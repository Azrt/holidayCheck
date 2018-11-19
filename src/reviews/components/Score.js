import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThumbsUp,
    faThumbsDown,
    faStar,
} from '@fortawesome/free-solid-svg-icons';

import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

export class Score extends Component {    
    constructor(props) {
        super(props);

        this.starsLength = 6;

        this.state = {
            stars: new Array(this.starsLength).fill(null).map((element, index) => index <= this.props.score),
        };
    }

    render() {
        return (
            <div className="score">
                {this.props.isRecommending &&         
                    <div className="score__recomendation score__recomendation--success">
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </div>
                }
        
                {!this.props.isRecommending &&
                    <div className="score__recomendation score__recomendation--error">
                        <FontAwesomeIcon icon={faThumbsDown} />
                    </div>
                }
                
                <div className="score__stars-container">

                    {this.state.stars.map(star =>
                        star
                            ? <FontAwesomeIcon className="score__star score__star--filled" icon={faStar} />
                            : <FontAwesomeIcon className="score__star score__star--none" icon={faStarRegular} />
                    )}

                    <span className="score__stars-summary">
                        {this.props.score + 1}/{this.starsLength}
                    </span>
                </div>
        
                
            </div>
        )
    }
};