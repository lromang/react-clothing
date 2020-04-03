import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/homepage.styles.scss';

const contents = [
    {'title': 'Hats',
     'subtitle': 'Buy Now!'},
    {'title': 'Jackets',
     'subtitle': 'Buy Now!'},
    {'title': 'Shirts',
     'subtitle': 'Buy Now!'},
    {'title': 'Pants',
     'subtitle': 'Buy Now!'},
    {'title': 'Skirts',
     'subtitle': 'Buy Now!'},
]

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            {contents.map(e => {
                return (
                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">
                                {e.title}
                            </h1>
                            <span className="subtitle">
                                {e.subtitle}
                            </span>
                        </div>
                    </div>)
            })}
        </div>
    </div>
);


export default HomePage;
