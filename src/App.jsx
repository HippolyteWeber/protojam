import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx"
import CardListDetails from "./components/CardList.jsx";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <CardListDetails />
      
      <Footer />
    </>
  );
}

export default App;
