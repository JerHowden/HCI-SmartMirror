import React, { Component } from 'react';
import { TwitterTimelineEmbed } from "react-twitter-embed";
import './Twitter.css'

export default class Twitter extends Component{

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.profile && document.getElementById("twitter-widget-0").contentWindow) {
            console.log("IFRAME:", document.getElementById("twitter-widget-0").contentWindow.document)
            document.getElementById("twitter-widget-0").contentWindow.document.querySelector(".timeline-Header").style.display = "none";
            document.getElementById("twitter-widget-0").contentWindow.document.querySelector(".timeline-Footer").style.display = "none";
        }
    }

    render() {
        return (
            <div className="centerContent widget" style={this.props.style}>
                <div className="selfCenter">
                    <TwitterTimelineEmbed sourceType="url" url="https://twitter.com/mashable/lists/social-media" options={{ height: 300 }} theme="dark" />
                </div>
            </div>
        )
        
    }
    
}