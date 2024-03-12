import React, {useState} from 'react'

const AddOptionForm = ({onAddOption}) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [rolls, setRolls] = useState('');
    const [metersPerRoll, setMetersPerRoll] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !price || !rolls || !metersPerRoll) return;
        const centimeters = metersPerRoll * 100;
        const option = {
          name,
          price,
          rolls,
          metersPerRoll: centimeters,
        };
        onAddOption(option);
        setName('');
        setPrice('');
        setRolls('');
        setMetersPerRoll('');
      };
    
  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar papel higienico</h2>
      <div>
        <label>Nombre:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Precio ($):</label>
        <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <label>Numero de rollos:</label>
        <input type="number" value={rolls} onChange={(e) => setRolls(e.target.value)} />
      </div>
      <div>
        <label>Metros por rollo:</label>
        <input type="number" value={metersPerRoll} onChange={(e) => setMetersPerRoll(e.target.value)} />
      </div>
      <button type="submit">Agregar papel</button>
    </form>
  );
}

export default AddOptionForm