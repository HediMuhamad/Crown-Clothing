import React from "react";
import { withRouter } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.styles.scss'

const CollectionPreview = (props) => {
    const {title, items, viewLimit, history, match} = props;
    return(
        <div className="collection-preview">
            <h1 className="title" onClick={()=>{
                !match.params.collection ? history.push(`${match.url}/${title.toLowerCase()}`) : (()=>{})();
                window.scrollTo(0,0);
                }
            }>{title}</h1>
            <div className="preview">{
                items
                .filter((item, index)=>{return viewLimit>=0 ? index<viewLimit : index>-1})
                .map(item=> <CollectionItem key={item.id} {...item} />)
            }
            </div>
        </div>
    );
}

export default withRouter(CollectionPreview);