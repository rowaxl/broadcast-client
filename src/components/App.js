import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// dummy
const PageOne = () => {
    return (<div>
        PageOne
        <Link to="/two">To Page2</Link>
        </div>);
};

const PageTwo = () => {
    return (<div>
        PageTwo
        <Link to="/">To Page1</Link>
        </div>);
};

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={PageOne} />
                        <Route path="/two" component={PageTwo} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
};

export default App;