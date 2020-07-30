import React from 'react';
import Divider from '@material-ui/core/Divider';
import {makeStyles} from '@material-ui/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/ExitToApp';
import {Palette} from '../../utils';

const useStyles = makeStyles({
  root: {
    padding: '2rem',
    transition: '300ms',
    borderRadius: '1rem',
    '&:hover': {
      boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.15)',
    },
    '& .image-container': {     
      display: 'grid',
      placeItems: 'center',
      height: '200px',
      margin: '2rem',
    },
    '& img': {
      maxHeight: '200px',
      maxWidth: '200px',
    },
    '& header': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '&>h1': {
        fontWeight: '100',
      },
      '& span a': {
          marginLeft: '1rem',
          color: 'currentColor',
          transition: 'all 300ms',
          textDecoration: 'none',
          '&:hover': {
            color: Palette.SecondaryText,
          },
      }
    },
    '&>p': {
      color: Palette.SecondaryText,
    },
    '& .chip': {
      display: 'flex',
      color: Palette.SecondaryText,
      '&>div': {
        border: `0.5px solid ${Palette.SecondaryText}`,
        padding: '0.25rem 0.5rem',
        borderRadius: '2rem',
        marginRight: '0.25rem',
        marginTop: '1rem',
        '&>p': {
          fontSize: '0.7rem',
          fontWeight: '200',
          margin: '0',
          padding: '0',
        }
      }
    },
    '&>a': {
      color: Palette.Blue,
      textDecoration: 'none',
      transition: 'color 300ms',
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        height: '1px',
        width: '0%',
        background: Palette.Blue,
        left: '0',
        bottom: '-5px',
        transition: 'width 300ms'
      },
      '&:hover': {
        color: Palette.BlueHover,
        '&::after': {
          width: '100%',
        }
      },
    },
    '@media (max-width: 499px)': {
      padding: 0,
      '&:hover': {
        boxShadow: '0 0 0 transparent',
      }
    },
  }
});

const WorkCard = ({info: {imageUrl, imageAlt, title, githubUrl, demoUrl, description, chips}}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className='image-container'>
        <img alt={imageAlt} src={require('../../imgs/' + imageUrl)}/>
      </div>
      <header>
        <h1>{title}</h1>
        <span>
          {/* <a href={demoUrl} target='blank'>View Demo</a> */}
        </span>
      </header>
      <Divider/>
      <div className='chip'>
        {chips.map(chip => <div><p>{chip}</p></div>)}
      </div>
      <p>{description}</p>
      <a href={githubUrl}>View project on Github</a>
    </div>
  )
}

export default WorkCard;