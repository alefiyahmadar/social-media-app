import { useContext } from "react"
import { MediaContext } from "../Contexts/contextProvider"

export const BookMark =()=>{


const { BookMark , setBookmark , DataPost } = useContext(MediaContext)

const getLatestPost = DataPost.slice(-4)


console.log(getLatestPost)

    return(<div className="explore-container" style={{backgroundColor:"red"}}>
        <p style={{margin:"0"}}>BookMark</p>

        {/* <div className="post-gallery">

        {getLatestPost.map((post, index) => (
        <div key={index} className={`post ${index < 2 ? 'top' : 'bottom'}`}>
          <img src={post.image} alt={`post ${index + 1}`} />
        </div>
      ))}




        </div> */}
    </div>)
}