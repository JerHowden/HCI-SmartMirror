import React, { Component } from 'react';
import {
  Fade,
  Card,
  CardHeader,
  CardContent,
  CardActions
} from '@material-ui/core';
import Draggable from 'react-draggable'; 

import './Agenda.css';
import moment from 'moment';

export default class Agenda extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 'Yesterday',

      Jeremiah: {
        Yesterday: [
          {
            completed: true,
            time: '8:00AM',
            content: 'Work'
          },
          {
            completed: false,
            time: '5:30PM',
            content: 'Code in React'
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
            <Draggable style={{
            position: 'absolute'
            }}>
            <Card>
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
            </Draggable>
            ) : (
              <div />
            )}
        </div>
      </Fade>
    );
  }
}
