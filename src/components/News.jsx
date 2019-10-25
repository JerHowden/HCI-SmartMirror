import React, {useState, useEffect , Component} from 'react';
import { withRouter } from 'react-router-dom';
import { getStory } from '../services/hnApi'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//Carousel
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import carousel from './Carousel';

// import Carousel from 'react-responsive-carousel';
// var Carousel = require('react-responsive-carousel').Carousel;

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
        // eslint-disable-next-line
    }, []);

    if (story.url){
        console.log(story);
    }

    const classes = useStyles();
    
    return story && story.url ? (
        <>  
                <carousel />
                <Card className={classes.card} id='News'>
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

export default withRouter(News);