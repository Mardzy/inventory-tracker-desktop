import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { CardItem, Flex, FilterButton } from "components";

import {
  fetchInventory,
  InventoryProps,
  Product,
} from "reduxConfig/inventory/slice";
import { inventorySelector } from "reduxConfig/inventory/selectors";
import { RootState } from "@store";

import { CollectionCard } from "@types";

interface CollectionProps {
  fetchInventory: () => void;
  data: InventoryProps;
}

const Collection: FC<CollectionProps> = ({ fetchInventory, data }) => {
  const { error, errorMessage, items, loading } = data;

  useEffect(() => {
    fetchInventory();
  }, [items]);

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
        {items?.map((product: Product) =>
          product?.cards.map((card: CollectionCard, index: number) => (
            <Grid key={index} item xs={6} sm={4} md={4} lg={2} xl={2}>
              <Link
                to={`/collection/${card.id}`}
                state={{ inventoryItem: card }}
              >
                <CardItem productName={product?.productName} {...card} />
              </Link>
            </Grid>
          ))
        )}
        {/*  load more button to integrate with fetch inventory*/}
      </Grid>
    </Flex>
  );
};

const mapStateToProps = (state: RootState) => ({
  data: inventorySelector(state),
});

const mapDispatchToProps = {
  fetchInventory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
