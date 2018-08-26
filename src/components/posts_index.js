import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';


class PostsIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div className='text-xs-right'>
                    <Link className='btn btn-primary' to='/posts/new'>
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                {_.map(this.props.posts, post => {
                    return (
                        <li key={post.id} className='list-group-item'>
                            <Link to={`/posts/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    )
                })}
            </div>
        );
    }
}

const MapStateToProps = state => {
    return {
        posts: state.posts
    }
}
export default connect(MapStateToProps, { fetchPosts })(PostsIndex);