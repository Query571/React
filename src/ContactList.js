import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  return (
    <div>
      {props.contacts.map((contact, index) => (
        <ContactCard
          key={index}
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
};

export default ContactList;