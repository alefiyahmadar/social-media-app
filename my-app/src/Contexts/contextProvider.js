
import { createContext, useContext, useEffect, useState } from "react"
import { users } from "../backend/db/users"
import { v4 as uuid } from "uuid";
import { formatDate } from "../backend/utils/authUtils";


export const MediaContext = createContext()

export const ContextProvider = ({ children }) => {



    


    const [DataPost, setPostData] = useState([])
    const[GetNewArray , setNewArray] = useState([])
    const [SinglePost, setSinglePost] = useState([])
    const [showSinglePost, setShowSinglePost] = useState(false)
    const [GetUsers, SetUsersArr] = useState(users)
    const [showCreateDiv , setCreateDiv] = useState(false)
    const [BookMark , setBookmark] = useState([])
    const [showSaved , setShowSaved ] = useState(false)
    const [getCmtBarMob , setCmtMob ]=useState(false)
    const [showPost , setPost] = useState(false)
    const [user , setUser] = useState( {
        _id: uuid(),
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        password: "adarshBalika123",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        profileImg:"https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
      })
      



    const FetchData = async () => {

        const getData = (await fetch("/api/posts"))
        const PostData = await getData.json()

        setPostData(PostData.posts)

        localStorage.setItem("userArray", JSON.stringify(users))

    }

    useEffect(() => {
        FetchData()
    }, [])

    const GetSinglePost = (id) => {

  const findPost = DataPost.find((e) => e._id === id)

        setSinglePost([findPost])
        setShowSinglePost(true)
        setCmtMob(true)


    }

    const GetExploreScroll = (id)=>{

        setPost(true)

        const getPost = DataPost.find((e)=>e._id === id)
        
        const getOtherPost = DataPost.filter((e)=>e._id !== id)
          const NewArray = [getPost , ...getOtherPost]
          setNewArray(NewArray)
            
    
    }
    
    


    return (<MediaContext.Provider value={{ DataPost, setPostData, GetSinglePost, SinglePost, setSinglePost, showSinglePost, GetUsers, setShowSinglePost , user , setUser , showCreateDiv , setCreateDiv , BookMark , setBookmark , showSaved , setShowSaved , getCmtBarMob , setCmtMob , GetExploreScroll , showPost , setPost , GetNewArray , setNewArray  }}>

        {children}


    </MediaContext.Provider>)
}