import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Palette} from '../../utils';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';

const useStyles = makeStyles({
  root: {
    padding: '5rem',
    paddingTop: '10rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    color: Palette.Blue,
    '& .text': {
      // paddingLeft: '2rem',
      // borderLeft: `1px solid ${Palette.SecondaryText}`,
      '&>h1': {
        margin: 0,
        padding: 0,
        fontWeight: 200,
        color: Palette.SecondaryText,
        fontSize: '2rem',
        '@media (max-width: 500px)': {
            fontSize: '1.5rem',
        },
      },
      '&>a': {
        margin: 0,
        padding: 0,
        fontWeight: 200,
        color: 'currentColor',
        fontSize: '2rem',
        '@media (max-width: 500px)': {
          fontSize: '1.5rem',
        }
      },
    },
    '& .icons': {
      '& i': {
        marginLeft: '1rem',
        fontSize: '2rem',
        color: Palette.SecondaryText,
        transition: 'color 300ms',
        '&:hover': {
          color: Palette.Blue,
        }
      },
    },
    '@media (max-width: 500px)': {
        padding: '2rem',
        paddingTop: '10rem',
    }
  }
})

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <div>
      <MailOutlinedIcon style={{fontSize: 50}}/>
      <div className='text'>
        <h1>the best way to reach me is by email at </h1>
        <a href='mailto:elliotfouts@gmail.com'>elliotfouts@gmail.com</a>
      </div>
    </div>

      <div className='icons'>
        <a target='_blank' href='https://github.com/elliotfouts'>
          <i className="fab fa-github-alt"></i>
        </a>
        <a target='_blank' href='https://linkedin.com/in/elliotfouts'>
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  )
}

export default Contact;