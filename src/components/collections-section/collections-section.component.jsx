import React from "react";

import { connect } from 'react-redux'
import { selectCollection } from "../../redux/shop-data/shop-data.selector";

import './collections-section.styles.scss'

import CollectionPreview from "../collection-preview/collection-preview.component";

const CellctionSection = ({collection}) => (
    collection ? <div>{ <CollectionPreview key={collection.id} viewLimit={-1} {...collection} /> }</div> : <div><h1>Page not found</h1></div> 
    )
    
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collection)(state)
}) 

export default connect(mapStateToProps)(CellctionSection)