import React, { FC, ReactElement } from "react";
import { Typography } from "@mui/material";

export const PageTitle: FC<{
  children: string | ReactElement;
  color: string;
}> = ({ children, color }) => (
  <Typography color={color} component="h1" mb={3} fontSize="2.25em">
    {children}
  </Typography>
);
