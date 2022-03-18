import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { CardItem, Flex, FilterButton } from "@components";

import { fetchCollection } from "@slices";
import { RootState } from "@store";
import { Collection as CollectionProps, CollectionCard, Status } from "@types";

interface CollectionTypeProps {
  fetchCollection: (userId: string) => void;
  data: CollectionProps & Status;
}

const Collection: FC<CollectionTypeProps> = ({ fetchCollection, data }) => {
  const { error, collection, status } = data;

  useEffect(() => {
    fetchCollection("me");
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
            <Link
              to={`/collection/${card.id}`}
              state={{ collectionItem: card }}
            >
              <CardItem productName={card.productName} {...card} />
            </Link>
          </Grid>
        ))}
        {/*  load more button to integrate with fetch inventory*/}
      </Grid>
    </Flex>
  );
};

const mapStateToProps = ({ collection }: RootState) => ({
  collection,
});

const mapDispatchToProps = {
  fetchCollection,
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
