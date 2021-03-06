import React from 'react';
import Photo from './Photo';
//import Comments from './Comments';
import createReactClass from 'create-react-class';
const Single = createReactClass({
    render() {
        const { postId } = this.props.params;
        const i = this.props.posts.findIndex(post => post.code === postId);
        const post = this.props.posts[i];
        //const postComments = this.props.comments[postId];
        return (
            <div className="single-photo">
                <Photo {...this.props} key={i} index={i} post={post} />
                {/* <Comments
                    postComments={postComments}
                    postId={postId}
                    {...this.props}
                /> */}
            </div>
        );
    }
});

export default Single;
