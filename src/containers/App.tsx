import {useState} from 'react';
import Item from '../components/Item/Item';
import OrderItem from '../components/OrderItem/OrderItem';
import OrderPriceCounter from '../components/OrderPriceCounter/OrderPriceCounter';
import './App.css';
import {ItemStateType, ItemType} from '../types';

import colaImage from '../assets/cola.png';
import fantaImage from '../assets/fanta.png';
import spriteImage from '../assets/sprite.png';
import coffeeImage from '../assets/coffee.png';
import fruitTea from '../assets/strawberry-tea.png';
import iceTeaImage from '../assets/ice-tea.png';


const Items: ItemType[] = [
  {name: 'Cola', price: 80, image: colaImage},
  {name: 'Fanta', price: 80, image: fantaImage},
  {name: 'Sprite', price: 80, image: spriteImage},
  {name: 'Coffee', price: 150, image: coffeeImage},
  {name: 'Fruit Tea', price: 120, image: fruitTea},
  {name: 'Ice tea', price: 100, image: iceTeaImage},

];

function App() {

  const [itemsAmount, setItemsAmount] = useState<ItemStateType[]>([
    {name: 'Cola', price: 80, amount: 0},
    {name: 'Fanta', price: 80, amount: 0},
    {name: 'Sprite', price: 80, amount: 0},
    {name: 'Coffee', price: 150, amount: 0},
    {name: 'Fruit Tea', price: 120, amount: 0},
    {name: 'Ice tea', price: 100, amount: 0},
  ]);
  const [orderPrice, setOrderPrice] = useState(0);

  const addItems = (index: number) => {

    setItemsAmount((prevOrderState) => {
      prevOrderState[index].amount += 1;
      return [...prevOrderState];
    });

    setOrderPrice(() => {
      let initialPrice = 0;
      itemsAmount.map((item) => {
        if (item.amount > 0) {
          initialPrice += item.amount * item.price;
        }
      });
      return initialPrice;
    });
  };

  const deleteOrderItem = (index: number) => {
    setItemsAmount((prevOrderState) => {
      const copyPrevOrderState = prevOrderState;
      copyPrevOrderState[index].amount = 0;
      return [...copyPrevOrderState];
    });

    setOrderPrice(() => {
      let initialPrice = 0;
      itemsAmount.map((item) => {
        if (item.amount > 0) {
          initialPrice += item.amount * item.price;
        }
      });
      return initialPrice;
    });
  };

  const orderList = itemsAmount.map((item, index) => {
    if (item.amount > 0) {
      return (
        <OrderItem key={index} item={item} index={index} deleteOrderItem={() => deleteOrderItem(index)}/>
      );
    }
  });

  return (
    <div className="App">
      <div className="details-block">
        <h2>Order details:</h2>
        {
          orderPrice > 0 ? orderList : (
            <div className={'emptyOrder'}>
              <h3>Order is empty!</h3>
              <h3>Please add some items!</h3>
            </div>
          )
        }
        <OrderPriceCounter orderPrice={orderPrice}/>
      </div>
      <div className="items-block">
        <h2>Add items:</h2>
        {Items.map((item, index: number) => (
          <Item
            key={index}
            item={item}
            addItems={() => addItems(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
