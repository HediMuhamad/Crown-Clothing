import { shopDataActionTypes } from "./shop-data.enums";

export const parseToShopData = (docsArray) => ({
    type: shopDataActionTypes.PARSE_FIREBASE_DOCS_TO_SHOP_DATA,
    payload: docsArray
})