import React from 'react';
import Photo from './Photo';
import InfiniteScroll from 'redux-infinite-scroll';
import { fetchPosts } from '../actions/index';

class PhotoGrid extends React.Component {
    _loadMore() {
        let postlength = this.props.posts ? this.props.posts.length : 0;
        this.props.dispatch(fetchPosts(postlength));
    }
    _renderMessages() {
        return this.props.posts.map((post, i) =>
            <Photo {...this.props} key={i} index={i} post={post} />
        );
    }
    render() {
        console.log('photo grid=====');
        console.log(this.props);

        return (
            <div className="photo-grid">
                <InfiniteScroll
                    elementIsScrollable={false}
                    items={this._renderMessages()}
                    loadMore={this._loadMore.bind(this)}
                />
            </div>
        );
    }
}

export default PhotoGrid;
