import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import { fetchStream, deleteStream } from '../../actions';
import history from '../../history';

class StreamDelete extends Component {
    componentDidMount = () => {
        this.props.fetchStream(this.props.stream.id);
    }

    renderActions = () => {
        return (
            <React.Fragment>
                <button
                    className="ui negative button"
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

    render() {
        console.log(this.props);
        return (
            <div>
                <Modal
                    title="StreamDelete"
                    content="Are you sure want to delete this stream?"
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