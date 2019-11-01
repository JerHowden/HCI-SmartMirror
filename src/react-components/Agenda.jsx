import React, { Component } from 'react';
import { Fade, Card, CardHeader, CardContent, CardActions } from '@material-ui/core'

import moment from 'moment'

export default class Agenda extends Component {

    constructor(props) {
        super(props)

        this.state = {
            position: 'today',
            Jeremiah: {
                yesterday: [
                    {
                        completed: true,
                        content: "Laundry"
                    }
                ],
                today: [],
                tomorrow: []
            },
            Elias: {

            },
            Haroon: {

            },
            JP: {

            }
        }
    }

    render() {
        return (
            <Fade in={this.props.fade}  timeout={{ enter: 1000, exit: 500 }}>
                <div id="AgendaContainer" className="widget" style={this.props.style}>
                    <Card>
                        {this.props.profile ? 
                            this.state[this.props.profile]
                        : <div/>}
                    </Card>
                </div>
			</Fade>
        )
    }

}