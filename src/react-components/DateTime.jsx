import React, { Component } from 'react'
import moment from 'moment';
import Draggable from 'react-draggable';

import { Fade } from '@material-ui/core'

import './DateTime.css'

export default class DateTime extends Component {
    constructor(props) {
        super(props);

        this.tick = this.tick.bind(this);

        this.state = {
            moment: moment()
        };
    }
    
    tick() {
        this.setState({
            moment: moment()
        });
    }
    
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return(
            <Fade in={this.props.fade} timeout={{ enter: 1000, exit: 500 }}>
                {   this.props.style && this.props.style.bottom === 0 ?
                        <span id="DateTimeContainer" className="widget" style={this.props.style}>
                            <Draggable style={{
                            position: 'absolute'
                            }}>
                            <div>
                                <div id="TimeFormatted">
                                    {
                                        this.state.moment.seconds() % 2 === 0 ?
                                            this.state.moment.format("h:mma")
                                        :
                                            this.state.moment.format("h mma")
                                    }
                                </div>
                                <div id="DateFormatted">
                                    {this.state.moment.format("dddd, MMMM Do")}
                                </div>
                            </div>
                            </Draggable>
                        </span>
                    :
                        <span id="DateTimeContainer" className="widget" style={this.props.style}>
                            <div>
                                <div id="DateFormatted">
                                    {this.state.moment.format("dddd, MMMM Do")}
                                </div>
                                <div id="TimeFormatted">
                                    {
                                        this.state.moment.seconds() % 2 === 0 ?
                                            this.state.moment.format("h:mma")
                                        :
                                            this.state.moment.format("h mma")
                                    }
                                </div>
                            </div>
                        </span>
                }
            </Fade>
        );
    }
};
