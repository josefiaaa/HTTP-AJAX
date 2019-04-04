import React from 'react';
import '../App.css';


const Friend = props => {
    return(
        <div className="friendCard">
            <div className='deleteCont'>
                <button className='delete' onClick={event => props.deleteFriend(event, props.friend.id)}>X</button>
            </div>
            <h2 className='friendName'>{props.friend.name}</h2>
            <div className='info'>
                <h4 className='email'>Email: {props.friend.email}</h4>
                <h4 className='age'> Age: {props.friend.age}</h4>
                <button className='update'>Update Info</button>
                
            </div>
        </div>
    )
}

export default Friend;