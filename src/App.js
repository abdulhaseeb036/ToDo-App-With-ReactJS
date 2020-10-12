import React from 'react';
import './App.css';



class App extends React.Component {
  constructor() {
    super()
    this.state =  {
      todos: [{title: "", edit: false}, {title: "", edit: false}],
      value: ''
    }
  };
  
  add_todo = () =>  {
    let obj = {title: this.state.value}; 
    this.setState({ 
      todos: [...this.state.todos,obj],
      value: ''   
  });
 }
  
 deleteitem = (index) => {
        this.state.todos.splice(index, 1);
        this.setState({
          todos: this.state.todos
        })
 }

 edititem = (index) => {
   this.state.todos[index].edit = true;
   this.setState({
     todos: this.state.todos
   })



  //  var newedit = prompt("Enter ToDo");
  //  this.state.todos[index] = newedit
  //  this.setState({
  //    todos: this.state.todos
  //  });
 }

 handlechange = (e, index) => {
      console.log(this.state.todos);
  //  console.log(this.state.todos[index].title);
   this.state.todos[index].title = e.target.value;
   this.setState({
     todos: this.state.todos
   }) 
 }

 
  render() {
    let {todos, value} = this.state;
    return (
      <div>
        <input onChange={(e)=> this.setState ({value: e.target.value})} value={value} placeholder="Enter ToDo" type="text"/>
        <button onClick={this.add_todo} className="additembn" >Add Item</button>
        <ul>
          {todos.map((v,i)=>{         
          return <li key={i}>
            {v.edit? <input type="text" onChange={(e) => this.handlechange(i)} /> : v.title}
            <button className="dlbut" onClick={() => this.deleteitem(i)}>Delete</button> 
          {v.edit? <button className="update">Update</button> : <button className="editbut" onClick={() => this.edititem(i)}>Edit</button>}
          </li>
          })}
        </ul>
        
      </div>

    )
  }

}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
