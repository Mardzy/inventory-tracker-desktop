import React from "react";
import { Link } from "react-router-dom";
import styled from "@mui/styled-engine-sc";

export const LinkAsText = styled(Link)(({ color }) => ({
  textDecoration: "none",
  color,
}));
