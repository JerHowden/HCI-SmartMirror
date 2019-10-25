import React, { Component } from 'react'
import VideoInput from './views/VideoInput'; // used as mirror overlay with facial recognition through face-api.js

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
                <VideoInput
                    profile={this.state.profile}
                    setProfile={this.setProfile}
                />
            </div>
        );
    }
};
