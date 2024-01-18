import { useContext } from "react"
import { MediaContext } from "../Contexts/contextProvider"
import { PostCard } from "../cards/postCard"
import { SinglePostCard } from "../cards/singlePostCard"
import { useEffect } from "react"

export const ExplorePage =()=>{
const { DataPost , setPostData , showSinglePost , setShowSinglePost , SinglePost , GetUsers} = useContext(MediaContext)
console.log(DataPost)
console.log(SinglePost)

useEffect(() => {
    window.scrollTo(0, 0); 
    document.documentElement.scrollTop = 0; 
  }, []);

    return(<div className="explore-container">
       
    
    <div className="PopUpSinglePost" style={{  display:showSinglePost ? "flex" : "none"}}>

        
    <img onClick={()=>setShowSinglePost(false)} style={{display:showSinglePost ? "block" :"none" , position:"absolute" , right:"0"}} className="cross" width="24" height="24" src="https://img.icons8.com/material-outlined/24/multiply--v1.png" alt="multiply--v1"/>
        {

        SinglePost.map((e)=><SinglePostCard {...e}/>)
    }</div>
<div className="image-grid">
    {
        DataPost.map((e)=>
            <img className="image-item"  src={e.image} alt=""></img>
        )
    }
    </div>

    <div style={{display:window.innerWidth < 430 ? "none" :"" }}>

    {
    DataPost.map((e)=>< PostCard {...e} overlay/>)
}
    </div>
      



       
    </div>)
}