import React, {useState, useEffect, Component } from 'react';
import { getStory } from '../services/hnApi'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 25,
    },
});

export const News = ({ storyId }) => {
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