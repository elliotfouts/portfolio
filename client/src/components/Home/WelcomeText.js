import React from 'react';
import {makeStyles} from '@material-ui/styles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {Palette, smoothScroll} from '../../utils';

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
    padding: '5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& h3': {
      margin: '0',
      padding: '0',
      fontSize: '1.5rem',
      color: Palette.SecondaryText,
      fontWeight: '100',
    },
    '& h1': {
      margin: '0',
      marginBottom: '2rem',
      padding: '0',
      fontSize: '3rem',
      color: Palette.BlueTransparent,
      textStroke: `1px ${Palette.Blue}`,
    },
    '& h2': {
      margin: '0',
      marginBottom: '8rem',
      padding: '0',
      paddingLeft: '1rem',
      fontSize: '3rem',
      fontWeight: '100',
      color: Palette.Blue,
      borderLeft: `1px solid ${Palette.Blue}`,
    },
    '& span': {
      textDecoration: 'none',
      color: Palette.SecondaryText,
      alignSelf: 'center',
      display: 'grid',
      placeItems: 'center',
      transition: 'all 300ms',
      position: 'relative',
      top: '0',
      '&:hover': {
        color: Palette.PrimaryText,
        top: '5px',
      },
      '& p': {
      }
    },
    '@media (max-width: 700px)': {
      padding: '3rem',
      '& h1': {
        fontSize: '2rem',
      },
      '& h2': {
        fontSize: '2rem',
      },
      '& h3': {
        fontSize: '1rem',
      }
    }
  }
})

const WelcomeText = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}> 
      <h3>Hello, my name is</h3>
      <h1>Elliot Fouts.</h1>
      <h2>I build web applications</h2>

      <span onClick={()=> smoothScroll('work')}>
        <p>view work</p>
        <ArrowDownwardIcon/>
      </span>
    </div>
  )
}

export default WelcomeText;