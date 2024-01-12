import { useContext } from "react"
import { MediaContext } from "../Contexts/contextProvider"

export const PostCard = (post)=>{

const {
_id ,
content ,
likes ,  
username,
createdAt,
updatedAt,
comments}=post

const {GetSinglePost} = useContext(MediaContext)



    return(<div className="PostCard-container" onClick={()=>GetSinglePost(_id)} >

        <span>
        <img width="24" height="24" src="https://img.icons8.com/external-thin-kawalan-studio/24/external-user-circle-users-thin-kawalan-studio-2.png" alt="external-user-circle-users-thin-kawalan-studio-2"/>
        <h2>{username}</h2>
        </span>
       
        <p>{content}</p>

        <div className="overlay"></div>


<div className="image-overlay">
  
<span className="image1">
<img  width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/like--v1.png" alt="like--v1"/>13
</span>
<span  className="image2">  <img  width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/speech-bubble--v1.png" alt="speech-bubble--v1"/>10</span>


</div>

    </div>)


}