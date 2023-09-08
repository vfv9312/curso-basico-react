import './App.css';
import React from 'react';
import Form from './Componente';

const Comic = [
  { Titulo : 'Batman Return', excistencia : 5},
  { Titulo : 'Flastpoint', excistencia : 10},
  { Titulo : 'The Joker', excistencia : 11}
];

function App() {
  return (
<React.Fragment>
    <h1>Historietas</h1>
    {Comic.map((historieta)=>(//map recorreremos el array de objetos de comic
      //<Form historieta = {historieta}/> es lo mismo
      <Form {...historieta}/> //aqui enviamos los props todo los ... sirve para copiar uno por uno para clonar un array
        ))}

    
</React.Fragment>
  );
}

export default App;
