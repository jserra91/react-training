import React from 'react';
import './App.css';
import InputText from './Components/InputText/InputText';

function App() {
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [list, setList] = React.useState([]);

  const handleName = (value: any) => {
    setName(value);
  }

  const handleSurname = (value: any) => {
    setSurname(value);
  }

  const onSubmit = (event: any) => {
    event.preventDefault();
    const auxList = [
      ...list,
      {
        name: name,
        surname: surname
      }
    ];
    setList(auxList as []);
    setName('');
    setSurname('');
  }

  return (
    <>
      <div className="App">
        <form onSubmit={onSubmit}>
          <div>
            <InputText label="Name" value={name} handlechange={handleName} />
          </div>
          <div>
            <InputText label="Surname" value={surname} handlechange={handleSurname} />
          </div>
          <div>
            <button type="submit">Send data</button>
          </div>
        </form>
        <div>
          {
            list.map((value: any, index: number) => {
              return (
                <div>
                  <div>Name: {value.name}</div>
                  <div>Surname: {value.surname}</div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;


