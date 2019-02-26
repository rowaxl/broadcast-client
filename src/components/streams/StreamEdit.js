import React, { Component } from 'react';

class StreamEdit extends Component {
    render() {
        console.log(this.props);
        return (
            <div>StreamEdit:{this.props.match.params.id}</div>
        );
    }
};

export default StreamEdit;