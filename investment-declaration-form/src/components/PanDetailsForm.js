import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import HelpIcon from "@mui/icons-material/Help";
import { TextField, Typography } from "@mui/material";
import HelperModal from "./HelperModal";
import SubmitModal from "./SubmitModal";
import { Formik, useFormik } from "formik";
import { DeclarationFormSchema } from "../Validations/DeclarationFormSchema";

function PanDetailsForm() {
  const [openModal, setOpenModal] = useState(false);
  const [option, setOption] = useState("");
  const [name, setName] = useState("");
  const [pan, setPan] = useState("");
  const [optionValue, setOptionValue] = useState("");
  const [submitModal, setSubmitModal] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setSubmitModal(true);
  };
  const initialValues = {
    employeeName: "",
    employeePan: "",
    option: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: DeclarationFormSchema,
    onSubmit: (values, actions) => {
      setName(values.employeeName);
      setPan(values.employeePan);
      setOptionValue(values.option);
      setSubmitModal(true);
      console.log(values);
      actions.resetForm();
    },
  });

  return (
    <>
      {" "}
      <form onSubmit={formik.handleSubmit}>
        <Stack sx={{ marginTop: "30px " }}>
          <Stack direction="row" spacing={1}>
            <label htmlFor="employeeName" style={{ marginTop: "5px" }}>
              Name Of Employee (as in PAN Card) :
            </label>
            <TextField
              id="employeeName"
              variant="standard"
              value={formik.values.employeeName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Stack>
            {formik.submitCount>0 && formik.errors.employeeName && (
              <Typography variant="body1" color="red">
                {formik.errors.employeeName}
              </Typography>
            )}
          <Stack direction="row" spacing={1}>
            <label htmlFor="employeePan" style={{ marginTop: "5px" }}>
              PAN Number :
            </label>
            <TextField
              id="employeePan"
              variant="standard"
              value={formik.values.employeePan}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            
          </Stack>
          {formik.submitCount>0 && formik.errors.employeePan  && (
              <Typography variant="body1" color="red">
                {formik.errors.employeePan}
              </Typography>
            )}
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              sx={{ marginTop: "10px" }}
              // onChange={(e)=>{setOptionValue(e.target.value)}}
            >
              <label htmlFor="employeeName" style={{ marginTop: "5px" }}>
                Option :
              </label>
              <FormControlLabel
                value="A (Old Schema)"
                control={<Radio />}
                label="A (Old Schema)"
                name="option"
                sx={{ marginLeft: "10px" }}
                onChange={(e) => {
                  formik.setFieldValue("option", e.target.value);
                }}
              />
              <HelpIcon
                sx={{ marginTop: "10px" }}
                onClick={() => {
                  setOpenModal(true);
                  setOption("A");
                }}
              />
              <FormControlLabel
                value="B (New Schema)"
                name="option"
                control={<Radio selected />}
                label="B (New Schema)"
                sx={{ marginLeft: "10px" }}
                onChange={(e) => {
                  formik.setFieldValue("option", e.target.value);
                }}
              />
              <HelpIcon
                sx={{ marginTop: "10px" }}
                onClick={() => {
                  setOpenModal(true);
                  setOption("B");
                }}
              />
            </RadioGroup>
            {formik.submitCount>0 &&formik.errors.option &&  (
              <Typography variant="body1" color="red">
                {formik.errors.option}
              </Typography>
            )}
          </FormControl>
        </Stack>
        <Button type="submit" variant="contained">
          Submit
        </Button>
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
      {submitModal && (
        <SubmitModal
          submitModal={submitModal}
          onClose={() => {
            setSubmitModal(false);
          }}
          name={name}
          pan={pan}
          optionValue={optionValue}
        />
      )}
    </>
  );
}

export default PanDetailsForm;
