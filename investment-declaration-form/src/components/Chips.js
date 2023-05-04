import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function Chips({ files, onChangeFilesValue }) {
    const handleDelete = (name) => {
        onChangeFilesValue(files.filter((file) => file.name !== name));
        console.info("You clicked the delete icon.");
    }
  
  return (
    <Stack direction="row" spacing={1}>
      {files.map((res, index) => (
        <Chip
          key={index}
          label={res.name}
          variant="outlined"
          onDelete={()=>handleDelete(res.name)}
        />
      ))}
    </Stack>
  );
}
