import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.styles.scss'

const CollectionPreview = (props) => {
    const {title, items, viewLimit} = props;
    const navigate = useNavigate();
    const match = useLocation();
    const params = useParams();

    return(
        <div className="collection-preview">
            <h1 className="title" onClick={()=>{
                match.pathname = (match.pathname.charAt(match.pathname.length-1) === '/') ?
                match.pathname.slice(0, match.pathname.length-1) : match.pathname
                !params.collection ? navigate(`${match.pathname}/${title.toLowerCase()}`) : (()=>{})();
                window.scrollTo(0,0);
                }
            }>{title}</h1>
            <div className="preview">{
                Object.keys(items)
                .filter((item, index)=>{return viewLimit>=0 ? index<viewLimit : index>-1})
                .map(itemKey=> <CollectionItem key={itemKey} id={itemKey} {...items[itemKey]} />)
            }
            </div>
        </div>
    );
}

export default CollectionPreview;