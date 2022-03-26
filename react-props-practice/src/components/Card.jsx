import React from 'react';
import { Avatar } from './Avatar';
export const Card = (props) => {
    return (
      <div className="card" id={ props.key}>
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar image={props.image} />
        </div>
        <div className="bottom">
          <p className="info">{props.number}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    );
}
