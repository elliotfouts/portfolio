import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Work from './workInfo';
import WorkCard from './WorkCard';

const useStyles = makeStyles({
  root: {
    padding: '4rem 0',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '6rem',
    '@media (max-width: 1200px)': {
      gridTemplateColumns: '1fr 1fr',
    },
    '@media (max-width: 800px)': {
      gridTemplateColumns: '1fr',
    },
  }
});

const WorkGrid = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {Work.WorkArr.map((info, index) => <WorkCard key={index} info={info}/>)}
    </div>
  )
}

export default WorkGrid;