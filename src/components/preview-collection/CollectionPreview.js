import React from "react";
import "../preview-collection/CollectionPreview.scss";
import CollectionItem from "../CollectionItemShop/collectionItem";
const CollectionPreview = ({title,items}) => (
    <div className='collection-preview'>
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
       {
           items.filter((id,index) =>index<4).map(({id,...otherItemsProps})=>(
               <CollectionItem key={id} {...otherItemsProps} />
           ))
       }
        </div>
    </div>
)
export default CollectionPreview;