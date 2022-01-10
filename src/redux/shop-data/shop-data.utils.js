let SHOP_DATA = {}

export const parseToShopData = (docsArray) => {
    let shopData = {};
    docsArray.forEach(({title, items}) => {
        const asLowerCase = (title+'').toLowerCase();
        
        return shopData[asLowerCase] = {
            title,
            routeName:asLowerCase,
            items
        }
    });
    SHOP_DATA = shopData
    return shopData
}

//It's just looks like a "util", but not :<
export const findInStore = id => {
    const getKeys = Object.keys(SHOP_DATA);
    for(var i=0;i<getKeys.length;i++){
        const searchResult = SHOP_DATA[getKeys[i]].items[id];
        if(!!searchResult){
            return searchResult;
        }
    }
}
  