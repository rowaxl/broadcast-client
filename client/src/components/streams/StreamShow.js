import React, { Component } from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

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
            <div>
                <video ref={this.videoRef} />
                <h1 className="header"> { title } </h1>
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