import "./App.css";
import {Routes , Route , NavLink} from "react-router-dom"
import { HomePage } from "./Pages/HomePage";
import { ExplorePage } from "./Pages/ExplorePage";
import { BookMark } from "./Pages/BookMark";
import { useContext } from "react";
import { MediaContext} from "./Contexts/contextProvider"
import { UserPage } from "./cards/userPage";
import { useState , useRef } from "react";


function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);


  const {setShowSinglePost ,  showSinglePost , user} = useContext(MediaContext)

  const HandleImgChange =(e)=>{

    const file = e.target.files[0]

    if(file){

      setSelectedImage(file)
    }
  }

  
  return (

    
    <div className="App"    style={{   backgroundColor:showSinglePost  ?"rgba(0, 0, 0, 0.3)" :"" , position:showSinglePost ? "fixed" :""}}>
      

      <nav className="nav">

      
        <NavLink to="/"><span><img width="24" height="24" src="https://img.icons8.com/material-sharp/24/home.png" alt="home"/>Home</span></NavLink>
        <NavLink to="/explore"><span><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/compass.png" alt="compass"/>Explore</span></NavLink>
        <NavLink to="/bookmark"><span><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/bookmark-ribbon--v1.png" alt="bookmark-ribbon--v1"/>Bookmark</span></NavLink>
        <NavLink onClick={()=>console.log("create")}><span><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/add.png" alt="add"/>Create</span></NavLink>
        

      </nav>

      <div className="createDivContainer">
        <span className="pCreate">Create new post <button>Share</button></span>
        <div className="imgUpload">

          <input 
          type="file"
          accept="image/*"
          onChange={HandleImgChange}
          style={{display:"none"}}
          ref={fileInputRef}/>

          <button onClick={() => fileInputRef.current.click()}>Upload image</button>

          {selectedImage && (
        <div>
          <p>Selected Image:</p>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
          
        </div>
      )}



          
        </div>

        <div className="postUpload">


        <span className="spanCreate" >
       <div class="circle-image" >
       <img width="30" height="30" src={user.profileImg}/>
      
       </div>
        <h3>{user.username}</h3>
        
        </span>

        <textarea  placeholder="Write a caption..."/>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/Bookmark" element={<BookMark/>}></Route>
        <Route path="/explore" element={<ExplorePage/>} ></Route>
        <Route path="/user/:usernameId" element={<UserPage/>}></Route>
      </Routes>
      
       
       
         
    </div>
  );
}

export default App;
       
