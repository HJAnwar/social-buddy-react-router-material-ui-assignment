import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
  },
  media: {
    height: 140,
  },
});


const Post = (props) => {
    const {title, body, id} =props.post;
    const classes = useStyles();
    return (
        <div style={{marginLeft:"30px", padding:"10px"}}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                        <CardActions>
                            <Link to={`/post/${id}`}><Button size="small" color="primary">
                                Learn More
                            </Button></Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default Post;