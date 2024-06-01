import React from 'react';
import './OrderPriceCounter.css';

interface Props {
  orderPrice: number;
}

const OrderPriceCounter: React.FC<Props> = ({orderPrice}) => {
  if (orderPrice > 0) {
    return (
      <div className={'orderPriceCounter'}>
        Total price: <b>{orderPrice} KGS</b>
      </div>
    );
  }
};

export default OrderPriceCounter;