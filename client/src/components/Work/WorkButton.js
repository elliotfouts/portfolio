import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Palette} from '../../utils';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'grid',
    placeItems: 'center',
    '& a': {
      color: Palette.Blue,
      padding: '1rem 2rem',
      borderRadius: '0.5rem',
      border: '1px solid currentColor',
      transition: 'all 300ms',
      textDecoration: 'none',
      '&:hover': {
        background: Palette.BlueTransparent,
      }
    }
  }
});

const WorkButton = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a href='/work'>VIEW ALL PROJECTS</a>
    </div>
  )
}

export default WorkButton;