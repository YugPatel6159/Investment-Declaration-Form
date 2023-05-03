import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function SubmitModal({submitModal,onClose,name,pan,optionValue}) {
    console.log(submitModal,onClose,name,pan,optionValue)
  return (
    <div>
      <Modal
        open={submitModal}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant='h6' >
            Employee Information 
          </Typography>
          <Typography id="modal-modal-title" >
            Name: {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           PAN: {pan}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Option Selected: {optionValue}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}