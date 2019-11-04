import React, { Component } from 'react';
import {
	Fade,
	Card,
	CardHeader,
	CardContent,
	CardActions,
	IconButton
} from '@material-ui/core';

import './Agenda.css';
import moment from 'moment';

export default class Agenda extends Component {
	constructor(props) {
		super(props);

		this.shift = this.shift.bind(this)

		this.state = {
			position: 'Yesterday',

			Jeremiah: {
				Yesterday: [
					{
						completed: true,
						time: '8:00AM',
						content: 'Security Work w/ Adam'
					},
					{
						completed: false,
						time: '5:30PM',
						content: 'Dinner with Dad'
					}
				],
				Today: [],
				Tomorrow: []
			},
			Elias: {
				Yesterday: [
					{
						completed: true,
						time: '6:00AM',
						content: 'Get Swole'
					},

					{
						completed: false,
						time: '1:00PM',
						content: 'Class'
					},

					{
						completed: false,
						time: '4:30PM',
						content: 'ACM Project'
					}
				],
				Today: [],
				Tomorrow: []
			},
			Haroon: {
				Yesterday: [
					{
						completed: true,
						time: '3:00PM',
						content: 'Discuss the agenda capabilities for HCI Presentation'
					},
					{
						completed: false,
						time: '5:00PM',
						content: 'Go to the gym'
					},

					{
						completed: false,
						time: '9:00PM',
						content: 'Sleep'
					}
				],
				Today: [],
				Tomorrow: []
			},
			JP: {
				Yesterday: [
					{
						completed: true,
						time: '8:00PM',
						content: 'Set up grill for party'
					}
				],
				Today: [],
				Tomorrow: []
			}
		};
	}

	shift(change) {
		if(this.state.position === "Yesterday" && change === 1) {
			this.setState({ position: "Today" })
		} else if(this.state.position === "Tomorrow" && change === -1) {
			this.setState({ position: "Today "})
		} else if(this.state.position === "Today" && change === 1) {
			this.setState({ position: "Tomorrow "})
		} else if(this.state.position === "Today" && change === -1) {
			this.setState({ position: "Yesterday" })
		}
	}

	render() {
		console.log(
			'Agenda:',
			this.state.position,
			this.props.profile,
			this.state[this.props.profile]
		);
		if (this.props.profile)
			console.log(this.state[this.props.profile][this.state.position]);

		return (
			<Fade in={this.props.fade} timeout={{ enter: 1000, exit: 500 }}>
				<div id="AgendaContainer" className="widget" style={this.props.style}>
					{this.props.profile ? (
						<Card>
							<div id="AgendaButtons">
								<IconButton onClick={() => this.shift(-1)} disabled={this.state.position === "Yesterday"}>
									{"<"}
								</IconButton>
								<IconButton onClick={() => this.shift(1)} disabled={this.state.position === "Tomorrow"}>
									{">"}
								</IconButton>
							</div>
							<CardHeader
								title={this.state.position}
								subheader={
									this.state.position === 'Yesterday'
										? moment()
												.subtract(1, 'days')
												.format('dddd, MMM Do')
										: this.state.position === 'Tomorrow'
										? moment()
												.add(1, 'days')
												.format('dddd, MMM Do')
										: moment().format('dddd, MMM Do')
								}
							/>
							<CardContent>
								{this.state[this.props.profile][this.state.position].map(
									item => {
										return (
											<div
												className={
													item.completed
														? 'agenda-item agenda-completed'
														: 'agenda-item'
												}
											>
												<hr></hr>
												<span>{item.time}</span>
												{' | '}
												<span>{item.content}</span>
											</div>
										);
									}
								)}
							</CardContent>
						</Card>
					) : (
						<div />
					)}
				</div>
			</Fade>
		);
	}
}
