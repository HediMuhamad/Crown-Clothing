import SHOP_DATA from "./shop-data.data"

//It won't be use in reducer, just fo external use until replaced with a Database
export const findInStore = id => {
    var currentPoint=0;
    for (var i=0;i<SHOP_DATA.length;i++){
        var length = SHOP_DATA[i].items.length;
        currentPoint+=length
        if(currentPoint>=id){
            var mod = currentPoint - id;
            var item = SHOP_DATA[i].items[length-1-mod]
            return item
        }
    }
}
  