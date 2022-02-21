import React, { FC } from "react";

import { Typography } from "@mui/material";

import { CardItem, Flex } from "components";

import { CardProps } from "reduxConfig/inventory/slice";
import { useLocation } from "react-router-dom";

/**
 * @todo fallback for direct navigation
 * @todo create back button
 * @constructor
 */
const CollectionItem: FC = () => {
  const location = useLocation();
  // @ts-ignore
  const inventoryItem = location.state.inventoryItem as CardProps;

  return (
    <Flex
      alignItems="center"
      justifyContent="flex-start"
      width="100%"
      flexDirection="column"
    >
      <Typography variant="h4">Collection Item</Typography>
      <CardItem {...inventoryItem} />
    </Flex>
  );
};

export default CollectionItem;
