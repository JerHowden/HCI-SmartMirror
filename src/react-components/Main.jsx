import React, { Component } from 'react'

import VideoInput from './views/VideoInput'; // used as mirror overlay with facial recognition through face-api.js
import DateTime from './DateTime';
import Commute from './Commute';

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
			welcomeText: "",
			positionStyles: {
				tl:	{top: 0, left: 0, textAlign: 'left'},
				t:	{top: 0, left: 0, right: 0, textAlign: 'center'},
				tr:	{top: 0, right: 0, textAlign: 'right'},
				l:	{top: 0, bottom: 0, left: 0, margin: 'auto 0', textAlign: 'left', height: 'fit-content'},
				r:	{top: 0, bottom: 0, right: 0, margin: 'auto 0', textAlign: 'right', height: 'fit-content'},
				bl:	{bottom: 0, left: 0, textAlign: 'left'},
				b:	{bottom: 0, left: 0, right: 0, textAlign: 'center'},
				br:	{bottom: 0, right: 0, textAlign: 'right'}
			}, 
			positionProfiles: {
				Jeremiah: {
					News: 'tl',
					DateTime: 'tr', // Good on all positions
					Weather: 'r',
					Agenda: 'bl',
					Commute: 'br' // Good on all positions
				},
				Elias: {

				},
				Haroon: {

				},
				JP: {

				}
			}
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
				<DateTime fade={this.state.fade} style={this.state.profile ? this.state.positionStyles[this.state.positionProfiles[this.state.profile].DateTime] : {}} />
				<Commute fade={this.state.fade} profile={this.state.profile} style={this.state.profile ? this.state.positionStyles[this.state.positionProfiles[this.state.profile].Commute] : {}} />
				<VideoInput
					profile={this.state.profile}
					setProfile={this.setProfile}
				/>
			</div>
		);
	}
};
