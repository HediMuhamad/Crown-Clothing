import { createSelector } from "reselect";
import memoize from "lodash.memoize"

const selectShopData = state => state.shopData;

export const selectShopDataCollections = createSelector(
    [selectShopData],
    (shopData) => shopData.collections
)

export const selectCollection = memoize(collectionUrlParam => createSelector( //Function inside function, to Memoize the outer one we should use lodash.memoize library
    [selectShopDataCollections],
    (collections) => collections[collectionUrlParam]
))

export const selectIsCollectionsInFetching = createSelector(
    [selectShopData],
    (shopData) => shopData.isInFetchingData
)