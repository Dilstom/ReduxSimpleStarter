import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderField(field) {
        return (
            <div className='form-group'>
                <label htmlFor="">{field.label}</label>
                <input className='form-control'
                    type='text'
                    {...field.input}
                />
            </div>
        )
    }


    render() {
        return (
            <div>
                Posts new
                <form>
                    <Field label='Title' name='title' component={this.renderField} />
                    <Field label='Categories' name='categories' component={this.renderField} />
                    <Field label='Post Content' name='content' component={this.renderField} />
                </form>
            </div>
        );
    }
}

function validate(values) {
    // console.log(values) -> { title: 'post1', categories: 'dfaffa', content: 'feafeg fdafefaz' }
}

export default reduxForm({
    // a unique name for the form
    validate: validate,
    form: 'PostsNewForm'
})(PostsNew);