//import { Component } from 'react';

import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'; 


const App = () => {
  console.log('render');
  const [searchInput, setSearchInput] = useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(()=>{
    console.log('effect')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(users => setMonsters(users)
    );
  },[]);



  const onSearchChange = (event) => {
    const searchInputText = event.target.value.toLocaleLowerCase();   
    setSearchInput(searchInputText);
  }
  const filteredMonster = monsters.filter((monster) => {
    return  monster.name.toLocaleLowerCase().includes(searchInput);
  });  

  return(
    <div className="App">
      <h1>This is monster rolodex App</h1>
      <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder='search monsters'/>
      <CardList monsters={filteredMonster}/>
    </div>
  )
}


// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       monsters: [],
//       searchInput: ''
//     };
//   }
//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then(users => {
//         this.setState(() => {
//           return {monsters: users}
//         })
//       })
//   }
//   onSearchChange = (event) => {
//     const searchInput = event.target.value.toLocaleLowerCase();   
//     this.setState(()=>{
//       return {searchInput};
//     })
//   }

//   render(){
//     const {monsters, searchInput} = this.state;
//     const onSearchChange = this.onSearchChange;

//     const filteredMonster = monsters.filter((monster) => {
//       return  monster.name.toLocaleLowerCase().includes(searchInput);
//     });

//     return ( 
//       <div className="App">
//         <h1>This is monster rolodex App</h1>
//         <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder='search monsters'/>
//         <CardList monsters={filteredMonster}/>
//       </div>
//     );
//   }
// }

export default App;
