import { createSelector } from "reselect";

const selectShopData = state => state.shopData;

export const selectShopDataCollections = createSelector(
    [selectShopData],
    (shopData) => shopData.collections
)