import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FunctionComponent<{}> = (props) => {
    return (
        <nav className="App-nav">
            <Link to="/">Home</Link> |
            <Link to="/todos">Todo List</Link> |
            <Link to="/weather">Check weather</Link>
        </nav>
    )
};

export default Navbar;