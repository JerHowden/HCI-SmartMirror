import React, { Component } from 'react'
import VideoInput from './views/VideoInput'; // used as mirror overlay with facial recognition through face-api.js
import DateTime from './DateTime';

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
			fade: false,
			welcomeFade: false,
			welcomeText: ""
		}
	}

	setProfile(profile) {
		this.setState(prevState => {
			if(prevState.profile !== "" && profile === "")
				return { profile, fade: false }
			else 
				return { profile, welcomeFade: true }
		}, () => {
			if(profile)
				this.welcome()
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
		this.setState({ welcomeText }, () => {
			setTimeout(() => {
				this.setState({ welcomeFade: false }, () => {
					setTimeout(() => {
						this.setState({ fade: true })
					}, 1000)
				})
			}, 3000)
		})
	}

	render() {
		return(
			<div id="MainContainer">
				<Fade in={this.state.welcomeFade} timeout={{ enter: 500, exit: 500 }}>
					<span id="welcomeText" className="widget">
						{this.state.welcomeText}
					</span>
				</Fade>
				<DateTime fade={this.state.fade} />
				<VideoInput
					profile={this.state.profile}
					setProfile={this.setProfile}
				/>
			</div>
		);
	}
};
