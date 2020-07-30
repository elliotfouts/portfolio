import React from 'react';
import Heading from '../Heading';
import WorkGrid from './WorkGrid';
import Button from './WorkButton';
import {makeStyles} from '@material-ui/styles';
import {Palette} from '../../utils';
import WorkInfo from './workInfo';
import Footer from '../Footer';

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
    <div>
      <div id='work' className={classes.root}>
        <Heading text={'Work'} style={{color: Palette.PrimaryText, paddingTop: '0rem'}}/>
        <WorkGrid work={WorkInfo.WorkArr}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Work;