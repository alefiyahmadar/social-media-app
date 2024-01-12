import { createContext, useContext, useEffect, useState } from "react"

export const MediaContext = createContext()

export const ContextProvider = ({children})=>{

    const [DataPost , setPostData] = useState([])


const FetchData = async()=>{

    const getData = (await fetch("/api/posts"))
    const PostData =   await getData.json()
    console.log(PostData.posts)
    setPostData(PostData.posts)


}

useEffect(()=>{
    FetchData()
},[])
   

    return(<MediaContext.Provider value={{ DataPost , setPostData}}>

        {children}


    </MediaContext.Provider>)
}