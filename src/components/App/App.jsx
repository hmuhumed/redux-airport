import React, { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import AirLineForm from '../AirLineForm/AirLineForm';
import AirLineList from '../AirLineList/AirLineList';

function App() {

  
  const reduxStore = useSelector(store => store);
  const dispatch = useDispatch();

  

  return (
    <div>
      <h1>Redux Airport</h1>

      <AirLineForm />
      <pre>{JSON.stringify(reduxStore)}</pre>
      <button onClick={() => dispatch({type: 'ADD_AIRLINE' , payload: 'Air Canada'})}>Add Airline</button>
      <button onClick={() => dispatch({type: 'ADD'})}>Add Airplane</button>
      <p>{reduxStore.count}</p>

      <AirLineList />


      
          
          
      
    </div>
  );
}

export default App;
