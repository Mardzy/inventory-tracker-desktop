import React, { FC, useEffect } from "react";
import { Params, useNavigate, useLocation, useParams } from "react-router-dom";
import { Typography } from "@mui/material";

import { CardItem, Flex } from "@components";

import { CollectionCard } from "@types";
import { connect } from "react-redux";
import { RootState } from "@store";
import { getActiveItem } from "@slices";

interface LocationProps {
  state: {
    collectionItem: CollectionCard;
  };
}

/**
 * @todo fallback for direct navigation
 * @todo create back button
 * @constructor
 */
const CollectionItem: FC = ({}) => {
  const {
    state: { collectionItem },
  } = useLocation() as LocationProps;
  const { id } = useParams() as Readonly<Params>;
  // if !collectionItem, use selector to get collection item from redux store
  // if no redux store get item from db
  useEffect(() => {
    if (!collectionItem && id) {
      const args = {
        userId: "me",
        id,
      };

      getActiveItem(args);
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

const mapStateToProps = ({ activeItem, collection }: RootState) => ({
  activeItem,
});

const mapDispatchToProps = {
  getActiveItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
