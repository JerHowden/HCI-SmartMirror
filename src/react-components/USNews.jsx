import React from 'react';
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

const USNews = (props) => {

    const classes = useStyles();
    // console.log({ props.headlines });
    
    return (
        // <div>{props.headlines}</div>
        <div>
            {props.headlines.map((article, index) => {
                return <Card className={classes.card} href={article.url}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
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

    );
}

export default USNews;