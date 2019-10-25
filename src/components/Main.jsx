import React, { Component } from 'react'
import { Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import ImageInput from './views/ImageInput'; //to get descriptors; not used in interface
import VideoInput from './views/VideoInput'; // used as mirror overlay with facial recognition through face-api.js

import './Main.css';
import { StoriesContainer } from '../Container/StoriesContainer';
import carousel from './Carousel';

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
                        <Route exact path="/news" component={StoriesContainer} />
                        <Route exact path="/carousel" component={carousel} />
                    </div>
                    
                </Router> 
            </div>
        );
    }
};
