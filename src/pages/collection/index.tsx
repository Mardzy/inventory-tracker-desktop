import React, { FC, useEffect } from "react";
import { connect, /*useDispatch,*/ useSelector } from "react-redux";
import { Typography } from "@mui/material";

import { Flex } from "components";
import { fetchInventory, InventoryProps } from "reduxConfig/inventory/slice";
import { inventorySelector } from "reduxConfig/inventory/selectors";
import { RootState } from "reduxConfig/config/rootReducer";

interface CollectionProps {
  fetchInventory: () => void;
  data: InventoryProps;
}

const Collection: FC<CollectionProps> = ({ fetchInventory, data }) => {
  const { error, errorMessage, inventory, loading } = data;

  useEffect(() => {
    fetchInventory();
  }, [inventory]);

  console.log("data", data);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100%"
      flexDirection="column"
    >
      <Typography variant="h1">Hello Collection</Typography>
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
