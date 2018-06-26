import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';

import DisplayArrangement from "./pages/DisplayArrangement";
import HomePage from "./pages/HomePage";
import ApplyArrangement from "./pages/ApplyArrangement";
import About from './pages/About';
import OrderPage from './pages/ListOrder';

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);

        // insert history
        const href = window.location.href;
        window.history.replaceState({}, '', './#');
        window.history.pushState({}, '', href);
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <div className="background" />
                <HashRouter onUpdate={(e) => {console.log(e)}}>
                    <Switch>
                        <Route exact path={['/', '/index']} component={HomePage} />
                        <Route exact path="/post" component={ApplyArrangement} />
                        <Route exact path="/order" component={OrderPage}/>
                        <Route exact path="/arrangement/:arrangementId" component={DisplayArrangement} />
                        <Route exact path="/about" component={About} />
                    </Switch>
                </HashRouter >
            </div>
        )
    }
}

export default App;
