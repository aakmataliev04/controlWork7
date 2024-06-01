import React from 'react';
import {ItemStateType} from '../../types';
import './OrderItem.css';


interface OrderItemProps {
  item: ItemStateType
  index: number
}
const OrderItem: React.FC<OrderItemProps> = ({item, index}) => {
  return (
    <div className={'orderItem'} key={index}>
      <div>{item.name}</div>
      <div>x{item.amount}</div>
      <div>{item.price} KGS</div>
      <button className={'orderItem-delete'}></button>
    </div>
  );
};

export default OrderItem;