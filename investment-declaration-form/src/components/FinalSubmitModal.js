import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack } from '@mui/material';

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

export default function FinalSubmitModal({open,onClose,data}) {
  return (
    
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant='h6' >
                Submitted Details
              </Typography>
            {
            data?.filterdData?.map((item)=>(
                <Box>
                    <Typography sx={{ marginTop: "10px", fontWeight: "bold" }}>
                        {item.ruleName}
                    </Typography>
                    {
                        item?.deduction?.map((deduction,dindex)=>(
                            <Stack direction="row" key={dindex} spacing={2}>
                            <Typography >
                                {deduction.name}
                                </Typography>
                            <Typography >
                            ₹{deduction.amount}
                                </Typography>
                                </Stack>
                        ))
                    }
                    </Box>
            ))
            }
            <Typography >
                Name:{data?.panData?.employeeName}
            </Typography>
            <Typography >
            PAN:{data?.panData?.employeePan}
            </Typography>
            <Typography >
                Option:{data?.panData?.option}

            </Typography>
            <Typography >
                Date:{data?.finalData?.date}
            </Typography>
            <Typography >
                City:{data?.finalData?.city}
            </Typography>
            <Typography >
                Sign:{data?.finalData?.sign}
            </Typography>
        </Box>
        

      </Modal>
    </div>
  );
}