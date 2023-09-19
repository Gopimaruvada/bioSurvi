// Sidebar.tsx
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Collapse, Divider } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';


const SideBar: React.FC = () => {
  const [openMenu1, setOpenMenu1] = useState(false); // Open "Menu 1" by default
  const [openMenu2, setOpenMenu2] = useState(false); // Open "Menu 2" by default

  const toggleMenu1 = () => {
    setOpenMenu1(!openMenu1);
  };

  const toggleMenu2 = () => {
    setOpenMenu2(!openMenu2);
  };

  
  return (
    <div className="container">
   <Drawer variant="permanent" sx={{ width: '25%' }}>
        <List>
          <ListItem button onClick={toggleMenu1}>
            <ListItemText primary="Menu 1" />
            {openMenu1 ? <Remove /> : <Add />}
          </ListItem>
          <Collapse in={openMenu1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Submenu 1" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Submenu 2" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Submenu 3" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={toggleMenu2}>
            <ListItemText primary="Menu 2" />
            {openMenu2 ? <Remove /> : <Add />}
          </ListItem>
          <Collapse in={openMenu2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Submenu 4" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Submenu 5" />
              </ListItem>
            </List>
          </Collapse>

          <Divider />
          {/* Add more menu items here */}
        </List>
      </Drawer>
    </div>
  );
};

export default SideBar;
