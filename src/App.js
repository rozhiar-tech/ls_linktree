import React from "react";

import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";

function App() {
  return (
    <div className="h-screen bg-brand-blue flex flex-col items-center">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
