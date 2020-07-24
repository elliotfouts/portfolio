import React from 'react';
import Divider from '@material-ui/core/Divider';
import {makeStyles} from '@material-ui/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/ExitToApp';
import {Palette} from '../../utils';

const useStyles = makeStyles({
  root: {
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
          '&:hover': {
            color: Palette.SecondaryText,
          }
      }
    },
    '& p': {
      color: Palette.SecondaryText,
    }
  }
});

const WorkCard = ({info: {imageUrl, imageAlt, title, githubUrl, demoUrl, description}}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className='image-container'>
        <img alt={imageAlt} src={require('../../imgs/' + imageUrl)}/>
      </div>
      <header>
        <h1>{title}</h1>
        <span>
          <a href={githubUrl} target='blank'><GitHubIcon/></a>
          <a href={demoUrl} target='blank'><LinkIcon/></a>
        </span>
      </header>
      <Divider/>
      <p>{description}</p>
    </div>
  )
}

export default WorkCard;