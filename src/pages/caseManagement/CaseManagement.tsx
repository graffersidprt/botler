import { Box, Typography } from '@mui/material'
import React from 'react'

const CaseManagement = () => {
  return (
    <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5">Case Management Content</Typography>
            <Typography variant="body1">
              Your Case Management content goes here
            </Typography>
          </Box>
  )
}

export default CaseManagement
