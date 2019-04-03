import React from 'react';
import '../App.css';


const Friend = props => {
    return(
        <div className="friendCard">
            <h3 className='friendName'>{props.friend.name}</h3>
            <div className='info'>
                <h4 className='email'>Email: {props.friend.email}</h4>
                <h4 className='age'> Age: {props.friend.age}</h4>
            </div>
        </div>
    )
}

export default Friend;