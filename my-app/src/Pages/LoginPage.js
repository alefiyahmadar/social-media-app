import { useContext, useState } from "react"
import {NavLink} from "react-router-dom"
import { MediaContext } from "../Contexts/contextProvider"
import { useNavigate } from "react-router-dom"


export const LoginPage = ()=>{

    const [logUsername , setUsername] = useState()
    const [logPassword , setPassword] =useState()

    const {isLoggedIn , setIsLoggedIn  , GuestHandler} = useContext(MediaContext)
    const navigate = useNavigate()

    const LogInHandler =()=>{
    const findUser = JSON.parse(localStorage.getItem("usersArray"))
    console.log(findUser)
    }

    return(<div style={{ }}>
        
        <div className="loginContainer">
            <h3>Bubble</h3>
            <span>
            <input onChange={(e)=>setUsername(e.target.value)} placeholder="username or email"/>

            <input onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
            <button onClick={LogInHandler} >Log in</button>

 <h4>Don't have an account? <NavLink to={"/signup"}  style={{textDecoration:"none" , fontWeight:"bold" , color:"#60a5fa"}}>Sign up</NavLink></h4>
 <p>OR</p>
 <button onClick={GuestHandler}>Log in as a Guest</button>
            </span>

           

        
        </div>
        
    </div>)
}