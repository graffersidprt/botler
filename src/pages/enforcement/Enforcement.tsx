import { Box, Typography } from '@mui/material'
import React from 'react'

const Enforcement = () => {
  return (
    <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5">Enforcement Content</Typography>
            <Typography variant="body1">
              Your Enforcement content goes here
            </Typography>
          </Box>
  )
}

export default Enforcement;
