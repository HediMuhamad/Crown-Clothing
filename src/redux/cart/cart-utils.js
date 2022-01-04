export const cartItemHanlder = (arr, id) => {
    const findResult = arr.findIndex((item)=>item.id===id);
    findResult===-1 ? arr.push({id: id, quantity: 1}) : arr[findResult].quantity=arr[findResult].quantity+1
    return [...arr];
    /* Why [...arr] not just arr? ReactJS does not render if just the array value changes, the array address should change to render it.
       Watch it out: https://coddingbuddy.com/article/52104987/will-a-react-component-re-render-if-its-props-are-updated-but-dont-change-in-value */
}