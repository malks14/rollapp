import { useState } from 'react';
import './App.css'
import AddOptionForm from './components/AddOptionForm/AddOptionForm';


function App() {
  const [options, setOptions] = useState([]);

  const handleAddOption = (option) => {
    setOptions([...options, option]);
  };

let lowestPriceIndex = null;
let lowestPricePerSquareMeter = Infinity;
let lowestPriceName = ""

options?.forEach((option, index) => {
  const totalArea = option.rolls * option.metersPerRoll;
  const pricePerSquareMeter = option.price / totalArea;
  console.log(option);
  if (pricePerSquareMeter < lowestPricePerSquareMeter) {
    lowestPriceIndex = index;
    lowestPricePerSquareMeter = pricePerSquareMeter;
    lowestPriceName = option.name
  }
});

console.log(lowestPricePerSquareMeter);

  return (
    <div className="App">
      <h1>Compara los papel higienico</h1>
      <AddOptionForm onAddOption={handleAddOption} />
      <p>Cantidad de rollos agregados: {options.length}</p>
      <p>Mejor precio es: ${(lowestPricePerSquareMeter*1000).toFixed(2)}</p>
      <p>El mas barato es: {lowestPriceName}</p>
    </div>
  )
}

export default App
