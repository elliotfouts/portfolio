import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Form from './Form';
import SocialIcons from './SocialIcons';
import {Palette} from '../../utils';
import Header from '../Heading';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: Palette.BlueTransparent,
    marginTop: '9rem',
    padding: '3rem',
    '&>div': {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& p': {
      paddingTop: '7rem',
      color: Palette.SecondaryText,
    },
    '@media (max-width: 1395px)': {
      '&>div': {
        flexDirection: 'column',
      },
      '& p': {
        paddingTop: '0rem',
      }
    },
    '@media (max-width: 1000px)': {
      padding: '2rem',
    }
  }
})

const Contact = () => {
  const classes = useStyles();
  return (
    <div id='contact' className={classes.root}>
      <Header text={'Get in touch'} style={{color: Palette.SecondaryText}}/>
      <div>
        <Form/>
        <SocialIcons/>
      </div>
      <p>Copyright 2020</p>
    </div>
  )
}

export default Contact;