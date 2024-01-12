import { useContext } from "react"
import { MediaContext } from "../Contexts/contextProvider"
import { PostCard } from "../cards/postCard"

export const ExplorePage =()=>{
const { DataPost , setPostData} = useContext(MediaContext)
console.log(DataPost)

    return(<div>
        <p style={{margin:"0"}}>ExplorePage</p>
        

      
{
    DataPost.map((e)=>< PostCard {...e}/>)
}
       
    </div>)
}