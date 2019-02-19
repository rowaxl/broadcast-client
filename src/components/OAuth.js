import React, { Component } from 'react';

class OAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: process.env.CLIENT_ID,
                scope: 'email'
            });
        });
    }

    render() {
        return (
            <div className="item">OAuth</div>
        )
    }
};

export default OAuth;