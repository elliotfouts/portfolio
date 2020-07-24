import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Snackbar} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Search from '@material-ui/icons/Search';
import {Palette} from '../../utils';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import axios from 'axios';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
  root: {
    width: '50%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '1rem',
    '&>div>input, &>textarea': {
      border: 'none',
      fontSize: '1.5rem',
      padding: '10px',
      fontFamily: 'inherit',
      width: '100%',
      '&:focus': {
        outline: `2px solid ${Palette.Blue}`,
      }
    },
    '&>div': {
      display: 'flex',
      '&>.send-button': {
        marginLeft: '1rem',
        background: Palette.Blue,
        border: 'none',
        color: Palette.White,
        textTransform: 'uppercase',
        padding: '0 2rem',
        transition: 'all 300ms',
        '&:hover': {
          background: '#0e98e9',
        },
        '&:focus': {
          outline: 'none',
        }
      },
    },
     '@media (max-width: 1395px)': {
      width: '75%',
    },
    '@media (max-width: 1000px)': {
      width: '85%',
      '& div input, & textarea': {
        fontSize: '1rem',
      }
    },
  },
  loading: {
    color: Palette.Blue,
    marginLeft: '1rem',
  }
})

const Form = () => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({message: '', email: ''});
  const [toast, setToast] = useState({open: false, message: '', severity: 'success'});
  const [loading, setLoading] = useState(false);

  const matches = useMediaQuery('(min-width:1000px)');

  const handleInputChange = ({target: {value, name}}) => {
    setFormValues({...formValues, [name]: value});
  }
  const handleSubmit = async () => {
    if (isValidInputs()) {
      try {
        setLoading(true);
        const result = await axios.post('/email', formValues);
        setLoading(false);
        setToast({open: true, message: 'your message has been sent!', severity: 'success'});
        setFormValues({message: '', email: ''});
      } catch (error) {
        setToast({open: true, message: 'message could not be submitted - it is not your fault!', severity: 'error'});
      }
    } 
  }
  const handleToastClose = () => {
    setToast({...toast, open: false});
  }
  const isValidInputs = () => {
    const {message, email} = formValues;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!message) {
      setToast({open: true, message: 'please enter a message', severity: 'error'});
    } else if (!email.match(emailRegex)) {
      setToast({open: true, message: 'please enter a valid email', severity: 'error'});
    } else {
      return true;
    }

    return false;
  }

  return (
    <div className={classes.root}>
      <Snackbar anchorOrigin={(matches)? { vertical: 'bottom', horizontal: 'left' }: { vertical: 'top', horizontal: 'center' }} open={toast.open} autoHideDuration={6000} onClose={handleToastClose}>
        <Alert onClose={handleToastClose} severity={toast.severity}>
          {toast.message}
        </Alert>
      </Snackbar>
      <textarea onChange={handleInputChange} name={'message'} value={formValues.message} rows='7' placeholder={'Hello Elliot,'}/>
      <div>
        <input onChange={handleInputChange} name={'email'} value={formValues.email} placeholder={'your@email.com'}/>
        <button className='send-button' onClick={handleSubmit}>
        {(loading) 
        ? <CircularProgress style={{color: Palette.White, height: '30px', width: '30px'}}/>
        : <p style={{margin: '0', padding: '0', color: 'currentColor'}}>SEND</p>}
        </button>
      </div>
    </div>
  )
}

export default Form;