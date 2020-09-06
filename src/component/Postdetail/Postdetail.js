import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

const Postdetail = () => {
    const classes = useStyles();
    const {postId} = useParams();
    const [postdetail, setpostdetail] = useState([]);
    useEffect(() => {
        const URL =`https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(URL)
        .then(res => res.json())
        .then(data => setpostdetail(data))
    }, [])
    return (
        <div style={{marginLeft:"30px", padding:"10px"}}>
             <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {postdetail.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {postdetail.body}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                        <CardActions>
                           <Link to={`/comment/${postdetail.id}`}><Button size="small" color="primary">
                               Show Comment
                            </Button></Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default Postdetail;