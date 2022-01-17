import React, { SyntheticEvent, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  Search as SearchIcon,
} from "@mui/icons-material";

import { FilterList, Flex } from "components";

interface SearchProps {
  search: string;
  event?: Event;
}

const AddToCollection = () => {
  const { control, handleSubmit } = useForm<SearchProps>();

  const [expanded, setExpanded] = useState<string | false>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (panel: string) => (
    event: SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  /**
   * @todo add autocomplete
   * @param event
   */
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    // autocomplete
  };

  const onSearchSubmit: SubmitHandler<SearchProps> = ({ search }, event) => {
    event?.preventDefault();
    event?.stopPropagation();
    console.log("res: ", search);
    setSearchValue(search);
  };

  console.log("searchValue: ", searchValue);
  return (
    <Flex
      alignItems="center"
      justifyContent="flex-start"
      height="90vh"
      width="100%"
      flexDirection="column"
    >
      <Typography variant="h3" component="h1" mb={3}>
        Add to Collection
      </Typography>
      <Flex my={5} flexDirection="column" alignItems="center" width="100%">
        <Box>
          <form onSubmit={handleSubmit(onSearchSubmit)}>
            <Controller
              control={control}
              name="search"
              render={({ field }) => (
                <TextField
                  id="outlined-name"
                  label="Search for card"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="search"
                          color="primary"
                          type="submit"
                        >
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...field}
                />
              )}
            />
          </form>
        </Box>
        <FilterList />
      </Flex>
      <Box>No results....</Box>
    </Flex>
  );
};

export default AddToCollection;
