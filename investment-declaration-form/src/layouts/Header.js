import React from 'react'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'

function Header() {
  return (
    <>
      <Stack>
        <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold" }} >
        Investment Declaration Form F. Y. 2022-23
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center" }} >
        ( i.e. for year ending MARCH, 2023)
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center", fontWeight: "bold", marginTop: "2rem" }} >
        M/s. CYBERCOM CREATION
        </Typography>
      </Stack>
    </>
  )
}

export default Header