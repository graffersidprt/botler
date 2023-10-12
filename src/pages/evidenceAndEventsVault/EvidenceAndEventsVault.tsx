import { Box, Typography } from '@mui/material'
import React from 'react'

const EvidenceAndEventVault = () => {
  return (
    <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5">Evidence And Event Vault Content</Typography>
            <Typography variant="body1">
              Your Evidence And Event Vault Content goes here
            </Typography>
          </Box>
  )
}

export default EvidenceAndEventVault;
