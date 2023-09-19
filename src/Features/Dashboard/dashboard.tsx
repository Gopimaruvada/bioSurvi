// Sidebar.tsx
import React, { useState } from "react";

import SideBar from "../SideBar/sidebar";
import Navbar from "../Navbar/navbar";
import { Grid } from "@mui/material";

const DashboardPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Grid style={{width:'100%'}}>
       <Grid style={{width:'25%'}}>
       <SideBar />
       </Grid>
       <Grid style={{width:'75%'}}>
       <p>OuT Break Insights</p>
       </Grid>
       
      </Grid>
    </div>
  );
};

export default DashboardPage;
