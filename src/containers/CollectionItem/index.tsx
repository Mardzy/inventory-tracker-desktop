import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

import { CardItem, Flex } from "@components";

import { Card } from "@types";

/**
 * @todo fallback for direct navigation
 * @todo create back button
 * @constructor
 */
const CollectionItem: FC = () => {
  const { state } = useLocation();
  // @ts-ignore
  const inventoryItem = state.inventoryItem as Card;

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
