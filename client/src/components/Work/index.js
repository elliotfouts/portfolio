import React from 'react';
import Heading from '../Heading';
import WorkGrid from './WorkGrid';
import Button from './WorkButton';
import {makeStyles} from '@material-ui/styles';
import {Palette} from '../../utils';

const useStyles = makeStyles({
  root: {
    marginTop: '5rem',
    padding: '5rem',
    '@media (max-width: 500px)': {
      padding: '3rem',
    }
  }
})

const Work = () => {
  const classes = useStyles();
  return (
    <div id='work' className={classes.root}>
      <Heading text={'Selected Work'} style={{color: Palette.PrimaryText}}/>
      <WorkGrid/>
      <Button/>
    </div>
  )
}

export default Work;