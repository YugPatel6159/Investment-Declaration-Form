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
import { data } from "../Data/UserData";
import HelpIcon from "@mui/icons-material/Help";
import InfoModal from "./InfoModal";
import { v4 as uuid } from "uuid";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Notes from "./Notes";
import PanDetailsForm from "./PanDetailsForm";

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
  const [infoBoolean, setInfoBoolean] = React.useState(false);
  const [deduction, setDeduction] = React.useState({});
  const [renderData, setRenderData] = React.useState(data);
  const [place, setPlace] = React.useState('Ahmedabad');
  const [submitData,setSubmitData] = React.useState([]);

  const handleEmployeePlace = (event) => {
    setPlace(event.target.value);
  };

  const handleSubmit = () =>{
    const submitedData = renderData.filter((item) => {
      return item.totalAmount>0
    })
    const filteredObjects = submitedData.map(obj => ({
      ...obj,
      deduction: obj.deduction.filter(ded => ded.amount > 0)
    })).filter(obj => obj.deduction.length > 0);
    setSubmitData(filteredObjects)
    console.log(filteredObjects,'filteredObjects')
  }
  
  const empPlace = [
    'Ahmedabad'
  ]
  const handleImageUpload = (event, cid, pid) => {
    const files = event.target.files;
    [...files].map((res) => {
      res.id = uuid();
    });
    let newData = renderData.map((item) => {
      if (item.id === pid) {
        let subData = item.deduction.map((deduction) => {
          if (deduction.id === cid) {
            return {
              ...deduction,
              uploadFile: [...deduction.uploadFile, ...files],
            };
          } else {
            return deduction;
          }
        });
        return {
          ...item,
          deduction: subData,
        };
      } else {
        return item;
      }
    });
    setRenderData(newData);
  };
  const handleSubTotal = (e, pid, cid) => {
    let subAmount = Number(e.target.value);
    let subTotal = 0;

    let newData = renderData.map((item) => {
      if (item.id === pid) {
        let subData = item.deduction.map((deduction) => {
          if (deduction.id === cid) {
            subTotal = subTotal + subAmount;
            return {
              ...deduction,
              amount: subAmount,
            };
          } else {
            subTotal = subTotal + deduction.amount;
            return deduction;
          }
        });
        return {
          ...item,
          deduction: subData,
          totalAmount: subTotal,
        };
      } else {
        return item;
      }
    });
    setRenderData(newData);
  };

  const handleFileDelete = (fileId, childId, parentId) => {
    console.log("functionCalled");
    let newData = renderData?.map((item) => {
      if (item.id == parentId) {
        let subData = item?.deduction?.map((deduction) => {
          if (deduction.id === childId) {
            let newValue = deduction.uploadFile.filter(
              (file) => file.id !== fileId
            );
            return {
              ...deduction,
              uploadFile: [...newValue],
            };
          } else {
            return deduction;
          }
        });
        return {
          ...item,
          deduction: subData,
        };
      } else {
        return item;
      }
    });
    setRenderData(newData);
  };
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="deduction">
      <PanDetailsForm/>
      {renderData?.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `"panel${index}"`}
          onChange={handleChange(`"panel${index}"`)}
        >
          <AccordionSummary
            aria-controls={`"panel${index}d-content"`}
            id={`"panel${index}d-header"`}
          >
            <Stack direction="row" key={index} className="rule-item">
              <Typography>{item.ruleName}</Typography>
              <Typography>₹ {item.totalAmount}</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            {item.deduction.map((deduction, dindex) => (
              <>
                <Typography sx={{ marginTop: "10px" }}>
                  {deduction.name}
                  {item.deduction[dindex].description.length > 1 && (
                    <HelpIcon
                      key={dindex}
                      onClick={() => {
                        console.log("clicked");
                        setDeduction({
                          id: dindex,
                          name: deduction.name,
                          description: deduction.description,
                        });
                        setInfoBoolean(true);
                      }}
                    />
                  )}
                </Typography>
                <Stack direction="row" key={dindex} spacing={2}>
                  <input
                    id={deduction.id}
                    placeholder="0"
                    type="number"
                    className="inputField"
                    onChange={(e) => {
                      handleSubTotal(e, item.id, deduction.id);
                    }}
                    sx={{ width: "100%" }}
                  />
                  <div>
                    <TextField
                      type="file"
                      name={deduction.id}
                      id={"file" + deduction.id}
                      inputProps={{
                        multiple: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      onChange={(event) => {
                        handleImageUpload(event, deduction.id, item.id);
                      }}
                      style={{ display: "none" }}
                    />
                    <label htmlFor={"file" + deduction.id}>
                      <Button
                        variant="contained"
                        component="span"
                        sx={{ backgroundColor: "orange", color: "white" }}
                      >
                        Upload
                      </Button>
                    </label>
                  </div>
                </Stack>
                <Chips
                  files={deduction.uploadFile}
                  childId={deduction.id}
                  parentId={item.id}
                  handleFileDelete={handleFileDelete}
                />
              </>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
      <Typography sx={{ marginTop: "10px" }} variant="h6">
        Total Amount : ₹ {renderData?.reduce((a, b) => a + b.totalAmount, 0)}
      </Typography>
      <Stack className="totalAmount">
        <Stack direction="row" spacing={1}>
          <label htmlFor="date">Date:</label>
          <TextField id="date" type="date" variant="standard" />
        </Stack>
        <Stack direction="row" spacing={1}>
          <label htmlFor="employeePlace">Employee Place:</label>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={place}
          onChange={handleEmployeePlace}
          label="place"
        >
          <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
        </Select>
      </FormControl>
        </Stack>
        <Stack direction="row" className="submitBtn" >
        <Stack direction="row" spacing={1}>
          <label htmlFor="sign">Employee Signature:</label>
          <TextField id="sign" type="text" variant="standard" />
        </Stack>
        <Button
          variant="contained"
          sx={{ color: "black", backgroundColor: "orange" }}
          onClick={handleSubmit}
          >
          Submit
        </Button>
          </Stack>
        </Stack>
        <Notes/>
      {infoBoolean && (
        <InfoModal
          open={infoBoolean}
          onClose={() => setInfoBoolean(false)}
          title={deduction.name}
          description={deduction.description}
        />
      )}
    </div>
  );
}
