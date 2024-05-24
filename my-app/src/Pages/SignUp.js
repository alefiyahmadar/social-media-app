import { NavLink, json } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { MediaContext } from "../Contexts/contextProvider"

export const SignUpPage =()=>{

const {isLoggedIn , setIsLoggedIn , user , setUser  , usersArray , setUserArray} = useContext(MediaContext)


    const navigate = useNavigate()
    const SignUpHandler =async()=>{

        try{

            const serializedUser = JSON.stringify(user)
            console.log(serializedUser)
            localStorage.setItem("user" , serializedUser)


            const updatedArray = [...usersArray , JSON.parse(localStorage.getItem("user"))]
            console.log(updatedArray)
            localStorage.setItem("usersArray" , JSON.stringify(updatedArray))

        }catch(e){

            console.log(e)
        }

        setIsLoggedIn(true)
        navigate("/")

        console.log(user)

    }

    useEffect(()=>{
        const storedUsers = localStorage.getItem("usersArray")
    if(storedUsers){
        setUserArray(JSON.parse(storedUsers))
    }
    },[setUserArray])


    return(<div>
        <div className="loginContainer" style={{height:"70vh"}}>
        <h3 style={{marginBottom:"1rem"}}>Bubble</h3>
        <h5 style={{marginTop:"0rem" , color:"gray" , fontSize:"15px" , padding:"1rem"}}>Sign up to see photos and videos from your friends.</h5>
        <span>
        
            <input onChange={(e)=>setUser({...user , numberEmail:e.target.value})} placeholder="Mobile Number or email"/>
            <input onChange={(e)=>setUser({...user , firstName:e.target.value})} placeholder="First Name"/>
            <input onChange={(e)=>setUser({...user , lastName:e.target.value})} placeholder="Last Name"/>
            <input onChange={(e)=>setUser({...user , username:e.target.value})} placeholder="Username"/>
            <input onChange={(e)=>setUser({...user , password:e.target.value})} placeholder="password"/>
                    <button onClick={SignUpHandler}  >Sign up</button>

 <p>OR</p>
 <h4>Have an account? <NavLink to={"/login"}  style={{textDecoration:"none" , fontWeight:"bold" , color:"#60a5fa"}}>Log in</NavLink></h4>
            </span>

        </div>
    </div>)
} 