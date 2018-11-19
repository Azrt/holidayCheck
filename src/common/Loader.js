import React from 'react';

import IMG from '../assets/loader.svg';

export const Loader = () => (
    <div className="loader__container">
        <figure>
            <img src={IMG} className="loader" />
        </figure>
    </div>
);