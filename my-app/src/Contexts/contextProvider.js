import { createContext, useContext, useEffect, useState } from "react"

export const MediaContext = createContext()

export const ContextProvider = ({children})=>{

    const [DataPost , setPostData] = useState([])
    const [SinglePost , setSinglePost] = useState([])
    const [showSinglePost , setShowSinglePost] = useState(false)


const FetchData = async()=>{

    const getData = (await fetch("/api/posts"))
    const PostData =   await getData.json()
    
    setPostData(PostData.posts)


}

useEffect(()=>{
    FetchData()
},[])

const GetSinglePost =(id)=>{


const findPost = DataPost.find((e)=> e._id === id)

setSinglePost([findPost])
setShowSinglePost(true)


}
   

    return(<MediaContext.Provider value={{ DataPost , setPostData , GetSinglePost , SinglePost , setSinglePost , showSinglePost}}>

        {children}


    </MediaContext.Provider>)
}