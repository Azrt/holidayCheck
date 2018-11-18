import React from 'react';

import { Header } from './Header';

export const Layout = (Component) => (
    <div className="layout__container">
        <div className="container">
            <Header />

            <section className="layout__content">
                <Component />
            </section>
        </div>
    </div>
);