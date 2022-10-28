import Header from "./component/Header";
import Hero from "./main/Hero";
import Footer from "./component/Footer";
import Content from "./main/content";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
