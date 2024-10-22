import React from 'react';
import { ItemType } from '../../types';
import './Item.css';

interface ItemProps {
  item: ItemType;
  addItems: React.MouseEventHandler;
}

const Item: React.FC<ItemProps> = ({ item, addItems }) => {
  return (
    <div className={'item'} onClick={addItems}>
      <div className={'item-info'}>
        <img className={'item-img'} src={item.image} alt={item.image} />
        <div className={'item-name'}>{item.name}</div>
      </div>
      <div className={'item-price'}>Price: {item.price} KGS</div>
    </div>
  );
};

export default Item;
