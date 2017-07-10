// let's go!
import React from 'react';
import { render } from 'react-dom';
//import css
// import './styles/style.styl';
import './styles/style.css';
//import components
import Home from './container/Home';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import registerServiceWorker from './registerServiceWorker';

//import react router deps
import { Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Home}>
                <IndexRoute component={PhotoGrid} />
                <Route path="/view/:postId" component={Single} />
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));
registerServiceWorker();

//syncHistoryWithStore read about it from https://github.com/reactjs/react-router-redux
// how store.dispatch works
//mapActionsToprops do it in same file from video 10
// this.props.param link with router https://github.com/reactjs/react-router-tutorial/tree/master/lessons/06-params
//https://github.com/RickWong/react-transmit/issues/45

//how to set reducer default state and from where its getting previous state
// react mixin addon

//add functionality in redux option in debug mode
