import React from 'react';
import './shop-page.styles.scss'
import SHOP_DATA from '../../assets/shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component{
    constructor(){;
        super();
        this.state={collections:SHOP_DATA}
    }

    render(){
        const {collections} = this.state;
        return(
            <div className='shop-page'>{
                collections.map(({id, ...others})=>{
                    return <CollectionPreview key={id} {...others} />
                })
            }</div>
        )
    }
}

export default ShopPage;