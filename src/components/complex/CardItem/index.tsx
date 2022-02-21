import React, { FC } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import {
  FavoriteBorder as FavoriteIcon,
  SyncAlt as TradeIcon,
  ZoomIn as ZoomInIcon,
} from "@mui/icons-material";

import { CardProps } from "reduxConfig/inventory/slice";
import { Flex } from "components";

interface CardItemProps extends CardProps {
  productName?: string;
  onClick?: () => void;
}

const imagePlaceholder = "http://placekitten.com/3000/4000";

const CardItem: FC<CardItemProps> = ({
  cardId,
  description,
  productName,
  setName,
}) => (
  <Card sx={{ padding: "10px", paddingBottom: 0 }}>
    <CardMedia
      sx={{
        boxShadow: "2px 2px 2px 1px rgba(0,0,0,0.47)",
      }}
      component="img"
      image={imagePlaceholder}
      alt="place kitten"
    />
    <CardContent sx={{ paddingBottom: 0, padding: "5px" }}>
      <Flex justifyContent="space-between" mb={1} mt={0.5}>
        <FavoriteIcon fontSize="small" />
        <ZoomInIcon fontSize="small" />
        <TradeIcon fontSize="small" />
        <Typography color="green">{3}</Typography>
      </Flex>
      <Typography variant="body1">{description}</Typography>
      {productName ?? (
        <Typography variant="body2" color="text.secondary">
          {productName}
        </Typography>
      )}
      <Typography variant="body2" color="text.secondary">
        {setName} - {cardId}
      </Typography>
    </CardContent>
  </Card>
);

export default CardItem;
