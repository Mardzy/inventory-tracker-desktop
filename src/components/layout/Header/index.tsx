import React from "react";
import {
  Box,
  Button,
  IconButton,
  SwipeableDrawer,
  Typography,
  Toolbar,
} from "@mui/material";
import { Cancel as CancelIcon, Menu as MenuIcon } from "@mui/icons-material";

import { AppBar, DrawerHeader, HideOnScroll, MenuList } from "./components";

import { routes } from "routes";
import { LinkAsText } from "components";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement | undefined;
}

type Anchor = "top" | "left" | "bottom" | "right";

const Header = (props: Props) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, right: open });
  };

  return (
    <>
      <HideOnScroll {...props}>
        <Box flexGrow={1}>
          <AppBar sx={{ top: "auto", bottom: 0, bgcolor: "black" }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <LinkAsText color="white" to={routes.home.to}>
                  Inventory Tracker
                </LinkAsText>
              </Typography>
              <Button sx={{ mr: [3, 8] }} color="inherit">
                Login
              </Button>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: [0, 0, 2] }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </HideOnScroll>
      <SwipeableDrawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <MenuList toggleDrawer={toggleDrawer} />
        <DrawerHeader>
          <IconButton onClick={toggleDrawer(false)}>
            <CancelIcon />
          </IconButton>
        </DrawerHeader>
      </SwipeableDrawer>
    </>
  );
};

export default Header;
