import React from 'react';
import BookATour from './BookATour';

function Footer(props) {
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row align-items-center">
                    <h1 className="m-auto pb-3">Cityview Lofts</h1>
                </div>
                <div className="row align-items-center">
                    <div className="m-auto">
                        <BookATour />
                    </div>
                </div>
                <div className="row align-items-center">
                    <h5 className="m-auto pt-3">123 Cityview Lofts Lane. Ogden, UT 84401</h5>
                </div>
                <div className="row align-items-center">
                    <a role="button" className="m-auto pt-3" href="tel:+15551231234"><i className="fa fa-phone"></i> 1-555-123-1234</a>
                </div>
                <div className="row align-items-center">
                    <a role="button" className="m-auto" href="mailto:management@cityviewlofts.com"><i className="fa fa-envelope"></i> management@cityviewlofts.com</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;