import React from 'react'
import Header from '../layouts/Header'
import PanDetailsForm from '../components/PanDetailsForm'
import { Box } from '@mui/material'
import Deduction from '../components/Deduction'

function InvestmentForm() {
  return (
    <>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      >
    <Header/>
    <Deduction/>
    </Box>

    </>
  )
}

export default InvestmentForm