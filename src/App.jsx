import "./routes/layout/layout.scss";
import Navbar from "./components/navbar/Navbar.jsx";
import HomePage from "./routes/homepage/homePage.jsx"
function App() {
  return (
    <div className="layout">
      <div className="navabr">
        <Navbar />
      </div>
      <div className="">
         <HomePage />
      </div>
     
    </div>
  );
}

export default App;
