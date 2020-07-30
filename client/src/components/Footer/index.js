import React from 'react';
import {makeStyles} from '@material-ui/styles';
// import {} from '@material-ui/core';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import {Palette} from '../../utils/'


const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '2rem',
    background: Palette.BlueTransparent,
    color: Palette.Blue,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& a': {
      color: 'currentColor',
      textDecoration: 'none',
      fontSize: '1.5rem',
      transition: 'all 300ms',
      '&:hover': {
        color: Palette.BlueHover,
      }
    },
    '&>.icons': {
      '& i': {
        fontSize: '2rem',
        marginRight: '2rem',
        transition: 'all 300ms',
        '&:hover': {
          color: Palette.BlueHover
        },
        '@media (max-width: 550px)': {
          fontSize: '1.5rem',
          margin: '1rem',
        },
      }
    },
    '@media (max-width: 550px)': {
      flexDirection: 'column-reverse',
      '& a': {
        fontSize: '1rem',
      },
    }
  }
});


const Footer = () => {

const classes = useStyles();
    return (
      <div className={classes.root}>
        <a href={'mailto:elliotfouts@gmail.com'}>elliotfouts@gmail.com</a>
        <div className='icons'>
          <a target='_blank' href='https://github.com/elliotfouts'>
            <i className="fab fa-github-alt"></i>
          </a>
          <a target='_blank' href='https://linkedin.com/in/elliotfouts'>
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    );
}


export default Footer;