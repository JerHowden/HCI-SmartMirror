import React, {useState, useEffect, Component } from 'react';
import { getStory } from '../services/hnApi'

import { makeStyles } from '@material-ui/core/styles'
import { Fade, Card, CardMedia, CardActionArea, CardContent, Typography } from '@material-ui/core';

import Twitter from './Twitter';

const useStyles = makeStyles({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 25,
    },
});

export const HackerNews = ({ storyId }) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);

    const classes = useStyles();

    return story && story.url ? (
        <>
            <Card className={classes.card}>
                <CardActionArea href={story.url}>
                    <CardMedia
                        className={classes.media}
                        image={story.img}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {story.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {story.by}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    ) : null;
};

export default class News extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <Fade in={this.props.fade} timeout={{ enter: 1000, exit: 500 }}>
                <Twitter profile={this.props.profile} style={this.props.style}/>
            </Fade>
        )
    }
}
