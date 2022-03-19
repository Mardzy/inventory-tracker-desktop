import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@mui/material";

import { CardItem, Flex, FilterButton } from "@components";

import { getCollection } from "@slices";
import { RootState } from "@store";
import { navigateWithState } from "../utils";
import { routes } from "@router";

import {
  Collection as CollectionProps,
  CollectionCard,
  RequestStatus,
} from "@types";

interface CollectionTypeProps {
  getCollection: (userId: string) => void;
  data: CollectionProps & RequestStatus;
}

const Collection: FC<CollectionTypeProps> = ({ getCollection, data }) => {
  const { error, collection, status } = data;

  useEffect(() => {
    getCollection("me");
  }, [collection]);

  return (
    <Flex
      alignItems="center"
      justifyContent="flex-start"
      width="100%"
      flexDirection="column"
    >
      <Typography variant="h4">Personal Collection</Typography>
      <FilterButton />
      <Grid
        container
        columnSpacing={{ xs: 2, sm: 3, md: 3 }}
        rowSpacing={2}
        mt={0.5}
      >
        {collection?.map((card: CollectionCard) => (
          <Grid key={card.cardId} item xs={6} sm={4} md={4} lg={2} xl={2}>
            <CardItem
              onClick={() =>
                navigateWithState(
                  routes.collectionItem.to.replace(":id", card.id as string),
                  card
                )
              }
              productName={card.productName}
              {...card}
            />
          </Grid>
        ))}
        {/*  load more button to integrate with fetch inventory*/}
      </Grid>
    </Flex>
  );
};

const mapStateToProps = ({ collection }: RootState) => ({
  data: collection,
});

const mapDispatchToProps = {
  getCollection,
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
