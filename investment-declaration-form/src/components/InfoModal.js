import * as React from 'react';
import Box from '@mui/material/Box';
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

export default function InfoModal({open,onClose,title,description}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant='h6' sx={{fontWeight: 'bold'}} >
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {description} 
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}