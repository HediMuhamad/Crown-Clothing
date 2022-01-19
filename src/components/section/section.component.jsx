import React from "react";

import { useSelector } from 'react-redux'
import { selectCollection } from "../../redux/shop-data/shop-data.selector";

import './section.styles.scss'

import CollectionPreview from "../collection-preview/collection-preview.component";


const Section = ({match}) => {
    const collection = useSelector(selectCollection(match.params.collection));
    return collection ? <div>{ <CollectionPreview key={collection.id} viewLimit={-1} {...collection} /> }</div> : <div><h1>Page not found</h1></div>
}

export default Section