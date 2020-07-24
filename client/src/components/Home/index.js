import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Hidden from '@material-ui/core/Hidden';
import WelcomeText from './WelcomeText';
import ImageGrid from './ImageGrid';

const useStyles = makeStyles({
  root: {
    height: '90vh',
    display: 'flex',
    paddingTop: '10vh',
  }
})

const Landing = () => {
  const classes = useStyles();
  return (
    <div id='home' className={classes.root}>
      <WelcomeText/>
      <Hidden smDown>
        <ImageGrid/>
      </Hidden>
    </div>
  )
}

export default Landing;