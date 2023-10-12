import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <>
      <div>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              Hey Welcome to Botler. You are logged in now.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
