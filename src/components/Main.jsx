import React, { Component } from 'react'
import { Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import ImageInput from './views/ImageInput'; //to get descriptors
import VideoInput from './views/VideoInput';

import './Main.css';
// import './News.jsx';

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: "",
            profiles: ['Jeremiah', 'Elias', 'Haroon', 'JP']
        }
    }

    render() {
        return(
            <div id="MainContainer">
                <Router history={createHistory()}>
                    <div className="route">
                        <Route exact path="/" component={VideoInput} /> 
                        <Route exact path="/photo" component={ImageInput} />
                    </div>
                </Router> 
            </div>
        );
    }
};
