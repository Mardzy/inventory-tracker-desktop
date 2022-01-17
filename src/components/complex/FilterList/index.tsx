import React from "react";
import { Box, Typography } from "@mui/material";
import { FilterItem } from "components/complex/FilterList/components";

const FilterList = () => (
  <Box mt={5} width={4 / 5}>
    <Typography width="100%">Filters</Typography>
    <FilterItem details="year details" title="Year" />
    <FilterItem details="product details" title="Products" />
  </Box>
);

export default FilterList;
