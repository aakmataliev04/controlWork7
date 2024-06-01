import React from 'react';
import {ItemStateType} from '../../types';
import './OrderItem.css';


interface OrderItemProps {
  item: ItemStateType
  deleteOrderItem: React.MouseEventHandler
  index: number
}

const OrderItem: React.FC<OrderItemProps> = ({item, deleteOrderItem, index}) => {
  return (
    <div className={'orderItem'} key={index}>
      <div><b>{item.name}</b></div>
      <div>x{item.amount}</div>
      <div>{item.price} KGS</div>
      <button className={'orderItem-delete'} onClick={deleteOrderItem}></button>
    </div>
  );
};

export default OrderItem;