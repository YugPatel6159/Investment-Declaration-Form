import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { List, ListItem, ListItemText } from "@mui/material";

export default function HelperModal({ open, onClose, option }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const oldSchemaED = [
    "Standard Deduction RS. 50,000/-",
    "HRA Exemption in case of House Rent Paid",
    "Interest on Home Loan",
    "Investment Under Section 80-C, 80-CCC & 80-CCD",
    "Mediclaim Premia under Section 80-D",
    "Tax Rebate U/S. 87A for income upto RS. 5,00,000/-",
  ];
  const itRates = [
    "upto Rs.2,50,000 - Nil",
    "Rs.2,50,001 to Rs.5,00,000 - 5%",
    "Rs.5,00,001 to 10,00,000 - 20%",
    "Above 10,00,000 - 30%",
  ];

  const newSchemaEd = [
    "Exemptions & Deductions not Available"
  ]

  const itRatesNew = [
      'upto Rs.2,50,000 - Nil',
      'Rs.2,50,001 to Rs.5,00,000 - 5%',
      'Rs.5,00,001 to 7,50,000 - 10%',
      '7,50,001 to 10,00,000 - 15%',
      '10,00,001 to 12,50,000 - 20%',
      '12,50,001 to 15,00,000 - 25%',
      'Above 15,00,000 - 30%'
  ]

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        option={option}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {
            option=='A'?
        
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="para1" component="h2">
            Option A: Old Schema
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Exemptions & Deductions
          </Typography>
          <List component="ol">
            {oldSchemaED.map((item, index) => (
              <ListItem key={item}>
                <ListItemText primary={`${index + 1}.${item}`} />
              </ListItem>
            ))}
          </List>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Income Tax Rates for F.Y.2022-23 with Exemption / Deduction
          </Typography>
          <List component="ol">
            {itRates.map((item, index) => (
              <ListItem key={item}>
                <ListItemText primary={`${index + 1}.${item}`} />
              </ListItem>
            ))}
          </List>
        </Box>
       : <Box sx={style}>
       <Typography id="modal-modal-title" variant="para1" component="h2">
         Option B: New Schema
       </Typography>
       <Typography id="modal-modal-title" variant="h6" component="h2">
         Exemptions & Deductions
       </Typography>
       <List component="ol">
         {newSchemaEd.map((item, index) => (
           <ListItem key={item}>
             <ListItemText primary={`${index + 1}.${item}`} />
           </ListItem>
         ))}
       </List>
       <Typography id="modal-modal-title" variant="h6" component="h2">
         Income Tax Rates for F.Y.2022-23 with Exemption / Deduction
       </Typography>
       <List component="ol">
         {itRatesNew.map((item, index) => (
           <ListItem key={item}>
             <ListItemText primary={`${index + 1}.${item}`} />
           </ListItem>
         ))}
       </List>
     </Box> }
      </Modal>
    </div>
  );
}
