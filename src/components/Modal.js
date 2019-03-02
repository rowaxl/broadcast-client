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
                    onClick={(e) => e.stopPropagation()}
                    className="ui standard modal visible active"
                >
                    <div className="header">Delete Stream</div>
                    <div className="content">
                        Are sure you want to delete this stream?
                    </div>
                    <div className="actions">
                        <button className="ui negative button">Delete</button>
                        <button
                            onClick={() => history.push('/')}
                            className="ui button"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
            ,document.querySelector('#modal')
        );
    };
};

export default Modal;
