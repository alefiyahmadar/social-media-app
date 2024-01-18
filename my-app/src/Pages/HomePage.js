import { useContext } from "react"
import { MediaContext } from "../Contexts/contextProvider"
import { PostCard } from "../cards/postCard"
import { SinglePostCard } from "../cards/singlePostCard"
import { users } from "../backend/db/users"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export const HomePage = () => {

    const { showSinglePost, SinglePost, setShowSinglePost , user ,GetUsers} = useContext(MediaContext)

    const { DataPost } = useContext(MediaContext)
    console.log(users)

    useEffect(() => {
        window.scrollTo(0, 0); // For modern browsers
        document.documentElement.scrollTop = 0; // For older browsers
      }, []);

      const navigate = useNavigate()

    return (<div className="explore-container">

       

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
        <h5 className="linkH2" onClick={()=>navigate(`/user/${e.username}` )}  >{e.username}</h5>
        
        

        <button>Follow</button>
        
        </span>

                
            </li>)
        }
</ul>
       
        </div>
        

        <div className="PopUpSinglePost" style={{ display: showSinglePost  ? "flex" : "none" }}>

            
        <img onClick={()=>setShowSinglePost(false)} style={{display: window.innerWidth > 430 ? showSinglePost ? "block" :"none" :"none" , position:"absolute" , right:"0"}} className="cross" width="24" height="24" src="https://img.icons8.com/material-outlined/24/multiply--v1.png" alt="multiply--v1"/>
            {

                SinglePost.map((e) => <SinglePostCard {...e} />)
            }</div>
            
        

        {
            DataPost.map((e) => <PostCard {...e} />)
        }
        


    </div>)
}