import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Collapse, Hidden} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {Palette} from '../../utils';
import Resume from './Elliot_Fouts_Resume.pdf';

const useStyles = makeStyles({
  menu: {
    '& div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: '90vh',
      fontSize: '3rem',
      paddingBottom: '3rem',
      color: Palette.Blue,
      '& a': {
        padding: '0',
        margin: '0',
        color: 'currentColor',
        textDecoration: 'none',
        transition: 'all 300ms',
        '&.active': {
          color: '#3CB7FF15',
          textStroke: `1px ${Palette.Blue}`,
        },
        '&:hover': {
          color: Palette.BlueHover,
        }
      }
    }
  },
  menuIcon: {
    color: Palette.Blue,
  },
  root: {
  '&>main':{
      position: 'fixed',
      top: '0',
      zIndex: '50',
      width: '100%',
      background: Palette.White,
      boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.2)',
    '&>nav': {
      height: '10vh',
      width: '100%',
      padding: '0 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: Palette.Blue,
      '&>a': {
        textDecoration: 'none',
        color: 'currentColor',
        transition: 'all 300ms',
        '&:hover': {
          color: Palette.BlueHover,
        },
        '&>span': {
          height: '30px',
          width: '30px',
          border: '1px solid currentColor',
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          '&>p': {
            margin: '0',
            padding: '0',
          }
        }
      }
    }
  }
  },
  navLinks: {
    display: 'flex',
    '& a': {
      marginLeft: '2rem',
      textDecoration: 'none',
      color: Palette.SecondaryText,
      transition: 'color 300ms',
      '&.active, &:hover': {
        color: Palette.Blue,
      }
    }
  }
})

const Navbar = ({children}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('');

  useEffect(()=>{
    const url = new URL(window.location.href);
    setActive(url.pathname.substr(1));
  }, []);

  return (
    <div className={classes.root}>
      <main>
        <nav>
          <a href='/'>
            <span>
              <p>E</p>
            </span>
          </a>

          <Hidden smUp>
            <IconButton style={{cursor: 'none',}} onClick={() => setOpen(!open)}>
              {
                open ? 
                <CloseIcon className={classes.menuIcon}/> 
                : <MenuIcon className={classes.menuIcon}/>
              }
            </IconButton>
          </Hidden>

          <Hidden xsDown>
            <div className={classes.navLinks}>
              <a className={(active=='work')?'active':''} href='/work'>Work</a>
              <a href={Resume}>Resume</a>
              <a className={(active=='contact')?'active':''} href='/contact'>Contact</a>
            </div>
          </Hidden>   
        </nav>
        <Collapse in={open} className={classes.menu} timeout={1000}>
          <div>
            <a className={(active=='')?'active':''} href='/'>HOME</a>
            <a className={(active=='work')?'active':''} href='/work'>WORK</a>
            <a href={Resume} target='blank'>RESUME</a>
            <a className={(active=='contact')?'active':''} href='/contact'>CONTACT</a>
          </div>
        </Collapse>
      </main>
      {children}
    </div>
  )
}

export default Navbar;