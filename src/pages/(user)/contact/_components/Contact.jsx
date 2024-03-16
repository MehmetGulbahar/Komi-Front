import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function FormDialog({ open, handleClose }) {
  const [note, setNote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email;
    const firstName = formJson.firstName;
    const lastName = formJson.lastName;
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit,
        className: "border-2 border-rose-700",
      }}
    >
      <div className="mt-8">
        <img
          src="/src/assets/logo/logo.svg"
          className="text-red-500 flex items-center justify-center mt-6"
          alt=""
          width={100}
          height={50}
          style={{ display: "block", margin: "auto" }}
        />
      </div>
      <DialogTitle className="text-center">
        Feel free to get in touch
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Do you have questions and comments about our products?
          <br />
          We would be happy to receive suggestions from you.
        </DialogContentText>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              variant="standard"
            />
          </Grid>
        </Grid>
        <TextField
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <Typography variant="body2" color="textSecondary">
          We'll never share your email with anyone else.
        </Typography>
        <div className="mt-6">
          <label htmlFor="orderNote">Message</label>
          <textarea
            id="orderNote"
            name="recommendation"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="input input-bordered w-full"
            placeholder=""
            style={{ resize: "vertical", maxWidth: "100%", maxHeight: "200px" }}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
