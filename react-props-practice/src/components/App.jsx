import React from "react";
import contacts from "../contacts";
import { Card } from "./Card";

const App = () => {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(getCardElement)}
    </div>
  );
}

const getCardElement = (details) => <Card key={details.id} name={details.name} image={details.imgURL} number={details.phone} email={details.email} /> ;

export default App;
