import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class Modal extends Component {
    render() {
        return createPortal(
            <div className="ui dimmer modals visible active">
                <div className="ui standard modal visible active">
                    This is Modal.
                </div>
            </div>,
            document.querySelector('#modal')
        );
    };
};

export default Modal;
