import React from 'react';
import './App.css';
import InputText from './Components/InputText/InputText';

function App() {

  const [name, setName] = React.useState('');

  const handleName = (event: any) => {
    setName(event.target.value);
  }

  return (
    <>
      <div className="App">
        <InputText value={name} handlechange={handleName} />
        <div>
          {name}
        </div>
      </div>
    </>
  );
}

export default App;


