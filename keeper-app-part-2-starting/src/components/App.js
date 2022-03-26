import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import getNotes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {getNotes()}
      <Footer />
    </div>
  );
}

export default App;
