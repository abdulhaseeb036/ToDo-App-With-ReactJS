import React from 'react';
import './App.css';
import firebase from './config/firebaseConfig.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Typography, Button, Paper, Icon, Input, TextField, Grid } from '@material-ui/core';





/////////-------- CLASS COMPONENT ----------//////////////////
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      value: ''
    }
    firebase.database().ref('/').child('todos').set(this.state);
  };

  /////////-------- ADD TODO ----------//////////////////
  add_todo = () => {
    let obj = { title: this.state.value };
    firebase.database().ref('/').child('todos').push(obj);
    this.setState({
      todos: [...this.state.todos, obj],
      value: ''
    });
  }

  /////////-------- DELETE TODO ----------//////////////////
  deleteitem = (index) => {
    this.state.todos.splice(index, 1);
    this.setState({
      todos: this.state.todos
    })
  }

  /////////-------- DELETE ALL ----------//////////////////
  deleteAll = () => {
    this.state.todos.map((v, i) => {
      this.state.todos.splice(v);
    })
    this.setState({
      todos: this.state.todos
    })
  }
  /////////-------- UPDATE TODO ----------/////////////////////////////////
  edititem = (index, val) => {
    this.state.todos[index].edit = true;
    this.setState({
      todos: this.state.todos
    })
  }

  /////////-------- WHEN CLICK ON UPDATE BUTTON ----------//////////////////
  handlechange = (e, index) => {
    this.state.todos[index].title = e.target.value;
    this.setState({
      todos: this.state.todos
    })
  }
  /////////-------- UPDATED VALUE ----------//////////////////
  Updateuccess = (index) => {
    this.state.todos[index].edit = false;
    this.setState({
      todos: this.state.todos
    })
  }


  render() {
    let { todos, value } = this.state;

    return (
      <Box bgcolor="primary[20]" className="reactdiv">
        <div className="mainwrappper">
          <div className="wrapper">
            <Box boxShadow={15} borderRadius={8} className="card">
              <div className="row">
                <div className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 card-header container-fluid">
                  <Typography variant="h4">ToDo Web App</Typography>
                  <Typography variant="subtitle2">Time Is Money</Typography>
                </div>
              </div>

              <div className="card-body">
                <Grid direction="row" container>
                  <Grid item xs={7} sm={7} md={5} lg={3} xl={3}>
                    <TextField variant="outlined" color="secondary" className="inputaddtodo" component={Box} fullWidth id="outlined-secondary" label="Enter ToDo" onChange={(e) => this.setState({ value: e.target.value })} value={value} type="text" />
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={1} xl={1}>
                    <Icon title="Add New ToDo" component={Box} mt={2} style={{ fontSize: 30 }} onClick={this.add_todo}>library_add</Icon>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={1} xl={1}>
                    <Icon title="Delete All" component={Box} mt={2} style={{ fontSize: 30 }} onClick={this.deleteAll} className="deleteallbn">delete_forever</Icon>
                  </Grid>
                </Grid>
              </div>
            </Box>
          </div>
        </div>

        {todos.map((v, i) => {
          return <Box key={i} width={400} borderRadius={15} marginBottom={3} boxShadow={10} p={3} className="todolistmaindiv">
            <Paper key={i} component={Box} className="todolistpaper">
              <Grid container direction="row">
                <Grid component={Box} item xs={10} sm={10} md={10} lg={10} xl={10}>
                  {v.edit
                    ?
                    <TextField variant="outlined" id="outlined-secondary" color="secondary" className="inputaddtodo" label="Update" component={Box} type="text" onChange={(e) => this.handlechange(e, i)} />
                    :
                    <Typography className="todolistitem" align="justify" noWrap={false} variant="h6">{v.title}</Typography>
                  }
                </Grid>
              </Grid>
              <Grid container direction="row">
                <Grid component={Box} p={1} item xs={4} sm={3} md={3} lg={3} xl={3}>
                  {v.edit ? <Button className="update" color="primary" onClick={() => this.Updateuccess(i)}>Update</Button> : <Icon component={Box} style={{ fontSize: 30 }} className="editbut" title="Edit" onClick={() => this.edititem(i, v.title)}>create</Icon>}
                </Grid>
                <Grid component={Box} p={1} item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Icon title="Delete This List" className="dlbut" onClick={() => this.deleteitem(i)}>delete</Icon>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        })}
      </Box>
    )
  }
}

export default App;











