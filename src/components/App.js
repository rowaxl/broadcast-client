import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// dummy
const PageOne = () => {
    return <div>PageOne</div>;
};

const PageTwo = () => {
    return <div>PageTwo</div>;
};

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={PageOne} />
                        <Route path="/two" exact component={PageTwo} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
};

export default App;