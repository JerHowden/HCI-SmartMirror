import React, { Component } from 'react'
import axios from 'axios'
// import USNews from './USNews'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class USNews extends Component {

    constructor(props) {
        super(props);

        this.state = {
            headlines: [],
            Elias: 'science',
            Jeremiah: 'health',
            JP: 'sports',
            Haroon: 'business'
        }; 
    }

    componentWillReceiveProps(nextprops){
        if (nextprops.profile){
            axios.get('https://newsapi.org/v2/top-headlines?country=us&category=' + this.state[nextprops.profile] + '&apiKey=4c9b83f8f8804ae3a674087f446bb422')
                .then(response => {
                    console.log(response);
                    this.setState({ headlines: response.data.articles }) //may be response.data.articles
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    render() {

        const useStyles = makeStyles({
            card: {
                maxWidth: 345,
            },
            media: {
                height: 140,
            },
        });

        // const classes = useStyles();
        const { headlines } = this.state

        return (
            <div>
                {/* {
                    headlines.length ?
                    <USNews headlines={ headlines }/> :
                    null
                } */}

                <div>
                    {this.state.headlines.map((article, index) => {
                        return <Card href={article.url}>
                            <CardActionArea>
                                <CardMedia
                                    image={article.img}
                                    title={article.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {article.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {article.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                            </CardActions>
                        </Card>
                    })}
                </div>
            </div>

        )
    }
}
