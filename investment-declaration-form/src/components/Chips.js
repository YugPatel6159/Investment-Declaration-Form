import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function Chips({ files, handleFileDelete, childId, parentId }) {
    // const handleDelete = (files) => {
    //   console.log(files,' files')
    //   handleFileDelete([...files], childId, parentId);
    // }
  
  return (
      files.map((res,index) => (
    <Stack direction="row" spacing={1} key={index}>
        <Chip
          key={res.id}
          label={res.name}
          variant="outlined"
          onDelete={()=>handleFileDelete(res.id,childId,parentId)}
        />
    </Stack>
      ))
  );
}
