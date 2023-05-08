import { Stack, Typography } from "@mui/material";
import React from "react";

function Notes() {
  const notes = [
    {
      name: "All the Employees in whose case the Gross salary received/to be received in the FY 2022-23 is likely to cross ₹,5,50,000/- must submit the Declaration now.",
      sub: [],
    },
    {
      name: "Employees have to give information about all the Investments made OR to be made before 31/03/2023.",
      sub: [],
    },
    {
      name: "All the declared items need to be backed by the proof",
      sub: [],
    },
    {
      name: "For claiming deduction for HOUSE RENT, following documents MUST be produced.",
      sub: [
        "Rent Agreement/s covering period of claim.",
        "Respective RECEIPTS of Rent Payments.",
        "Copy of PAN card of Landlord, only in case, where the amount of Rent paid in the Fin.Year is above RS.1,00,000/-",
      ],
    },
    {
      name: "In absence of proof, any of the investments will not be considered.",
      sub: [],
    },
    {
      name: "If the investment is yet not made but is planned to be done before 31st March, 2023, a mention to be made in the remarks column and to ensure submission of the proof for such investment immediately when the investment is made.",
      sub: [],
    },
    {
      name: "All the employees have to submit the Declaration positively before 03-03-2023",
      sub: [],
    },
  ];
  return (
    <div style={{marginTop:'20px'}}>
      <Stack>
        <Typography variant="h5" color="initial">
          Notes About Investment Declaration :
        </Typography>
      </Stack>
      <Stack style={{marginTop:'20px', lineHeight:'30px'}}>
        {notes.map((ele, index) => {
          return (
            <>
              <Typography style={{lineHeight:'30px'}}>
                {index + 1}.{ele.name}
              </Typography>
              {ele.sub.length > 0 && (
                <ul>
                  {ele.sub.map((sub) => {
                    return <li>{sub}</li>;
                  })}
                </ul>
              )}
            </>
          );
        })}
      </Stack>
    </div>
  );
}

export default Notes;
