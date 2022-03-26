import React from "react";
import emojipedia from "../emojipedia";
import { Details } from "./Details";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(getDetails)}
      </dl>
    </div>
  );
}

const getDetails = (emoji) => <Details emoji={emoji.emoji} key={emoji.id} meaning={emoji.meaning} name={ emoji.name}/>

export default App;
