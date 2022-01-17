import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
  Storefront as StorefrontIcon,
  AddCircle as AddCircleIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import { routes } from "routes";

const MenuList = ({
  toggleDrawer,
}: {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}) => (
  <Box
    sx={{ width: 250 }}
    role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
  >
    <List>
      <Link to={routes.marketplace}>
        <ListItem button>
          <ListItemText primary="Marketplace" />
          <ListItemIcon>
            <StorefrontIcon />
          </ListItemIcon>
        </ListItem>
      </Link>
      <Link to={routes.addToCollection}>
        <ListItem button>
          <ListItemText primary="Add to Collection" />
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
        </ListItem>
      </Link>
    </List>
    <Divider />
    <List>
      {["All mail", "Trash", "Spam"].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default MenuList;
