import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import HelpIcon from "@mui/icons-material/Help";
import { TextField } from "@mui/material";
import HelperModal from "./HelperModal";
import SubmitModal from "./SubmitModal";

function PanDetailsForm() {
  const [openModal, setOpenModal] = useState(false);
  const [option, setOption] = useState('')
  const [name,setName]=useState('')
  const [pan,setPan]=useState('')
  const [optionValue,setOptionValue]=useState('')
  const [submitModal,setSubmitModal] = useState(false)

  const submitForm = (e) => {
    e.preventDefault();
    setSubmitModal(true)
  }

  return (
    <>
      {" "}

        <form onSubmit={submitForm}>
      <Stack sx={{ marginTop: "30px " }}>

        <Stack direction="row" spacing={1}>
          <label htmlFor="employeeName" style={{ marginTop: "5px" }}>
            Name Of Employee (as in PAN Card) :
          </label>
          <TextField id="employeeName" variant="standard"  value={name} onChange={(e)=>{setName(e.target.value)}} required />
        </Stack>
        <Stack direction="row" spacing={1}>
          <label htmlFor="employeePan" style={{ marginTop: "5px" }}>
            PAN Number :
          </label>
          <TextField id="employeePan" variant="standard" value={pan} onChange={(e)=>{setPan(e.target.value)}} required />
        </Stack>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{ marginTop: "10px" }}
            onChange={(e)=>{setOptionValue(e.target.value)}}
          >
            <label htmlFor="employeeName" style={{ marginTop: "5px" }}>
              Option :
            </label>
            <FormControlLabel
              value="A (Old Schema)"
              control={<Radio />}
              label="A (Old Schema)"
              sx={{ marginLeft: "10px" }}
              />
            <HelpIcon
              sx={{ marginTop: "10px" }}
              onClick={() => {
                setOpenModal(true);
                setOption('A')
              }}
            />
            <FormControlLabel
              value="B (New Schema)"
              control={<Radio />}
              label="B (New Schema)"
              sx={{ marginLeft: "10px" }}
              />
            <HelpIcon sx={{ marginTop: "10px" }} 
            onClick={() => {
              setOpenModal(true);
              setOption('B')
            }}/>
          </RadioGroup>
        </FormControl>
      </Stack>
        <Button type="submit" variant="contained">Submit</Button>
        </form>
      {openModal && (
        <HelperModal
        open={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
          option={option}
          />
          )}
          {submitModal && <SubmitModal
          submitModal={submitModal}
          onClose={() => {
            setSubmitModal(false);
          }}
          name={name}
          pan={pan}
          optionValue={optionValue}
          />}
    </>
  );
}

export default PanDetailsForm;
