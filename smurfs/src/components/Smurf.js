import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345,
    width: 200
  },
  media: {
    height: 140
  }
};

const Smurf = props => {
  const deleteSmurf = e => {
    props.deleteSmurf(props.smurf.id);
  };
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require("./smurf.jpg")}
          title="smurf"
          height="50"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.smurf.name}
          </Typography>
          <Typography component="p">age: {props.smurf.age}</Typography>
          <Typography component="p">height: {props.smurf.height}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={deleteSmurf}>
          delete
        </Button>
        <Button size="small" color="primary" onClick={deleteSmurf}>
          update
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(Smurf);
