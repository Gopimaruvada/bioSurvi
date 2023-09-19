// Sidebar.tsx
import React, { useState } from "react";

import SideBar from "../SideBar/sidebar";
import Navbar from "../Navbar/navbar";
import { Grid, Typography } from "@mui/material";

const DashboardPage: React.FC = () => {
  return (
    <Grid>
      <Navbar />
      <Grid style={{ display: "flex" }}>
        <Grid style={{ flex: "0 0 25%" }}>
          <SideBar />
        </Grid>
        <Grid style={{ flex: "1" }}>
          <Typography>Out Break insights</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
