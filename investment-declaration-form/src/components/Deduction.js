import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Stack, TextField, Button } from "@mui/material";
import "./Deduction.css";
import FinalAddition from "../Utils/FinalAddition";
import Chips from "./Chips";
import { SnippetFolderOutlined } from "@mui/icons-material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Deduction() {
  const [expanded, setExpanded] = React.useState("");
  const [categoryTotal, setCategoryTotal] = React.useState(0);
  const [file, setFile] = React.useState([]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    setFile([...file, ...files]);
    console.log(files)
  };

  const handleChangeFileValue = (newValue) => {
    setFile(newValue);
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  console.log(file);
  return (
    <div className="deduction">
      
      
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Stack direction="row" spacing={2}>
            <Typography>Deduction under section 80C</Typography>
            <Typography align="left">
              <FinalAddition value={categoryTotal} />
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" spacing={2}>
            <TextField
              id="deposit-in-ulip"
              label="Deposit in ULIP"
              placeholder="0"
              type="text"
              onChange={(e) => {
                if (e.target.value.length > 0) {
                  setCategoryTotal(e.target.value);
                } else {
                  setCategoryTotal(0);
                }
              }}
              sx={{ width: "100%" }}
            />
            <TextField
              type="file"
              name="file"
              id="file"
              inputProps={{
                multiple: true,
              }}
              InputLabelProps={{ shrink: true }}
              onChange={(event) => handleImageUpload(event)}
              style={{ display: "none" }}
            />
            <label htmlFor="file">
              <Button variant="contained" className="buttonColor" component="span">
                Upload
              </Button>
            </label>
          </Stack>
          <Chips files={file} onChangeFilesValue={handleChangeFileValue}/>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Stack direction="row" spacing={2}>
            <Typography>Deduction under section 80C</Typography>
            <Typography align="left">
              <FinalAddition value={categoryTotal} />
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" spacing={2}>
            <TextField
              id="deposit-in-ulip"
              label="Deposit in ULIP"
              placeholder="0"
              type="text"
              onChange={(e) => {
                if (e.target.value.length > 0) {
                  setCategoryTotal(e.target.value);
                } else {
                  setCategoryTotal(0);
                }
              }}
              sx={{ width: "100%" }}
            />
            <TextField
              type="file"
              name="file"
              id="file1"
              inputProps={{
                multiple: true,
              }}
              InputLabelProps={{ shrink: true }}
              onChange={(event) => handleImageUpload(event)}
              style={{ display: "none" }}
            />
            <label htmlFor="file1">
              <Button variant="contained" className="buttonColor" component="span">
                Upload
              </Button>
            </label>
          </Stack>
          <Chips files={file} onChangeFilesValue={handleChangeFileValue}/>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Stack direction="row" spacing={2}>
            <Typography>Deduction under section 80C</Typography>
            <Typography align="left">
              <FinalAddition value={categoryTotal} />
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" spacing={2}>
            <TextField
              id="deposit-in-ulip"
              label="Deposit in ULIP"
              placeholder="0"
              type="text"
              onChange={(e) => {
                if (e.target.value.length > 0) {
                  setCategoryTotal(e.target.value);
                } else {
                  setCategoryTotal(0);
                }
              }}
              sx={{ width: "100%" }}
            />
            <TextField
              type="file"
              name="file"
              id="file2"
              inputProps={{
                multiple: true,
              }}
              InputLabelProps={{ shrink: true }}
              onChange={(event) => handleImageUpload(event)}
              style={{ display: "none" }}
            />
            <label htmlFor="file2">
              <Button variant="contained" className="buttonColor" component="span">
                Upload
              </Button>
            </label>
          </Stack>
          <Chips files={file} onChangeFilesValue={handleChangeFileValue}/>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Stack direction="row" spacing={2}>
            <Typography>Deduction under section 80C</Typography>
            <Typography align="left">
              <FinalAddition value={categoryTotal} />
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" spacing={2}>
            <TextField
              id="deposit-in-ulip"
              label="Deposit in ULIP"
              placeholder="0"
              type="text"
              onChange={(e) => {
                if (e.target.value.length > 0) {
                  setCategoryTotal(e.target.value);
                } else {
                  setCategoryTotal(0);
                }
              }}
              sx={{ width: "100%" }}
            />
            <TextField
              type="file"
              name="file"
              id="file3"
              inputProps={{
                multiple: true,
              }}
              InputLabelProps={{ shrink: true }}
              onChange={(event) => handleImageUpload(event)}
              style={{ display: "none" }}
            />
            <label htmlFor="file3">
              <Button variant="contained" className="buttonColor" component="span">
                Upload
              </Button>
            </label>
          </Stack>
          <Chips files={file} onChangeFilesValue={handleChangeFileValue}/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
