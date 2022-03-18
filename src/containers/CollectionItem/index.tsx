import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

import { CardItem, Flex } from "@components";

import { CollectionCard } from "@types";

interface LocationState {
  state: {
    collectionItem: CollectionCard;
  };
}

/**
 * @todo fallback for direct navigation
 * @todo create back button
 * @constructor
 */
const CollectionItem: FC = () => {
  const {
    state: { collectionItem },
  } = useLocation() as LocationState;

  return (
    <Flex
      alignItems="center"
      justifyContent="flex-start"
      width="100%"
      flexDirection="column"
    >
      <Typography variant="h4">Collection Item</Typography>
      <CardItem {...collectionItem} />
    </Flex>
  );
};

export default CollectionItem;
