import React from "react";

import { useSelector } from 'react-redux';
import { selectShopDataCollections } from '../../redux/shop-data/shop-data.selector';

import './collections-overview.styles.scss'
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = () => {
    const collections = useSelector(selectShopDataCollections);
    return (
        <div>{
            Object.keys(collections).map(key=>
                <CollectionPreview key={key} viewLimit={4} {...collections[key]} />
            )
        }</div>
    )
}

export default CollectionOverview