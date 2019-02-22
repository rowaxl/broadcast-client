import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import OAuth from './OAuth';

class Header extends Component {
    render() {
        return (
            <div className="ui secondary pointing menu">
                <Link to="/" className="item">Streamer</Link>
                <div className="right menu">
                    <Link to="/" className="item">All Streams</Link>
                    <OAuth />
                </div>
            </div>
        );
    }
};

export default Header;