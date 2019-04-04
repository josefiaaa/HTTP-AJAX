import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/Header';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';


class App extends Component {
  state= {
    friends: [],
    error:'',
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => {
      this.setState({ friends: res.data})
      console.log(res);
    })
    .catch(err => {
      this.setState({ error: err })
      console.log(err);
    })
  }

  addFriend = (event, friend) => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', friend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  deleteFriend = (event, id) => {
    event.preventDefault();
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data}))
      .catch(err => console.log(err))
  }

  updateFriend = (updatedFriend) => {
    axios.put(`http://localhost:5000/friends/${updatedFriend.id}`, updatedFriend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <FriendForm addFriend={this.addFriend} updateFriend={this.updateFriend}  />
        <FriendList friends={this.state.friends} deleteFriend={this.deleteFriend} />
      </div>
    );
  }
}

export default App;
