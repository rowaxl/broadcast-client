import React, { Component } from 'react';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';
import { fetchStream, editStream } from '../../actions';

class StreamEdit extends Component {
    componentDidMount = () => {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render() {
        if (!this.props.stream) {
            return (
                <div className="ui segment">
                    <div className="ui active inverted dimmer">
                        <div className="ui indeterminate text loader">Preparing...</div>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <h3>Edit Stream</h3>
                <StreamForm onSubmit={this.onSubmit} initialValues={this.props.stream}/>
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps,
    { fetchStream, editStream }
)(StreamEdit);