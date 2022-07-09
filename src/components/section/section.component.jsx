import React from "react";

import { useParams } from "react-router-dom"; 
import { useSelector } from 'react-redux'
import { selectCollection } from "../../redux/shop-data/shop-data.selector";

import './section.styles.scss'

import CollectionPreview from "../collection-preview/collection-preview.component";


const Section = () => {
    const params = useParams();
    const collection = useSelector(selectCollection(params.collection));
    return collection ? <div>{ <CollectionPreview key={collection.id} viewLimit={-1} {...collection} /> }</div> : <div><h1>Page not found</h1></div>
}

export default Section