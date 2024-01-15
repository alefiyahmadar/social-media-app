import { useContext } from "react"
import { MediaContext } from "../Contexts/contextProvider"
import { PostCard } from "../cards/postCard"
import { SinglePostCard } from "../cards/singlePostCard"
import { users } from "../backend/db/users"


export const HomePage = () => {

    const { showSinglePost, SinglePost, setShowSinglePost , user ,GetUsers} = useContext(MediaContext)

    const { DataPost } = useContext(MediaContext)
    console.log(users)

    return (<div className="explore-container">

        <img onClick={() => setShowSinglePost(false)} style={{ display: showSinglePost ? "flex" : "none" }} className="cross" width="24" height="24" src="https://img.icons8.com/material-outlined/24/multiply--v1.png" alt="multiply--v1" />

        <div className="suggestBox">

        <span >
       <div class="circle-image">
       <img width="30" height="30" src={user.profileImg}/>
       </div>
        <h2  >{user.username}</h2>
        <p>{user.firstName} {user.lastName}</p>
        </span>
        <h4>Suggested for you</h4>
<ul className="suggestUl">

{
            users.map((e)=><li style={{display: user.username === e.username ? "none" :"flex"}}>

<span >
       <div class="circle-image">
       <img width="30" height="30" src={e.profileImg}/>
       </div>
        <h5  >{e.username}</h5>
        
        

        <button>Follow</button>
        
        </span>

                
            </li>)
        }
</ul>
       
        </div>

        <div className="PopUpSinglePost" style={{ display: showSinglePost ? "flex" : "none" }}>
            {

                SinglePost.map((e) => <SinglePostCard {...e} />)
            }</div>

        {
            DataPost.map((e) => <PostCard {...e} />)
        }


    </div>)
}