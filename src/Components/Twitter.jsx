import React, { Component } from 'react';
import { TwitterTimelineEmbed } from "react-twitter-embed";
import './Twitter.css'

export default class Twitter extends Component{

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="centerContent">
                <div className="selfCenter">
                    <TwitterTimelineEmbed sourceType="url" url="https://twitter.com/mashable/lists/social-media" options={{ height: 450 }} theme="dark" />
                </div>
            </div>
        )
        
    }
    
}