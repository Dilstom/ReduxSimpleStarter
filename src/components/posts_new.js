import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderField(field) {
        // const { meta } = field
        // const { meta: { touched, error }} = field
        // const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label htmlFor="">{field.label}</label>
                <input className='form-control'
                    type='text'
                    {...field.input}
                />
                <div className='text-help'>
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        console.log(values);
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });

    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field label='Title' name='title' component={this.renderField} />
                    <Field label='Categories' name='categories' component={this.renderField} />
                    <Field label='Post Content' name='content' component={this.renderField} />
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <Link to='/' className='btn btn-danger'>Cancel</Link>
                </form>
            </div>
        );
    }
}

function validate(values) {
    // console.log(values) -> { title: 'post1', categories: 'dfaffa', content: 'feafeg fdafefaz' }
    const errors = {}
    // Validate the inputs from 'values'
    if (!values.title) {
        errors.title = 'Enter a title';
    }
    if (!values.categories) {
        errors.categories = 'Enter some categories';
    }
    if (!values.content) {
        errors.content = 'Enter some content please';
    }

    // if errrors is empty, the form is fine to submit
    return errors;
}

export default reduxForm({
    // a unique name for the form
    validate: validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);