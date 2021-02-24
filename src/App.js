import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { findByLabelText } from '@testing-library/react';

function App() {
  const friends = ['jhon', 'mary', 'jack', 'jeffry'];
  const softwers=[
    {name: 'photoshop', price: '$90.12'},
    {name: 'After Effect', price: '$2.012'},
    {name: 'adobe xd', price: '$50.23'}
  ]

  return (
    <div className="App">
      <header className="App-header">

      <Counter></Counter>
      <Users></Users>
      <ul>
        {
          friends.map(friend => <li>{friend}</li>)
        }
      </ul>

      {
        softwers.map(item => <Softwer soft={item}></Softwer>)
      }
       
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(1)
  const btnHandlerPlus = () =>{
     const  newcount = count + 1;
     setCount(newcount)     
  }

  const btnHandlerMinus = () =>{
    const  newcount = count - 1;
    setCount(newcount)     
 }

   return (
     <div>
       <h1>Count: {count}</h1>
       <button onClick={btnHandlerPlus}>&#10010;</button>
       <button onClick={btnHandlerMinus}>&#9866;</button>
     </div>
   )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return(
    <div>
      <h1>Dynamic Users: {users.length}</h1>
      <ul>
      {
        users.map(user =>  <li>{user.name}</li> )
      }
      </ul>
    </div> 
  )
}


function Softwer(props){
 const personStyle ={
   backgroundColor: 'salmon',
   padding: '10px 10px',
   width: '200px',
   height: '200px',
   marginTop: '10px',
   float: 'left'
 }

 const {name, price} = props.soft;
 
  return ( 
    <div style={personStyle}>
          <h2>{name}</h2>
          <h5>{price}</h5>
          <button>Buy now</button>
 

    </div>
 )   

 
}

export default App;
