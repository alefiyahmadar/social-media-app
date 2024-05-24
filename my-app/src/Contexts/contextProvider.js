import React from 'react';

import { createContext, useContext, useEffect, useState } from "react"
import { users } from "../backend/db/users"
import { v4 as uuid } from "uuid";
import { formatDate } from "../backend/utils/authUtils";
import { useNavigate } from 'react-router-dom';


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
    const [isLoggedIn , setIsLoggedIn] = useState(false)


const [usersArray , setUserArray] = useState([])
    const [user , setUser] = useState( {
        _id: uuid(),
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        password: "adarshBalika123",
        numberEmail:"adarshbalika@gmail.com",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        profileImg:"https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
      })
      
      const navigate =useNavigate()




    const FetchData = async () => {

        const getData = (await fetch("/api/posts"))
        const PostData = await getData.json()

        setPostData(PostData.posts)
        const arrayOfUser= JSON.parse(localStorage.getItem("usersArray"))
        console.log(arrayOfUser)
        localStorage.setItem("usersArray" , JSON.stringify(arrayOfUser))
        

        

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
   
    

    const GuestHandler =()=>{
        setIsLoggedIn(true)
        navigate("/")

        localStorage.setItem("user" , JSON.stringify({
            _id: uuid(),
            firstName: "Adarsh",
            lastName: "Balika",
            username: "adarshbalika",
            password: "adarshBalika123",
            numberEmail:"adarshbalika@gmail.com",
            createdAt: formatDate(),
            updatedAt: formatDate(),
            profileImg:"https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
          }))


    }
    
    


    return (<MediaContext.Provider value={{ DataPost, setPostData, GetSinglePost, SinglePost, setSinglePost, showSinglePost, GetUsers, setShowSinglePost , user , setUser , showCreateDiv , setCreateDiv , BookMark , setBookmark , showSaved , setShowSaved , getCmtBarMob , setCmtMob , GetExploreScroll , showPost , setPost , GetNewArray , setNewArray ,isLoggedIn , setIsLoggedIn  , usersArray , setUserArray , GuestHandler}}>

        {children}


    </MediaContext.Provider>)
}