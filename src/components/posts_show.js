import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    render() {
        // this.props === ownProps;
        const { post } = this.props;
        // console.log(this.props.post)
        if (!post) {
            return 'Loading...'
        }
        return (
            <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {

    return { post: posts[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchPost })(PostsShow);