import React from 'react';

import { createContext, useContext, useEffect, useState } from "react"
import { users } from "../backend/db/users"
import { posts } from '../backend/db/posts';
import { v4 as uuid } from "uuid";
import { formatDate } from "../backend/utils/authUtils";
import { json, useNavigate } from 'react-router-dom';


export const MediaContext = createContext()

export const ContextProvider = ({ children }) => {



    


    const [DataPost, setPostData] = useState([])
    const[GetNewArray , setNewArray] = useState([])
    const [SinglePost, setSinglePost] = useState([])
    const [showSinglePost, setShowSinglePost] = useState(false)
    const [GetUsers, SetUsersArr] = useState(users)
    const [getPost , setGetPost] = useState(posts)
    const [showCreateDiv , setCreateDiv] = useState(false)
    const [BookMark , setBookmark] = useState([])
    const [showSaved , setShowSaved ] = useState(false)
    const [getCmtBarMob , setCmtMob ]=useState(false)
    const [showPost , setPost] = useState(false)
    const [isLoggedIn , setIsLoggedIn] = useState(false)
   const [isLiked , setLiked] = useState(false)
   const [ getCmt ,setCmt] = useState("")

    const [loggedInUser , setLoggedInUser] = useState({})

    const [defaultUser , setDefaultUser] = useState( {
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
      const [newPostObj , setPostObj] = useState({
      _id:uuid(),
      image:"",
      content:"",
      likes: {
        likeCount: 0,
        likedBy: [],
        dislikedBy: [],
      },username: "",
      createdAt: formatDate(),
      updatedAt: formatDate(),
      comments:[]


      })

      
      
      const navigate =useNavigate()

      
const storedUser = JSON.parse(localStorage.getItem("user"))
const userArrayStored = JSON.parse(localStorage.getItem("usersArray"))
const StoredPost = JSON.parse(localStorage.getItem("PostArray"))


storedUser ? localStorage.setItem("user" , JSON.stringify(storedUser)) : localStorage.setItem("user" , JSON.stringify(defaultUser))


userArrayStored ? localStorage.setItem("usersArray" , JSON.stringify(userArrayStored)) : localStorage.setItem("usersArray" , JSON.stringify(GetUsers))

StoredPost ? localStorage.setItem("PostArray" , JSON.stringify(StoredPost)) : localStorage.setItem("PostArray" , JSON.stringify(getPost))


    const FetchData = async () => {

        const getData = (await fetch("/api/posts"))
        const PostData = await getData.json()

        setPostData(PostData.posts)
        
        

        

    }

    useEffect(() => {
        FetchData()
    }, [])

    const GetSinglePost = (id) => {

  const findPost = StoredPost.find((e) => e._id === id)

        setSinglePost([findPost])
        setShowSinglePost(true)
        setCmtMob(true)


    }

    const GetExploreScroll = (id)=>{

        setPost(true)

        const getPost = StoredPost.find((e)=>e._id === id)
        
        const getOtherPost = StoredPost.filter((e)=>e._id !== id)
          const NewArray = [getPost , ...getOtherPost]
          setNewArray(NewArray)
            
    
    }
   
    

    const GuestHandler =()=>{
        setIsLoggedIn(true)
        navigate("/")

        localStorage.setItem("user" , JSON.stringify({
            _id: uuid(),
            someUserAttribute1: "Adarsh",
            someUserAttribute2: "Balika",
            username: "adarshbalika",
            password: "adarshBalika123",
            createdAt: formatDate(),
            updatedAt: formatDate(),
            profileImg:"https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
          }))

          setLoggedInUser({
            _id: uuid(),
            someUserAttribute1: "Adarsh",
            someUserAttribute2: "Balika",
            username: "adarshbalika",
            password: "adarshBalika123",
            createdAt: formatDate(),
            updatedAt: formatDate(),
            profileImg:"https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
          })

    }
   

    const AddPostBtn =()=>{
console.log(newPostObj)
const GetArray = JSON.parse(localStorage.getItem("PostArray"))
const updatedArr = [...GetArray , newPostObj]
setGetPost(updatedArr)
console.log(updatedArr)
localStorage.setItem("PostArray" , JSON.stringify(updatedArr))


setCreateDiv(false)
        
    }

    const LikeHandler =(post)=>{

      console.log("click" , post)
     

      setGetPost((prevItem)=>prevItem.map((e)=>{

        if(e._id === post._id){

          const isLiked = e.likes.likedBy.includes(storedUser.username)
          const newLikedBy = isLiked ? e.likes.likedBy.filter((e)=> e !== storedUser.username) :  [...e.likes.likedBy, storedUser.username]
          console.log(newLikedBy.length)

          return {
            ...e , likes:{...e.likes , likedBy:newLikedBy , likeCount:newLikedBy.length }
          }
        }else{
          return e
        }
        
      }
      
    )
  )
  localStorage.setItem("PostArray" , JSON.stringify(getPost))

     
    
    }
   

    // useEffect(()=>{
    //   localStorage.setItem("PostArray" , JSON.stringify(getPost))
    // },[getPost])
    

    const AddCmtBtn = (id)=>{
      console.log(id , getCmt)
      console.log(StoredPost)
      const addCmt = StoredPost.map((e)=>e._id === id ? {...e , comments:[...e.comments , { _id:uuid(),username:storedUser.username, text:getCmt,votes:{upvotedBy:[],downvotedBy:[]}}]}: e)
      console.log(addCmt)
      localStorage.setItem("PostArray" , JSON.stringify(addCmt))


    }
    
    
    
    


    return (<MediaContext.Provider value={{ DataPost, setPostData, GetSinglePost, SinglePost, setSinglePost, showSinglePost, GetUsers, SetUsersArr ,setShowSinglePost  , showCreateDiv , setCreateDiv , BookMark , setBookmark , showSaved , setShowSaved , getCmtBarMob , setCmtMob , GetExploreScroll , showPost , setPost , GetNewArray , setNewArray ,isLoggedIn , setIsLoggedIn   , GuestHandler , loggedInUser , setLoggedInUser , defaultUser , setDefaultUser , storedUser ,getPost , setGetPost ,AddPostBtn , newPostObj , setPostObj  ,StoredPost , userArrayStored , LikeHandler  , isLiked , setLiked , AddPostBtn , getCmt , setCmt , AddCmtBtn}}>

        {children}


    </MediaContext.Provider>)
}