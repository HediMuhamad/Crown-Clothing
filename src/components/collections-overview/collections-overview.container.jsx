/*Higher Order Components */
import { compose } from "redux";
import { connect } from 'react-redux';
import { WithSpinner } from "../with-spinner/with-spinner.component";

import { selectIsCollectionsInFetching } from '../../redux/shop-data/shop-data.selector'

import collectionsOverView from './collections-overview.component'

const mapStateToProps = state => ({
    isCollectionsInFetching: selectIsCollectionsInFetching(state)
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionsOverView)

export default CollectionOverviewContainer;