import React, { Component } from 'react';
import {
	Fade,
	Card,
	CardHeader,
	CardContent,
	Button
} from '@material-ui/core';
import Draggable from 'react-draggable'; 

import './Agenda.css';
import moment from 'moment';

export default class Agenda extends Component {
	constructor(props) {
		super(props);

		this.state = {

			Jeremiah: [
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
			Elias: [
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
			Haroon: [
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
			JP: [
					{
						completed: true,
						time: '8:00PM',
						content: 'Set up grill for party'
					}
			]
		};
	}

	render() {
		return (
			<Fade in={this.props.fade} timeout={{ enter: 1000, exit: 500 }}>
				<div id="AgendaContainer" className="widget" style={this.props.style}>
					{this.props.profile ? (
            <Draggable>
              <Card>
                <CardHeader
                  title="Agenda"
                  subheader={moment().format("dddd")}
                />
                <CardContent>
                  {this.state[this.props.profile].map(
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
            </Draggable>
					) : (
						<div />
					)}
				</div>
			</Fade>
		);
	}
}
