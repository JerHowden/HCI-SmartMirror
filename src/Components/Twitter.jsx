// TwitterContainer.js
import React, { Component } from 'react';
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default class Twitter extends Component{

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="centerContent">
                <div className="selfCenter standardWidth">
                    <TwitterTimelineEmbed sourceType="url" url="https://twitter.com/mashable/lists/social-media" options={{ height: 1600 }} />
                </div>
            </div>
        )
        
    }
    
}

// export default Twitter;
