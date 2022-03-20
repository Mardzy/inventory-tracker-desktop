import React, { FC } from "react";
import { CollectionCard } from "@types";
import { LinkWithState } from "@components";

interface LinkToCollectionItemProps extends CollectionCard {
    children: React.ReactNode;
}

export const LinkToCollectionItem: FC<LinkToCollectionItemProps> = (props) => (
    <LinkWithState
        to={`/collection/${props.id}`}
state={{ collectionItem: props }}
>
{props.children}
</LinkWithState>
);
