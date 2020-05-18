import React from "react";
 import SHOP_DATA from "../shop/shop-data"
 import CollectionPreview from "../../components/preview-collection/CollectionPreview";
class Shop extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Collection:SHOP_DATA
        }
    }
    render(){
        const {Collection}=this.state;
        return (
            <div className="shop-page">
           {Collection.map(({id,...otherCollectionProps}) =>(
               <div>
                   <CollectionPreview key={id}  {...otherCollectionProps}/>
               </div>

           ))}
            </div>
        )
    }
}export default Shop;