import React from 'react';
import logo from './logo.svg';
import './App.css';

// const products = [
//   {name: 'arafat', age:20},
//   {name: 'kabir', age:19},
//   {name: 'khan', age:18},
//   {name: 'nahar', age:15}
  
// ];
const friends = [
  {name:'arafat', roll:20},
  {name:'abrar', roll:21},
  {name:'dneha', roll:22},
  {name:'nahar', roll:23},
  {name: 'baz', roll: 16}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {
          friends.map (parameter => <Kabir attribute = {parameter.name} attribute2 = {parameter.roll}></Kabir>)
        }





        {/* <ul>
          {
            products.map(parameter => <li>{parameter.name}</li>)
          }
        </ul>
        <ul>
          {
            products.map(parameter => <Person attribute = {parameter.age}></Person>)
          }       
        </ul> */}
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click this to Learn React
        </a>
      </header>
    </div>
  );
}
function Kabir (props){
  const funcStyle ={
    border : '2px solid violet',
    margin : '10px',
    padding : '0px 0px 5px 0px',
    borderRadius : '5px',
    width : '400px',
    height : '260px'
  }
  return(
    <div style={funcStyle}>
      <h1>Hello</h1>
      <h3>My name is {props.attribute}</h3>
      <h4> My id is {props.attribute2}</h4>
    </div>
  )
}














// function Person(props){
//   const personStyle = {
//     border : '2px solid red',
//     margin : '10px'
//   }
//   return (
//     <div style={personStyle}>
//       <h1>{props.attribute}</h1>
//       <h4>idk why this isn't working</h4>
//     </div>
//   )
// }



export default App;
