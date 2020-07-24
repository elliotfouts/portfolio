import React from 'react';
import {makeStyles} from '@material-ui/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Palette} from '../../utils';

const useStyles = makeStyles({
  root: {
    padding: '6rem',
    '& a': {
      fontSize: '50px',
      color: Palette.Blue,
      margin: '2rem',
      transition: 'all 300ms',
      '&:hover': {
        color: Palette.SecondaryText,
      }
    },
    '@media (max-width: 1000px)': {
      padding: '4rem',
      '& a': {
        fontSize: '40px',
      }
    },
    '@media (max-width: 675px)': {
      paddingBottom: '0rem',
      '& a': {
        fontSize: '25px',
        margin: '0.5rem',
      }
    },
    // '@media (max-width: 1000px)': {
    //   padding: '4rem',
    //   fontSize: '30px',
    // },
  }
})

const SocialIcons = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a target='blank' href='https://github.com/elliotfouts'><GitHubIcon style={{fontSize: 'inherit'}}/></a>
      <a target='blank' href='https://www.linkedin.com/in/elliotfouts/'><LinkedInIcon style={{fontSize: 'inherit'}}/></a>
      <a target='blank' href='https://www.instagram.com/efoutsy/'><InstagramIcon style={{fontSize: 'inherit'}}/></a>
      <a target='blank' href='https://twitter.com/efoutsy'><TwitterIcon style={{fontSize: 'inherit'}}/></a>
    </div>
  )
}

export default SocialIcons;