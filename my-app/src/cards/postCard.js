import { useContext, useState } from "react"
import { MediaContext } from "../Contexts/contextProvider"
import { useNavigate } from "react-router-dom"

export const PostCard = (post)=>{

const {
_id ,
content ,
likes ,  
username,
createdAt,
updatedAt,
comments , image , overlay}=post

const [More , setMore] = useState(false)

const {GetSinglePost , GetUsers , showSinglePost} = useContext(MediaContext)


const getProfile = GetUsers.find((e)=>e.username === username ? e.profileImg :null)


const url = window.location.href


const navigate = useNavigate()



    return(<div className="PostCard-container"   onClick={ url ==="http://localhost:3000/" ? null: ()=>GetSinglePost(_id)   } >

        <span>
       <div class="circle-image">
       <img width="30" height="30" src={getProfile.username === username ? getProfile.profileImg :""}/>

       </div>

        

        <h2 onClick={()=>navigate(`/user/${username}`)}>{username}</h2>
        </span>

        <img className="image" style={{ display: showSinglePost ? "none" :"block"}}   src={image}></img>
       
        <p style={{display:image ? "none" :"flex"}}>{content}</p>


{
     overlay &&   <div className="overlay"></div>
}
{
    overlay &&
<div className="image-overlay">
  
<span className="image1">
<img  width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/like--v1.png" alt="like--v1"/>13
</span>
<span  className="image2">  <img  width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/speech-bubble--v1.png" alt="speech-bubble--v1"/>10</span>


</div>
}

{
    overlay ||
<div className="homePgCmtBar">
<div className="commentImgs">
<img width="24" height="24" src="https://img.icons8.com/material-outlined/24/like--v1.png" alt="like--v1"/>
    <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/comments--v1.png" alt="comments--v1"/>
    <img width="24" height="24" src="https://img.icons8.com/ios-filled/24/share-3.png" alt="share-3"/>
    <img className="bookmarkHome" width="24" height="24" src="https://img.icons8.com/material-outlined/24/bookmark-ribbon--v1.png" alt="bookmark-ribbon--v1"/>

<span>
    <p className="pHome">{username}</p>
    <div className="homeParaContainer" style={{maxHeight:More ? "100%" :"2.5em"}} >
    <p >{content}</p>
    <button  className="readMoreBtn" onClick={()=>setMore(!More)}>{More ? "Less" :"More"}</button>
    </div>
</span>

<p className="cmtP" onClick={()=>GetSinglePost(_id)}>View all {comments.length} comments</p>
<div className="inputGrp">
<input className="cmtBarHome" placeholder="Add a comment..." / >
    <button className="PostCmtBtn">Post</button>
    </div>

</div>
</div>
}


    </div>)


}