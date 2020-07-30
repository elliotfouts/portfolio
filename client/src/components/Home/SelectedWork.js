import React from 'react';
import Heading from '../Heading';
import WorkGrid from '../Work/WorkGrid';
import Button from '../Work/WorkButton';
import {makeStyles} from '@material-ui/styles';
import {Palette} from '../../utils';

const useStyles = makeStyles({
  root: {
    marginTop: '3rem',
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
      <Heading text={'Selected Work'} style={{color: Palette.PrimaryText, paddingTop: '0rem'}}/>
      <WorkGrid/>
      <Button/>
    </div>
  )
}

export default Work;