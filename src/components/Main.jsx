import React, { Component } from 'react'
import VideoInput from './views/VideoInput'; // used as mirror overlay with facial recognition through face-api.js

import './Main.css';
import moment from 'moment';
import { Fade } from '@material-ui/core';

export default class Main extends Component {
	constructor(props) {
		super(props)

		this.setProfile = this.setProfile.bind(this);
		this.welcome = this.welcome.bind(this);

		this.state = {
			profile: "",
			profiles: ['Jeremiah', 'Elias', 'Haroon', 'JP'],
			welcomeText: "",
			welcomeFade: true
		}
	}

	setProfile(profile) {
		this.setState(prevState => { 
			return { profile }
		})
	}

	welcome() {
		console.log("Profile:", this.state.profile)
		let welcomeText = "";
		if(this.state.profile) {
			let hours = moment().hours();
			if(hours >= 5 && hours <= 11) {
				welcomeText = "Good Morning, " + this.state.profile;
			} else if(hours >= 12 && hours <= 17) {
				welcomeText = "Good Afternoon, " + this.state.profile;
			} else {
				welcomeText = "Good Evening, " + this.state.profile;
			}
		}
		return(
			!this.state.profile ? "" :
			<Fade in={this.state.welcomeFade}>
				<span id="welcomeText">
					{welcomeText}
				</span>
			</Fade>
		)
	}

	render() {
		return(
			<div id="MainContainer">
				{this.welcome()}
				<VideoInput
					profile={this.state.profile}
					setProfile={this.setProfile}
				/>
			</div>
		);
	}
};
