import "./App.css";
import {Routes , Route , NavLink} from "react-router-dom"
import { HomePage } from "./Pages/HomePage";
import { ExplorePage } from "./Pages/ExplorePage";
import { BookMark } from "./Pages/BookMark";
import { useContext } from "react";
import { MediaContext} from "./Contexts/contextProvider"


function App() {

  
  return (

    
    <div className="App">

      <nav className="nav">
        <NavLink to="/"><span><img width="24" height="24" src="https://img.icons8.com/material-sharp/24/home.png" alt="home"/>Home</span></NavLink>
        <NavLink to="/explore"><span><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/compass.png" alt="compass"/>Explore</span></NavLink>
        <NavLink to="/bookmark"><span><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/bookmark-ribbon--v1.png" alt="bookmark-ribbon--v1"/>Bookmark</span></NavLink>
        

      </nav>

      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/Bookmark" element={<BookMark/>}></Route>
        <Route path="/explore" element={<ExplorePage/>} ></Route>
      </Routes>
      
       
       
         
    </div>
  );
}

export default App;
