import React, { Component } from 'react'
<<<<<<< HEAD
import { Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Weather from './Weather.jsx';
import ImageInput from './views/ImageInput'; //to get descriptors
import VideoInput from './views/VideoInput';

import VideoInput from './views/VideoInput'; // used as mirror overlay with facial recognition through face-api.js
>>>>>>> df8c13ee5e22b2fd3ff5d5360b6b543c560c14d3

import './Main.css';

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.setProfile = this.setProfile.bind(this);
        this.welcome = this.welcome.bind(this);

        this.state = {
            profile: "",
            profiles: ['Jeremiah', 'Elias', 'Haroon', 'JP']
        }
    }

    setProfile(profile) {
        this.setState({ profile }, () => this.welcome())
    }

    welcome() {
        console.log("Profile:", this.state.profile)
    }

    render() {
        return(
            <div id="MainContainer">
<<<<<<< HEAD
                <Router history={createHistory()}>
                    <div className="route">
                        <Route exact path="/" component={VideoInput} /> 
                        <Route exact path="/photo" component={ImageInput} />
                        <Route exact path="/weather" component={Weather}/>

                    </div>
                </Router> 
=======
                <VideoInput
                    profile={this.state.profile}
                    setProfile={this.setProfile}
                />
>>>>>>> df8c13ee5e22b2fd3ff5d5360b6b543c560c14d3
            </div>
        );
    }
};
