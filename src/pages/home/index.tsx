import React from "react";

import { Box, Container, Typography } from "@mui/material";
import { Flex } from "components";

const Home = () => (
  <Container maxWidth="xl">
    <Flex
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100%"
      flexDirection="column"
    >
      <Typography variant="h1">Hello World</Typography>
    </Flex>
  </Container>
);

export default Home;
