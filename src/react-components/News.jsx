import React, { Component } from 'react'
import axios from 'axios'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Fade } from '@material-ui/core';

import './News.css'

export default class News extends Component {

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
                    this.setState({ headlines: response.data.articles }) //may be response.data.articles
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    render() {
        return (
            <Fade in={this.props.fade} timeout={{ enter: 1000, exit: 500 }}>
                <div id="NewsContainer" className="widget" style={this.props.style}>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={125}
                        totalSlides={this.state.headlines.length}
                        interval={10000}
                        isPlaying={true}
                    >
                        <Slider>
                            {this.state.headlines.map((article, index) => {
                                return( 
                                    <Slide index>
                                        <Card>
                                            <CardActionArea>
                                                {article.urlToImage ?
                                                    <CardMedia
                                                        component="img"
                                                        height="100"
                                                        image={article.urlToImage}
                                                        title={article.title}
                                                    />
                                                : null}
                                                <CardContent>
                                                    <Typography gutterBottom component="h5">
                                                        {article.title.substr(0, article.title.lastIndexOf("-")-1)}
                                                    </Typography>
                                                    <Typography component="div" id="News-Source">
                                                        {article.source.name}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Slide>
                                )
                            })}
                        </Slider>
                    </CarouselProvider>
                </div>
            </Fade>
        )
    }
}
