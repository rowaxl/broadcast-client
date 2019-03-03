import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import history from '../history';

class Modal extends Component {
    render() {
        return createPortal(
            <div
                onClick={() => history.push('/')}
                className="ui dimmer modals visible active"
            >
                <div
                    onClick={e => e.stopPropagation()}
                    className="ui standard modal visible active"
                >
                    <div className="header">{this.props.title}</div>
                    <div className="content">{this.props.content}</div>
                    <div className="actions">{this.props.actions}</div>
                </div>
            </div>
            ,document.querySelector('#modal')
        );
    };
};

export default Modal;
