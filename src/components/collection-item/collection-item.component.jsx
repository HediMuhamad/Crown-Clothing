import React from 'react';
import { connect } from 'react-redux';

import { addItemToCart } from '../../redux/cart/cart.action'

import './collection-item.styles.scss'

const CollectionItem = (props) => (
  <div className='collection-item'>
    <div className='image' style={{backgroundImage:`url(${props.imageUrl})`}}>
      <button className='add-to-cart-btn' onClick={()=>{props.addItemToCart(props.id)}}>ADD TO CART</button>
    </div>
    <div className='collection-footer'>
      <span className='name'>{props.name}</span>
      <span className='price'>${props.price}</span>
    </div>
  </div>
)

const mapDispatchToProps = dispatch => ({
    addItemToCart: itemID => dispatch(addItemToCart(itemID)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)