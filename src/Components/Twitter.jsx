// TwitterContainer.js
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Twitter = () => {
    return (
        <div className="centerContent">
            <div className="selfCenter standardWidth">
                <TwitterTimelineEmbed sourceType="url" url="https://twitter.com/mashable/lists/social-media" options={{ height: 1600 }} />
            </div>
        </div>
    );
};

export default Twitter;