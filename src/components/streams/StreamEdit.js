import React, { Component } from 'react';
import { connect } from 'react-redux';

class StreamEdit extends Component {
    render() {
        console.log(this.props);
        return (
            <div>StreamEdit:{this.props.match.params.id}</div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps)(StreamEdit);