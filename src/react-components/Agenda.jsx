import React, { Component } from 'react';
import { Fade, Card, CardHeader, CardContent, CardActions } from '@material-ui/core'

import './Agenda.css'
import moment from 'moment'

export default class Agenda extends Component {

    constructor(props) {
        super(props)

        this.state = {
            position: 'Yesterday',
            Jeremiah: {
                Yesterday: [
                    {
                        completed: true,
                        time: "11:00",
                        content: "Laundry"
                    }
                ],
                Today: [],
                Tomorrow: []
            },
            Elias: {
                Yesterday: [
                    {
                        completed: true,
                        time: "11:00",
                        content: "Laundry"
                    }
                ],
                Today: [],
                Tomorrow: []
            },
            Haroon: {
                Yesterday: [
                    {
                        completed: true,
                        time: "11:00",
                        content: "Laundry"
                    }
                ],
                Today: [],
                Tomorrow: []
            },
            JP: {
                Yesterday: [
                    {
                        completed: true,
                        time: "11:00",
                        content: "Laundry"
                    }
                ],
                Today: [],
                Tomorrow: []
            }
        }
    }

    render() {

        console.log("Agenda:", this.state.position, this.props.profile, this.state[this.props.profile])
        if(this.props.profile) console.log(this.state[this.props.profile][this.state.position])

        return (
            <Fade in={this.props.fade}  timeout={{ enter: 1000, exit: 500 }}>
                <div id="AgendaContainer" className="widget" style={this.props.style}>
                    {this.props.profile ? 
                        <Card>
                            <CardHeader
                                title={this.state.position}
                                subheader={this.state.position === "Yesterday" ? moment().subtract(1, 'days').format("dddd, MMM Do") :
                                    this.state.position === "Tomorrow" ? moment().add(1, 'days').format('dddd, MMM Do') :
                                    moment().format("dddd, MMM Do")
                                }
                            />
                            <CardContent>
                                {this.state[this.props.profile][this.state.position].map(item => {
                                    return(
                                        <div className={item.completed ? "agenda-item agenda-completed" : "agenda-item"}>
                                            <span>
                                                {item.time}
                                            </span>
                                            {" | "}
                                            <span>
                                                {item.content}
                                            </span>
                                        </div>
                                    )
                                })}
                            </CardContent>
                        </Card>
                    : <div/>}
                </div>
			</Fade>
        )
    }

}