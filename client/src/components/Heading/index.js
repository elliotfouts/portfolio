import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    color: '#000000',
    alignItems: 'center',
    '& div': {
      flex: '1',
      marginLeft: '1rem',
      height: '1px',
      background: '#00000030'
    }
  }
});

const Heading = ({text, style}) => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={style}>
      <h1>{text}</h1>
      <div/>
    </div>
  )
}

export default Heading;