import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Modal(props) {

  return (
    <div>
      <Dialog onClose={props.onClose} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={props.onClose}>
            <p className="heading">{props.title}</p>
        </DialogTitle>
        <div className="col">
          <div className="col heading">
              <span>{props.duration}</span>
              <span>{props.location}</span>
          </div>
          <p className="heading">Description</p>
          {props.description?
           <ul>
             {props.description.map((desc,i)=><li key={i}>{desc}</li>)}
           </ul>
           :null}
           {props.urls &&props.urls.length?<div className="row">
               {props.urls.map((url,i)=><a href={url.src} target="_blank"><button className="btn btn-primary">{url.label}</button></a>)}
           </div>:null
          }
        </div>
        <DialogActions>
          <Button onClick={props.onClose} color="secondary">
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
