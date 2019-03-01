import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends Component {
    componentDidMount = () => {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        console.log(this.props);

        if (!this.props.stream) {
            return (
                <div class="ui segment">
                    <div class="ui active inverted dimmer">
                        <div class="ui indeterminate text loader">Preparing Files</div>
                    </div>
                </div>
            );
        }

        return (
            <div>
                {this.props.stream.title}
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchStream})(StreamEdit);