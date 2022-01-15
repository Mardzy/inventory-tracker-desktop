import React from "react";

import { Container, Typography } from "@mui/material";
import { Flex } from "components";

const Home = () => (
  <Container maxWidth="xl">
    <Flex bgcolor="#cfe8fc" height="100vh">
      <Typography variant="h1">Hello World!</Typography>
    </Flex>
  </Container>
);

export default Home;
