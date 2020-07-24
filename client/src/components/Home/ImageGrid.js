import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Images from './images';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    padding: '2rem',
    gridGap: '2rem',
    justifyItems: 'center',
    alignItems: 'center',
    '& img': {
      marginRight: '6rem',
      maxHeight: '200px',
      maxWidth: '200px',
    },
    '@media (max-width: 1150px)': {
      '& img': {
        marginRight: '4rem',
        maxHeight: '150px',
        maxWidth: '150px',
      }
    }
  }
})

const ImageGrid = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {Images.imageArr.map((imageName, index) => <img key={index} alt='device with example website on screen' src={require('../../imgs/' + imageName)}/>)}
    </div>
  )
}

export default ImageGrid;