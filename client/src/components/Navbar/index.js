import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Collapse} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {Palette} from '../../utils';

const useStyles = makeStyles({
  menu: {
    '& div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: '90vh',
      fontSize: '3rem',
      color: Palette.Blue,
      '& p': {
        transition: 'all 300ms',
        '&:hover': {
          color: Palette.PrimaryText,
        }
      }
    }
  },
  menuIcon: {
    transition: 'all 300ms',
    '&:hover': {
      color: Palette.PrimaryText,
    }
  },
  root: {
  '&>main':{
      position: 'fixed',
      top: '0',
      zIndex: '50',
      width: '100%',
      background: Palette.White,
      boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.2)',
    '& nav': {
      height: '10vh',
      width: '100%',
      padding: '0 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: Palette.Blue,
      '& span': {
        height: '30px',
        width: '30px',
        border: '1px solid currentColor',
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        '& p': {
          margin: '0',
          padding: '0',
        }
      }
    }
  }
  }
})

const Navbar = ({children}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open);
  const handleClick = (event) => {   
    setOpen(false);
    window.open(`/Portfolio/#${event.target.getAttribute('name')}`, '_self');
  }

  return (
    <div className={classes.root}>
      <main>
        <nav>
          <span>
            <p>E</p>
          </span>

          {/* <IconButton> */}
          <div>
            {
              open ? 
              <CloseIcon className={classes.menuIcon} onClick={toggleMenu}/> 
              : <MenuIcon className={classes.menuIcon} onClick={toggleMenu}/>
            }
          </div>
          {/* </IconButton> */}
          
        </nav>
        <Collapse in={open} className={classes.menu} timeout={1000}>
          <div>
            <p onClick={handleClick} name='home'>HOME</p>
            <p onClick={handleClick} name='work'>WORK</p>
            <p onClick={handleClick} name=''>RESUME</p>
            <p onClick={handleClick} name='contact'>CONTACT</p>
          </div>
        </Collapse>
      </main>
      {children}
    </div>
  )
}

export default Navbar;