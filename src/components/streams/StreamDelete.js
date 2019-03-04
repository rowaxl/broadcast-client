import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import { fetchStream, deleteStream } from '../../actions';
import history from '../../history';

class StreamDelete extends Component {
    componentDidMount = () => {
        this.props.fetchStream(this.props.match.params.id);
    }

    deleteStream = () => {
        if (this.props.stream) {
            this.props.deleteStream(this.props.stream.id);
            history.push('/');
        }
    }

    renderActions = () => {
        return (
            <React.Fragment>
                <button
                    className="ui negative button"
                    onClick={this.deleteStream}
                >
                    Delete
                </button>
                <button
                    onClick={() => history.push('/')}
                    className="ui button"
                >
                    Cancel
                </button>
            </React.Fragment>
        );
    }

    renderContents = () => {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }

        return `Are you sure you want to delete the stream : ${this.props.stream.title}`
    }

    render() {
        if (!this.props.stream) {
            return (
                <div className="ui active inverted dimmer">
                    <div className="ui indeterminate text loader">Preparing...</div>
                </div>
            );
        }

        return (
            <div>
                <Modal
                    title="StreamDelete"
                    content={this.renderContents()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps,
    { fetchStream, deleteStream }
)(StreamDelete);