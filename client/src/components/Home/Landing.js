import React from 'react';
import {makeStyles} from '@material-ui/styles';
import WelcomeText from './WelcomeText';
import ImageGrid from './ImageGrid';
import Assets from '../../assets';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    paddingTop: '10vh',
    '&>.image': {
      flexGrow: '1',
      padding: '5rem',
      height: '100%',
      width: '100%',
      display: 'grid',
      placeItems: 'center',
      '&>img': {
        borderRadius: '5px',
        boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.15)',
        maxHeight: '100%',
        maxWidth: '100%',
      }
    },
    '@media (max-width: 1395px)': {
      '&>.image': {
        padding: '3rem',
      }
    },
    '@media (max-width: 1050px)': {
      '&>.image': {
        padding: '2rem',
      }
    },
    '@media (max-width: 900px)': {
      padding: '2rem',
      paddingTop: '10vh',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '&>.image': {
        paddingTop: '0rem',
      }
    },
    '@media (max-width: 500px)': {
      padding: '1rem',
    },
    '@media (max-width: 400px)': {
      padding: '0rem',
    },
  }
})

const Landing = () => {
  const classes = useStyles();
  return (
    <div id='home' className={classes.root}>
      <WelcomeText/>
      <div className='image'>
        <img alt={'weather tracker website'} src={Assets.WeatherTracker.screenshot}/>
      </div>
    </div>
  )
}

export default Landing;