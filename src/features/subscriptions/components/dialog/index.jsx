import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useDispatch } from "react-redux";
import { SubscriptionsUpdate, getSubscriptionsData } from "src/pages/subscriptions/store";
import Stack from '@mui/material/Stack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export default function ActiveDialog({ id ,open ,handleClose ,Data }) {
  const dispatch = useDispatch()
  




  const handleSubscriptionsUpdate = () => {
      dispatch(SubscriptionsUpdate(id))
      dispatch(getSubscriptionsData())
      handleClose()
  };

  return (

    <React.Fragment>
      <Dialog
        onClose={handleClose}
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle style={{ fontSize: "19px", color: '#B4B4B3' }}>
          {"Are you sure you want to Active player?"}
        </DialogTitle>
        <DialogContent>
          <Stack direction={"row"} justifyContent={"center"}>

          <DialogContentText >
            <CheckCircleOutlineIcon  sx={{color: 'green', fontSize: 140 }}   />
          </DialogContentText>
          </Stack>
        </DialogContent>
        <DialogActions style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
          <Button onClick={handleClose} style={{ color: '#B4B4B3' }}>Cancel</Button>
          <Button onClick={()=>handleSubscriptionsUpdate(id)} sx={{color:"green"}} autoFocus> Active</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
