import Header from "./component/Header";
import Footer from "./component/Footer";
import Content from "./main/content";
import Tab from "./main/tab";
import "./app.css";
import Table from "./main/Table";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Tab />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
