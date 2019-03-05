import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
    componentDidMount = () => {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        console.log(this.props);
        if (!this.props.stream) {
            return (
                <div className="ui active inverted dimmer">
                    <div className="ui indeterminate text loader">Preparing...</div>
                </div>
            );
        }

        return (
            <div>
                <div className="header">{this.props.stream.title}</div>
                <div className="content">{this.props.stream.description}</div>
            </div>
        );
    }
};


const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}


export default connect(
    mapStateToProps, { fetchStream }
)(StreamShow);