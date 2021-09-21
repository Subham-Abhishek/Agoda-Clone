import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function ConfirmModal({ open, setOpen, setOpen1, setBook }) {
  const handleClose = () => {
    setOpen(false);
    setOpen1(true);
    setBook(true);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Booking cancellation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please tell us why you are cancelling so that we can improve on it.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="reason(optionl)"
            type="text"
            multiline={true}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel booking
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
