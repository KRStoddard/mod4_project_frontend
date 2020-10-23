import React from 'react';
import '../App.css';
import Login from './Login'
import { Switch, Route } from 'react-router-dom'
import Notes from './Notes'
import Header from './Header'
import ShowNote from './ShowNote'
import EditNote from './EditNote'
import DeleteNote from './DeleteNote'
import NewNote from './NewNote'
import NewAccount from './NewAccount'

const App = () => {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/notes' component={Notes} />
        <Route path='/login' component={Login}/>
        <Route path='/notes/edit/:id' render={(props) => <EditNote {...props}/>}/>
        <Route path='/notes/delete/:id' render={(props) => <DeleteNote {...props}/>}/>
        <Route path='/notes/new' component={NewNote}/>
        <Route path='/newaccount' component={NewAccount}/>
        <Route path='/notes/:id' component={ShowNote} />
      </Switch>
    </div>
  )
}

export default App;
