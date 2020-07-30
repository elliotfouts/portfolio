import React from 'react';
import {makeStyles} from '@material-ui/styles';
import WorkCard from './WorkCard';

const useStyles = makeStyles({
  root: {
    padding: '4rem 0',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '3rem',
    '@media (max-width: 1200px)': {
      gridTemplateColumns: '1fr 1fr',
    },
    '@media (max-width: 800px)': {
      gridTemplateColumns: '1fr',
    },
  }
});

const WorkGrid = ({work}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {work.map((info, index) => <WorkCard key={index} info={info}/>)}
    </div>
  )
}

export default WorkGrid;