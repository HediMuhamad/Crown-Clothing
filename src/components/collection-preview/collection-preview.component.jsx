import React from "react";
import './collection-preview.styles.scss'
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = (props) => {
    console.log(props);
    const {items} = props;
    return(
        <div className="collection-preview">
            <h1 className="title">{props.title}</h1>
            <div className="preview">{
                items
                .filter((item, index)=>{return index<4})
                .map(item=> <CollectionItem key={item.id} {...item} />)
            }
            </div>
        </div>
    );
}

export default CollectionPreview;