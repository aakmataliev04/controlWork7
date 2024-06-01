import './App.css';
import {ItemStateType, ItemType} from '../types';

import colaImage from '../assets/cola.png';
import fantaImage from '../assets/fanta.png';
import spriteImage from '../assets/sprite.png';
import coffeeImage from '../assets/coffee.png';
import strawberryTeaImage from '../assets/strawberry-tea.png';
import iceTeaImage from '../assets/ice-tea.png';
import Item from '../components/Item/Item';

import {useState} from 'react';
import OrderItem from '../components/OrderItem/OrderItem';


const Items: ItemType[] = [
  {name: 'Cola', price: 80, image: colaImage},
  {name: 'Fanta', price: 80, image: fantaImage},
  {name: 'Sprite', price: 80, image: spriteImage},
  {name: 'Coffee', price: 150, image: coffeeImage},
  {name: 'Strawberry tea', price: 120, image: strawberryTeaImage},
  {name: 'Ice tea', price: 100, image: iceTeaImage},
];
function App() {

  const [itemsAmount, setItemsAmount] = useState<ItemStateType[]>([
    {name: 'Cola', price: 80, amount: 0},
    {name: 'Fanta', price: 80, amount: 0},
    {name: 'Sprite', price: 80, amount: 0},
    {name: 'Coffee', price: 150, amount: 0},
    {name: 'Strawberry tea', price: 120, amount: 0},
    {name: 'Ice tea', price: 100, amount: 0},
  ]);

  const addItems = (index: number) => {
    setItemsAmount((prevOrderState) => {
      prevOrderState[index].amount += 1;
      return [...prevOrderState];
      });
  };

  return (
    <div className="App">
      <div className="details-block">
        <h2>Order details:</h2>
        {itemsAmount.map((item, index) => {
          if (item.amount > 0) {
            return (
              <OrderItem key={index} item={item} index={index}/>
            );
          }
        })}
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
