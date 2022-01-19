import React, { FC, KeyboardEvent, MouseEvent } from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Apps as CollectionIcon,
  AddCircle as AddCircleIcon,
  Mail as MailIcon,
  MoveToInbox as InboxIcon,
  Storefront as StorefrontIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import { routes } from "routes";
import { Flex } from "components";
import { MenuListItem } from "./";

interface MenuListProps {
  toggleDrawer: (open: boolean) => (event: KeyboardEvent | MouseEvent) => void;
}

/**
 * Menu list for header
 * @param toggleDrawer
 * @constructor
 */
const MenuList: FC<MenuListProps> = ({ toggleDrawer }) => (
  <Flex
    height="100%"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
    flexDirection="column"
    justifyContent="space-between"
  >
    <List>
      {["All mail", "Trash", "Spam"].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
      <Divider />
    </List>
    <List>
      <MenuListItem to={routes.marketplace.to} title={routes.marketplace.title}>
        <StorefrontIcon />
      </MenuListItem>
      <MenuListItem
        to={routes.addToCollection.to}
        title={routes.addToCollection.title}
      >
        <AddCircleIcon />
      </MenuListItem>
      <MenuListItem to={routes.collection.to} title={routes.collection.title}>
        <CollectionIcon />
      </MenuListItem>
    </List>
  </Flex>
);

export default MenuList;
