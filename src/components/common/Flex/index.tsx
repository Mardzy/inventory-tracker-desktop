import React, { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

interface FlexProps {
  alignContent?: string | string[] | undefined;
  alignItems?: string | string[] | undefined;
  bgcolor?: string;
  children?: ReactNode;
  flexDirection?: string | string[] | undefined;
  height?: string;
  justifyContent?: string | string[] | undefined;
}

const Flex = styled(Box, {
  shouldForwardProp: (prop) => prop !== "sx",
})<FlexProps>((props) => ({
  sx: {
    ...props,
  },
}));

export default Flex;
