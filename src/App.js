import Header from "./component/Header";
import Footer from "./component/Footer";
import Content from "./main/Content";
import Tab from "./main/Tab";
import "./app.css";
import Table from "./main/Table";

import NavBar from "./component/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Content />
      <Tab />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
