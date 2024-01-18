import { useContext } from "react"
import { MediaContext } from "../Contexts/contextProvider"
import { useNavigate } from "react-router-dom"

export const SinglePostCard = (post) => {


    const {
        _id,
        content,
        likes,
        username,
        createdAt,
        updatedAt,
        comments, image } = post

    const { GetUsers , showSinglePost , setShowSinglePost } = useContext(MediaContext)
    console.log(GetUsers)
    
    const navigate = useNavigate()
    const getLocation = window.location.href
    console.log(getLocation)


    const getProfile = GetUsers.find((e) => e.username === username ? e.profileImg : null)

    return (<div className="popUpContainer" >

        

        <img className="singlePostImg" style={{ display: image ? "flex" : "none"  }} src={image} alt="" />

        <div className="singlePostInfo">

            <span className="singlePostSpan" >

                <div class="circle-image">
                    <img src={getProfile.username === username ? getProfile.profileImg : ""} />
                </div>
                <h2 className="linkH2" onClick={()=>navigate(`/user/${username}` )}>{username}</h2>

            </span>

            <div className="scrollable-div">
<span>
<div class="circle-image">
                    <img src={getProfile.username === username ? getProfile.profileImg : ""} />
                </div>
<p className="para"> <b>{username}</b> {content}</p>

</span>


                
                <ul className="content-list">
                {
                    comments.map(({_id , username,text})=>{

                        const getCmtImg = GetUsers.find((e) => e.username === username ? e.profileImg : null)
                        console.log(getCmtImg)
                    
                    return(<li key={_id}>
                        
                        <span >

                <div class="circle-image">
                    <img src={getCmtImg.username === username ? getCmtImg.profileImg : ""} />
                </div>
                <h3>{username}</h3>
                
            </span>
            <p className="text">{text}</p>
                        
                    </li>)})
                }
                </ul>
                

            </div>




<div className="commentBar">


    <div className="commentImgs">

    <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/like--v1.png" alt="like--v1"/>
    <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/comments--v1.png" alt="comments--v1"/>
    <img width="24" height="24" src="https://img.icons8.com/ios-filled/24/share-3.png" alt="share-3"/>
    <img className="bookmark" width="24" height="24" src="https://img.icons8.com/material-outlined/24/bookmark-ribbon--v1.png" alt="bookmark-ribbon--v1"/>

    </div>
    <div className="addComment">
        <input placeholder="Add a comment..."/>
        <button className="PostCmtBtn">post</button>
    </div>
</div>

        </div>
       


    </div>)


}