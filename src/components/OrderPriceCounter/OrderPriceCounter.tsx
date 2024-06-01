import React from 'react';
interface Props {
  orderPrice: number;
}
const OrderPriceCounter: React.FC<Props> = ({orderPrice}) => {
  if (orderPrice > 0) {
    return (
      <div className={'orderPriceCounter'}>
        Total price: {orderPrice} <b> KGS</b>
      </div>
    );
  }
};

export default OrderPriceCounter;