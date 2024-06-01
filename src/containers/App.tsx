import './App.css';
import {ItemType} from '../types';

import colaImage from '../assets/cola.png';
import fantaImage from '../assets/fanta.png';
import spriteImage from '../assets/sprite.png';
import coffeeImage from '../assets/coffee.png';
import strawberryTeaImage from '../assets/strawberry-tea.png';
import iceTeaImage from '../assets/ice-tea.png';
import Item from '../components/Item/Item';


const Items: ItemType[] = [
  {name: 'Cola', price: 80, image: colaImage},
  {name: 'Fanta', price: 80, image: fantaImage},
  {name: 'Sprite', price: 80, image: spriteImage},
  {name: 'Coffee', price: 150, image: coffeeImage},
  {name: 'Strawberry tea', price: 120, image: strawberryTeaImage},
  {name: 'Ice tea', price: 100, image: iceTeaImage},
];
function App() {

  return (
    <div className="App">
      <div className="details-block">
        <h2>Order details:</h2>

      </div>
      <div className="items-block">
        <h2>Add items:</h2>
        {Items.map((item, index: number) => (
          <Item
            item={item}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
