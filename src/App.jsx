import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import CardList from "./components/CardList.jsx";

function App() {
  return (
    <div className="bg-gradient-to-b from-green-50 from-10% via-green-300 via-30% to green-400">
      <Navbar />
      <CardList />

      <Footer />
    </div>
  );
}

export default App;
