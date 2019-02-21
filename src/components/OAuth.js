import React, { Component } from 'react';

class OAuth extends Component {
    state = { isSignedIn: false };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: process.env.CLIENT_ID,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onOauthChange);
            });
        });
    }

    onOauthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    }

    renderAuthButton() {
        if (!this.state.isSignedIn) {
            return <div>SignIn</div>
        } else {
            return <div>SignOut</div>
        }
    }

    render() {
        return (
            <div className="item">{this.renderAuthButton()}</div>
        )
    }
};

export default OAuth;