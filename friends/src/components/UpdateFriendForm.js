import React from 'react';

class UpdateFriendForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friend: this.props.activeFriend || {
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
                    placeholder="name"
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

                <button>Update Friend Info</button>
            </form>
        </div>
      )
    }


}

export default UpdateFriendForm;