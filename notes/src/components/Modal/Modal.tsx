import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({
  onAgreeClick,
}: {
  onAgreeClick: () => void;
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        Удалить заметку
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Вы хотите удалить заметку?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Заметка будет удалена безвозвратно.
            <br />
            Подтвердите действие.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onAgreeClick()} color="error" autoFocus>
            Удалить
          </Button>
          <Button onClick={handleClose}>Отмена</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
