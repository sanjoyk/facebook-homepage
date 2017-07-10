import React from 'react';
import { Link } from 'react-router';
import createReactClass from 'create-react-class';
const PageBar = createReactClass({
    render() {
        return (
            <div className="page-bar">
                <h1>
                    <Link to="/">
                        <span className="_2md">
                            <span className="_2md">Facebook</span>
                            <hr />
                        </span>
                    </Link>
                </h1>
            </div>
        );
    }
});
export default PageBar;
