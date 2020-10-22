import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import firebase from './config/firebase.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Box, Typography, Button, Icon, Input, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
  }
}));




// class component
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      value: ''
    }
  };

  // Add ToDo 
  add_todo = () => {
    let obj = { title: this.state.value };
    firebase.database().ref('/').child('todos').push(obj);
    this.setState({
      todos: [...this.state.todos, obj],
      value: ''
    });
  }

  // Delete ToDo 
  deleteitem = (index) => {
    this.state.todos.splice(index, 1);
    this.setState({
      todos: this.state.todos
    })
  }

  // Update ToDo
  edititem = (index, val) => {
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


  // Delete ALL
  deleteAll = () => {
    this.state.todos.map((v, i) => {
      this.state.todos.splice(v);
    })
    this.setState({
      todos: this.state.todos
    })
  }




  // Update ToDo
  handlechange = (e, index) => {

    this.state.todos[index].title = e.target.value;
    this.setState({
      todos: this.state.todos
    })
  }

  Updateuccess = (index) => {
    this.state.todos[index].edit = false;
    this.setState({
      todos: this.state.todos
    })
  }


  render() {
    // Some JavaScript In Render
    let { todos, value } = this.state;
    const classes = useStyles;

    return (
      // In ReTurn We write JSX
      <Box bgcolor="primary[20]" className="reactdiv">
        <div className="mainwrappper">
          <div className="wrapper">
            <Box boxShadow={15} borderRadius={8} className="card">
               
              <div className="row">
                <div className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 card-header container-fluid">
                  <Typography variant="h4">ToDo Web App</Typography> 
                  <Typography variant="subtitle2">Time Is Money</Typography> 
                </div>   {/*col /> */}
              </div> {/*row /> */}
            
             
              <div className="card-body">
                          
                <div className="row">
                  <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <TextField variant="outlined" color="secondary" className="inputaddtodo" component={Box} fullWidth id="outlined-secondary" label="Enter ToDo" onChange={(e) => this.setState({ value: e.target.value })} value={value} type="text" />
                  </div>
                  <div align="left"  className="col-2 col-sm-2 col-md-3 col-lg-2 col-xl-2">
                    <Icon component={Box} mt={2} fullWidth style={{fontSize: 30}} onClick={this.add_todo}>library_add</Icon>
                    
                  </div>
                  <div align="left" className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                    <Icon component={Box} mt={2} style={{fontSize: 30}} onClick={this.deleteAll} className="deleteallbn">delete_forever</Icon>
                  </div>
                </div>
            
              </div>
            </Box>
          </div>
        </div>

      {todos.map((v, i) => {
        return  <Box width={300} marginBottom={3} boxShadow={10} p={3} className="todolistmaindiv">
        <ul key={i} id="ul">

          <li key={i} className="li">
            {v.edit ? <input type="text" onChange={(e) => this.handlechange(e, i)} /> : v.title}
            {v.edit ? <Button className="update" onClick={() => this.Updateuccess(i)}>Update</Button> : <Icon component={Box} marginTop={10} style={{fontSize: 30}}className="editbut" color="primary" onClick={() => this.edititem(i, v.title)}>create</Icon>}
            <Button color="secondary" className="dlbut" onClick={() => this.deleteitem(i)}>Delete</Button>
          </li>
        </ul>
        </Box>
  })}

      </Box>
    )



  }

}

export default App;











