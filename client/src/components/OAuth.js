import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class OAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: process.env.CLIENT_ID,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onOauthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onOauthChange);
            });
        });
    }

    onOauthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn === true) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon" />
                    SignOut
                </button>
            );
        } else {
            return (
                <button className="ui blue google button" onClick={this.onSignInClick}>
                    <i className="google icon" />
                    SignIn
                </button>
            );
        }
    }

    render() {
        return (
            <div className="item">{this.renderAuthButton()}</div>
        )
    }
};

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(
    mapStateToProps, {signIn, signOut}
)(OAuth);