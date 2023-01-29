import React from 'react';

const ContactCard = (props) => {
  return (
    <div style={{border: '1px solid black', padding: '10px', margin: '10px'}}>
      <h3>{props.name}</h3>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
    </div>
  );
};

export default ContactCard;
