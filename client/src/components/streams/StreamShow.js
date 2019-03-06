import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
    componentDidMount = () => {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        if (!this.props.stream) {
            return (
                <div className="ui active inverted dimmer">
                    <div className="ui indeterminate text loader">Preparing...</div>
                </div>
            );
        }
        
        const { title, description } = this.props.stream;

        return (
            <div className="ui container">
                <h4 className="header"> { title } </h4>
                <div className="content"> { description } </div>
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