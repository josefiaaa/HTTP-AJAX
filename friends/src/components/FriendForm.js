import React from 'react';
import '../App.css';


class FriendForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friend: {
                name: '',
                age: '',
                email: '',
            }
        };
    }
    changeHandler = event => {
        event.persist();
        this.setState(prevState => ({ friend: {...prevState.friend,
            [event.target.name]: event.target.value}
        }))
    }
   
    handleSubmit = event => {
        event.preventDefault();
        this.props.addFriend(event, this.state.friend)
      this.setState({  
        friend: {
          name: '',
          age: '',
          email: ''
      } })
    }

  render() {
      return (
        <div className='newFriendForm'>
            <h2>Add New Friend</h2>
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={this.changeHandler}
                    placeholder="Name"
                    value={this.state.friend.name}
                />

                <input
                    type="number"
                    name="age"
                    onChange={this.changeHandler}
                    placeholder="Age"
                    value={this.state.friend.age}
                />


                <input
                    type="string"
                    name="email"
                    onChange={this.changeHandler}
                    placeholder="Email"
                    value={this.state.friend.email}
                />

                <button className='add' >Add New Friend</button>
            </form>
            
        </div>
      )
    }


}

export default FriendForm;