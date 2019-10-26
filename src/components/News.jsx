import React, {useState, useEffect, Component } from 'react';
import { getStory } from '../services/hnApi'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//Carousel
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { Slide } from 'material-auto-rotating-carousel';
const { red, blue, green } = require('@material-ui/core/colors');
const Button = require('@material-ui/core/Button').default;

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
    let [open, setOpen] = useState(false)

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);

    const classes = useStyles();

    return story && story.url ? (
        // <>
        //     <Card className={classes.card}>
        //         <CardActionArea href={story.url}>
        //             <CardMedia
        //                 className={classes.media}
        //                 image={story.img}
        //                 title="Contemplative Reptile"
        //             />
        //             <CardContent>
        //                 <Typography gutterBottom variant="h5" component="h2">
        //                     {story.title}
        //                 </Typography>
        //                 <Typography variant="body2" color="textSecondary" component="p">
        //                     {story.by}
        //                 </Typography>
        //             </CardContent>
        //         </CardActionArea>
        //     </Card>
        // </>

    <div style={{ position: 'relative', width: '100%', height: 500 }}>
        <Button onClick={() => setOpen(true)}>Open carousel</Button>
        <AutoRotatingCarousel
            label='Get started'
            open={open}
            onClose={() => setOpen(false)}
            onStart={() => setOpen(false)}
            mobile
            autoplay={false}
            style={{ position: 'absolute' }}
        >
            <Slide

            />
        </AutoRotatingCarousel>
    </div>
    ) : null;
};