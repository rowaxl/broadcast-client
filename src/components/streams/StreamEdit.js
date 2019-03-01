import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchStream, editStream } from '../../actions';

class StreamEdit extends Component {
    componentDidMount = () => {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{ error }</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = formValues => {
        this.props.editStream(this.props.stream.match.id, formValues);
    }

    render() {
        console.log(this.props);

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
            <form
                className="ui form error"
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                <Field
                    name="title"
                    component={this.renderInput}
                    value={this.props.stream.title}
                    label='Enter Title'
                />
                <Field
                    name="description"
                    component={this.renderInput}
                    value={this.props.stream.description}
                    label='Enter Description'
                />
                <button className="ui button primary">Edit</button>
            </form>
        );
    }
};


const validate = formValues => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
};

const formWrapped = reduxForm({
    form: 'streamEdit',
    validate
})(StreamEdit);

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps,
    { fetchStream, editStream }
)(formWrapped);