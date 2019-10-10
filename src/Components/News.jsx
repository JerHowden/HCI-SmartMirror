import React, {useState, useEffect, Component } from 'react';
import { getStory } from '../services/hnApi'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export const News = ({ storyId }) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);

    // return story && story.url ? (
    //     <>
    //         <a href={story.url}>
    //             <p>{story.title}</p>
    //         </a>
    //         By: <p>{story.by}</p>
    //         Posted: <p>{story.time}</p>
    //     </>
    // ) : null;

    const classes = useStyles();

    return story && story.url ? (
        <>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {story.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {story.by}
                        </Typography>
                        <Typography variant="body5" color="textSecondary" component="p">
                            {story.time}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
        </>
    ) : null;
};