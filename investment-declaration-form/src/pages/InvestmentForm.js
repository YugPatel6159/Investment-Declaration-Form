import React from 'react'
import Header from '../layouts/Header'
import PanDetailsForm from '../components/PanDetailsForm'
import { Box } from '@mui/material'

function InvestmentForm() {
  return (
    <>
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
      margin="auto"
      width="90%">
    <Header/>
    <PanDetailsForm/>
    </Box>
    </>
  )
}

export default InvestmentForm