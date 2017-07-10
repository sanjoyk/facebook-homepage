import React from 'react';
import { connect } from 'react-redux';

import createReactClass from 'create-react-class';

import PageBar from '../components/PageBar';
import LeftSideBar from '../components/LeftSideBar';
const Home = createReactClass({
    render() {
        console.log('Home children', this.props.children);
        console.log('Home props', this.props);
        return (
            <div>
                <PageBar />
                <LeftSideBar />
                {/* <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1> */}
                <div className="content-container">
                    <div className="news">news </div>
                    <div className="content">
                        {React.cloneElement(this.props.children, this.props)}
                    </div>
                </div>
            </div>
        );
    }
});
function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    };
}
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(actoionCreators, dispatch);
// }
//const App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default connect(mapStateToProps)(Home);
