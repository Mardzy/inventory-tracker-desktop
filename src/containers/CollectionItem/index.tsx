import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

import { CardItem, Flex } from "@components";

import { CollectionCard } from "@types";
import { connect } from "react-redux";
import { RootState } from "@store";
import { getCollectionItem } from "@slices";

interface LocationState {
  state: {
    collectionItem: CollectionCard;
  };
  pathname: string;
}

/**
 * @todo fallback for direct navigation
 * @todo create back button
 * @constructor
 */
const CollectionItem: FC = ({}) => {
  let {
    state: { collectionItem },
    pathname,
  } = useLocation() as LocationState;
  // if !collectionItem, use selector to get collection item from redux store
  // if no redux store get item from db
  useEffect(() => {
    if (!collectionItem) {
      const storeCollectionItem = 2434;
      const args = {
        userId: "me",
        id: pathname,
      };
      getCollectionItem(args);
    }
  }, [collectionItem]);

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

const mapStateToProps = ({ collection }: RootState) => ({
  collectionItem: collectionItemSelector(collection),
});

const mapDispatchToProps = {
  getCollectionItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
