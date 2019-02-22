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

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        return this.state.isSignedIn ?
            <button className="ui red google button" onClick={this.onSignOut}>
                <i className="google icon" />
                SignOut
            </button> :
            <button className="ui blue google button" onClick={this.onSignIn}>
                <i className="google icon" />
                SignIn
            </button> 
    }

    render() {
        return (
            <div className="item">{this.renderAuthButton()}</div>
        )
    }
};

export default OAuth;